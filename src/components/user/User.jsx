import { useEffect, useState } from 'react';

const User = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        setUsers(data.map((user) => user.name));
      } catch (err) {
        setError('Error fetching users');
      }
    };
    fetchData();
  }, [users]);

  return (
    <>
      <h1>Users</h1>
      {error && <p>{error}</p>}
      <ul>
        {users.map((userName, idx) => (
          <li key={idx}>{userName}</li>
        ))}
      </ul>
    </>
  );
};

export default User;
