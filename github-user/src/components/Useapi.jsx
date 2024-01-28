import React, { useEffect, useState } from 'react';

const Useapi = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await fetch('https://api.github.com/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching data from the API', error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className='main'>
      {users.map((user) => (
        <div className='container' key={user.id}>
          <img src={user.avatar_url} alt={`Profile of ${user.login}`} />
          <div className='sub-container'>
            <div className='firstpart'>
              <h3>{user.login}</h3>
            </div>
            <div className='secondpart'>
              <div className='articles'>
                <p>Public Repositories</p>
                <p>{user.public_repos}</p>
              </div>
              <div className='followers'>
                <p>Followers</p>
                <p>{user.followers}</p>
              </div>
              <div className='Rating'>
                <p>Following</p>
                <p>{user.following}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Useapi;



