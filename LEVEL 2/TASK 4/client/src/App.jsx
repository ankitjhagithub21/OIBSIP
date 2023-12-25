import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import "./App.css"
import { Toaster } from 'react-hot-toast'

const App = () => {
 
  const [user,setUser] = useState(null)
   const setUserData = (username) =>{
      setUser(username)
   }
  
  return (
    <BrowserRouter>
    <Toaster/>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login setUserData={setUserData}/>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App