'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const LoginForm = () => {
  const Router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e:any) => {
    e.preventDefault();
    console.log(formData);
    

    try {
      setLoading(true);

      const response = await axios.post('/api/users/login', formData);
      console.log(response);
      

      if (response.status === 200) {
        // const { token } = response.data;

        // Store the token in local storage or a secure cookie
        // localStorage.setItem('token', token);

        // Successful login, you can redirect or handle accordingly
        console.log('Login successful!');
        Router.push("/advertisement");
      } else {
        // Handle error, show error message, etc.
        console.error('Error logging in:', response.statusText);
      }
    } catch (error:any) {
      console.error('Error:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded shadow-md w-96 mx-auto mt-10">
      <h2 className="text-3xl font-semibold mb-6 text-center">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-2">Username</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">Password</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue" disabled={loading}>
          {loading ? 'Logging In...' : 'Login'}
        </button>
      </form>
      <div className='text-center text-blue-500 m-10 hover:underline'>
    <Link href="/signup">Signup Page</Link>
    </div>
    </div>
  );
};

export default LoginForm;