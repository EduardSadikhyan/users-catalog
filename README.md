# Users Catalog

Test task: implement a users catalog page using a public API.

API: https://dummyjson.com/docs/users

## Features

- Display list of users
- Search users by name
- Pagination
- Loading state
- Error state
- Empty state
- Responsive layout

## Tech Stack

- React
- TypeScript
- Vite
- TanStack React Query

## Getting Started

Clone the repository:

git clone https://github.com/EduardSadikhyan/users-catalog.git

Install dependencies:

npm install

Start development server:

npm run dev

Open in browser:

http://localhost:5173

## Build

To create a production build:

npm run build

To preview the build:

npm run preview

## API Endpoints

List users with pagination:

GET https://dummyjson.com/users?limit=10&skip=0

Search users:

GET https://dummyjson.com/users/search?q=Emily

## API Response

The API returns:

- users — array of users for the current page
- total — total number of users
- skip — offset
- limit — page size

Pagination is calculated using `total` and `limit`.

## Notes

- Search input uses debounce to reduce unnecessary API requests.
- Previous data is preserved during pagination to avoid UI flickering.
- The app handles loading, error, and empty states.
