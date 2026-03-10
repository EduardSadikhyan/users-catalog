import type { User } from "../types/user";
import { UserCard } from "./UserCard";

interface UsersGridProps {
  users: User[];
}

export const UsersGrid = ({ users }: UsersGridProps) => {
  return (
    <section className="grid">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </section>
  );
};
