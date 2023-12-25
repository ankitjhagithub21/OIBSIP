import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Image from '../components/Image'
import toast from 'react-hot-toast'
const Register = () => {
  const navigate = useNavigate()
  const initialData = {
    name: "",
    email: "",
    password: ""
  }
  const [data, setData] = useState(initialData)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch("https://login-authentication-7cdk.onrender.com/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      const responseData = await res.json();
      
      if (res.status == 201) {
        toast.success(responseData.message)
        setData(initialData)
        navigate("/login")
      }else{
        toast.error(responseData.message)
      }
    } catch (error) {
      console.error("Error during register:", error);
      alert("An unexpected error occurred during register.");
    }

  }
  return (
    <section className="text-gray-600 body-font relative shadow bg-white rounded-lg mx-2">
      <div className="container p-2 flex sm:flex-nowrap flex-wrap-reverse">

        <div className="lg:w-1/2 md:w-1/2  flex flex-col justify-center md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-2">
          <h2 className="text-indigo-500 text-2xl  mb-1 font-medium ">
            Register Page
          </h2>


          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={data.name}
                onChange={handleChange}
                required
                autoComplete='off'
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={data.email}
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
                value={data.password}
                onChange={handleChange}
                required
                autoComplete='off'

              />
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Register
            </button>
          </form>

        </div>
       <Image/>
      </div>
    </section>
  )
}

export default Register