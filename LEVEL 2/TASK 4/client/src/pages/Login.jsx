import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Image from '../components/Image'
const Login = ({setUserData}) => {
  const navigate = useNavigate()
  const initialData = {
    email: "",
    password: "",

  }
  const [formData, setFormData] = useState(initialData)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      const responseData = await res.json();
      alert(responseData.message)

      if (res.status === 200) {
        
        setFormData(initialData)
        const userRes = await fetch('http://localhost:3000/api/auth/user', {
          method: 'GET',
          headers: {
           
            Authorization: `Bearer ${responseData.token}`,
          },
        });

        const userData = await userRes.json();
       
    
        localStorage.setItem('user', JSON.stringify(userData));
        setUserData(userData) 
        navigate("/")
      }

    } catch (error) {
      console.error("Error during login:", error);
      alert("An unexpected error occurred during login.");
    }
  }

  return (
    <section className="text-gray-600 body-font relative shadow bg-white rounded-lg mx-2">
      <div className="container p-2 flex sm:flex-nowrap flex-wrap">
       <Image/>
        <div className="lg:w-1/2 md:w-1/2  flex flex-col justify-center md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-2">
          <h2 className="text-indigo-500 text-2xl  mb-1 font-medium ">
            Login Page
          </h2>


          <form onSubmit={handleSubmit}>
            <div className="relative my-4">
              <label htmlFor="email" className="leading-7  text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete='off'
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="password" className="leading-7 text-sm text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={formData.password}
                onChange={handleChange}
                required
                autoComplete='off'
              />
            </div>

            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Login
            </button>
          </form>
          <p className=" text-gray-500 mt-5 text-lg">
            New User ? <Link to='/register' className='underline text-indigo-500'>Register here</Link>
          </p>
        </div>
      </div>
    </section>

  )
}

export default Login