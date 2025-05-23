type Props = {
  name: String;
  avatar: String;
  roles: String[];
  address?: String;
};

export const Person = ({ name, avatar, roles, address }: Props) => {
  return (
    <div>
      <h1>{name}</h1>

      <img src={avatar} alt={name} className="w-40" />

      <ul>
        <li>
          {roles[0]}
          {roles[1]}
        </li>
      </ul>
    </div>
  );
};
