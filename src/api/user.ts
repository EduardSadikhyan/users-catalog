import type { UsersResponse } from "../types/user";

const BASE_URL = "https://dummyjson.com";

interface GetUsersParams {
  limit: number;
  skip: number;
  search: string;
}

export const getUsers = async ({
  limit,
  skip,
  search,
}: GetUsersParams): Promise<UsersResponse> => {
  const trimmedSearch = search.trim();

  const url = trimmedSearch
    ? `${BASE_URL}/users/search?q=${encodeURIComponent(trimmedSearch)}&limit=${limit}&skip=${skip}`
    : `${BASE_URL}/users?limit=${limit}&skip=${skip}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to load users");
  }

  const data: UsersResponse = await response.json();
  return data;
};
