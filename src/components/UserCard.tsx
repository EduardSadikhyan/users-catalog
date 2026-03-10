import type { User } from "../types/user";

interface UserCardProps {
  user: User;
}

export const UserCard = ({ user }: UserCardProps) => {
  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <article className="card">
      <img className="card__avatar" src={user.image} alt={fullName} />

      <div className="card__content">
        <h2 className="card__title">{fullName}</h2>

        <a className="card__link" href={`mailto:${user.email}`}>
          {user.email}
        </a>

        <p className="card__meta">
          <span>{user.company.title}</span>
          <span>•</span>
          <span>{user.company.name}</span>
        </p>

        <p className="card__meta">
          <span>{user.phone}</span>
          <span>•</span>
          <span>{user.age} y.o.</span>
        </p>
      </div>
    </article>
  );
};
