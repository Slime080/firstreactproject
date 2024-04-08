import React, { useState } from 'react';

function Uselogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent form submission
    fetch('https://fakestoreapi.com/auth/login', {  
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.token) {
          setLoggedIn(true);
          setError('');
          // Handle successful login, e.g., redirect to dashboard
        } else {
          setLoggedIn(false);
          setError('Invalid username or password');
        }
      })
      .catch((error) => {
        setError('An error occurred while logging in');
        console.error('Error:', error);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gradient-to-br from-purple-200 to-blue-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <button type="submit" className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Login</button>
        </form>
        {error && <div className="text-red-500 mt-2">{error}</div>}
        {loggedIn && <div className="text-green-500 mt-2">Logged in successfully!</div>}
      </div>
    </div>
  );
}

export default Uselogin;
