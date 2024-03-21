"use client"
import { useEffect, useState } from "react"
import axios from "axios"
import Link from "next/link"

function page() {
    const [token,setToken] = useState("");
    const [verified, setVerified] = useState(false);
    const [error,setError] = useState(false);

    useEffect(() => {
      const urlToken = window.location.search.split("=")[1]
    setToken(urlToken || "");
    }, [])
    
    useEffect(() => {
        if (token.length > 0) {
          verifyUserEmail();
        }
      }, [token])


  

    const verifyUserEmail = async () => {
        try {
          await axios.post('/api/users/verifyemail',{token})
        
            setVerified(true);
        
        } catch (error:any) {
            setError(true);
            console.log(error.response.data);
            
        }
    }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">

    <h1>Verified Email</h1>

    <h2>{token ? `${token}` : "no token"}</h2>

    {verified && (
        <div><h1>Email verified</h1>
        <Link href="/login">Login</Link>
        </div>
    )}
    {error && (
        <div><h1>Error</h1>
        </div>
    )}

    </div>
  )
}

export default page