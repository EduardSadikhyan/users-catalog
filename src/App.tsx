import { useEffect, useMemo, useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Pagination } from "./components/Pagination";
import { SearchInput } from "./components/SearchInput";
import { UsersGrid } from "./components/UsersGrid";
import { useDebounce } from "./hooks/useDebounce";
import { getUsers } from "./api/user";

const LIMIT = 10;

function App() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const debouncedSearch = useDebounce(search, 400);
  const skip = (page - 1) * LIMIT;

  const handlePageChange = (nextPage: number) => {
    if (nextPage < 1) return;
    if (nextPage > totalPages) return;

    setPage(nextPage);
  };

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const { data, isLoading, isFetching, isError, error, refetch } = useQuery({
    queryKey: ["users", { search: debouncedSearch, limit: LIMIT, skip }],
    queryFn: () =>
      getUsers({
        search: debouncedSearch,
        limit: LIMIT,
        skip,
      }),
    placeholderData: keepPreviousData,
  });

  const totalPages = useMemo(() => {
    if (!data) return 0;
    return Math.ceil(data.total / LIMIT);
  }, [data]);

  return (
    <main className="page">
      <div className="container">
        <header className="header">
          <div>
            <h1 className="header__title">Users Catalog</h1>
            <p className="header__subtitle">
              Search users, browse pages, and view main profile info.
            </p>
          </div>

          <SearchInput
            value={search}
            onChange={setSearch}
            onClear={() => setSearch("")}
          />
        </header>

        {isLoading ? (
          <div className="state">Loading users...</div>
        ) : isError ? (
          <div className="state state--error">
            <p>
              {error instanceof Error ? error.message : "Something went wrong"}
            </p>
            <button
              className="retry-button"
              type="button"
              onClick={() => refetch()}
            >
              Try again
            </button>
          </div>
        ) : data && data.users.length === 0 ? (
          <div className="state">No users found.</div>
        ) : (
          <>
            <div className="toolbar">
              <p className="toolbar__text">
                Showing <strong>{data?.users.length ?? 0}</strong> of{" "}
                <strong>{data?.total ?? 0}</strong> users
              </p>

              {isFetching && (
                <span className="toolbar__status">Updating...</span>
              )}
            </div>

            <UsersGrid users={data?.users ?? []} />

            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </main>
  );
}

export default App;
