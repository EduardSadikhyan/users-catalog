export interface Company {
  name: string;
  department: string;
  title: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName?: string;
  email: string;
  phone: string;
  image: string;
  age: number;
  gender: string;
  company: Company;
}

export interface UsersResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}
