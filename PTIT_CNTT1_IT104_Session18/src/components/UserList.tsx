import { useMemo } from 'react';
type User = {
  id: number;
  name: string;
  age: number;
};

const users: User[] = [
  { id: 1, name: 'Quang', age: 17 },
  { id: 2, name: 'Thành', age: 22 },
  { id: 3, name: 'Việt', age: 19 },
  { id: 4, name: 'Toàn', age: 15 },
  { id: 5, name: 'An', age: 25 },
];

function UserList() {
  const filteredUsers = useMemo(() => {
    return users.filter(user => user.age > 18);
  }, []);

  return (
    <div>
      <ol>
        {filteredUsers.map(user => (
          <li key={user.id}>
            {user.name} ({user.age} tuổi)
          </li>
        ))}
      </ol>
    </div>
  );
}

export default UserList;
