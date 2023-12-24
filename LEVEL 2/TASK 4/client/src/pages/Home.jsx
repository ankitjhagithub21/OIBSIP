import React from 'react';
import { useNavigate } from 'react-router-dom';
const Home = () => {
 const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user'));
  const logout = () =>{
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    navigate("/login")
  }
  return (
    <div className='py-24 text-center '>
      <h1 className='text-3xl mb-3'>Welcome {user ? user.user.name : 'User'}</h1>
      <button className='px-2 py-2 bg-indigo-500 rounded text-white' onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
