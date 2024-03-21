'use client';
import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Router } from 'next/router'

export default function SignUp() {
  const router = useRouter();
  const [loading, setLoading] = useState(false); // Added loading state

    const [user, setUser] = useState({
        username:"",
        password:"",
        email:""
    });
   async function onSignup(e:any) {
      e.preventDefault();

      try {
        setLoading(true); // Set loading to true when form is submitted


        // const response = await fetch('/api/users/signup', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(user),
        // });

        const response = await axios.post('/api/users/signup', user);
        console.log(response,"/////////////...");
        
        if (response.status === 201) {
          // Successful signup, you can redirect or handle accordingly
          router.push("/login")
          console.log('User signed up successfully!');
        } else {
          // Handle error, show error message, etc.
          console.error('Error signing up:', response.statusText);
        }
      } catch (error:any) {
        console.error('Error:', error.message);
      }finally {
        setLoading(false); // Set loading back to false when the operation is complete
      }
    }
  return (
    <div className="bg-white p-8 rounded shadow-md w-96 h-full mx-auto mt-10">
      <h2 className="text-3xl font-semibold mb-6 text-center">Sign Up</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-2">Username</label>
          <input type="text" id="username" value={user.username} onChange={(e)=>{setUser({...user,username : e.target.value})}} name="username" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">Password</label>
          <input type="password" id="password" name="password" value={user.password} onChange={(e)=>{setUser({...user,password : e.target.value})}} className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">Email</label>
          <input type="email" id="email" name="email" value={user.email} onChange={(e)=>{setUser({...user,email : e.target.value})}} className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
        </div>
        <button onClick={onSignup} type="submit" className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
        {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>
      <div className='text-center text-blue-500 m-10 hover:underline'>
      <Link href="/login">Login Page</Link>
      </div>
    </div>
  )
}
