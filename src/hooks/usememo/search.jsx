import { useState, useMemo } from 'react';

function UserList() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' },
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = useMemo(() => {
    return users.filter((user) => user.name.includes(searchTerm));
  }, [users, searchTerm]);
  
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}> {user.name} </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList
