"use client";
import OffersCards from '@/components/Profile/OffersCards';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
type userInfo = {
  user : string;
  email: string
}

export default function profile() {
  const Router = useRouter();
  const [userInfo, setUserInfo] = useState<userInfo>({user : "", email: ""});


  React.useEffect(() => {
    userByToken();
  }, []);

  async function userByToken() {
    const response = await axios.get('/api/users/getuser');
    setUserInfo({
      user : response.data.decodedToken.username,
      email : response.data.decodedToken.email
    })
  }

  const redeemButtonClick = () => {
    // Add your button click logic here
    alert('Button Clicked');
    console.log('Button Clicked');
  };


  async function logout() {
    try {
      const response = await axios.get('/api/users/logout');
      if (response.status === 200) {
        Router.push("/login");
      }
    } catch (error: any) {
      console.error('Error logging in:');
    }
  }
  return (
    // <div>UserProfile {user && user}
    //   <button onClick={logout} className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
    //     Logout
    //   </button>
    // </div>

    <div className="container mx-auto mt-8">
      <div className="flex">
        <div className="w-1/4">
          {/* Profile Image */}
          <img
            src="https://placekitten.com/200/200"  // Replace with your profile image URL
            alt="Profile"
            className="rounded-full w-32 h-32 object-cover"
          />
        </div>
        <div className="w-3/4 pl-8">
          {/* User Info */}
          <h1 className="text-3xl font-bold mb-4">{userInfo && userInfo.user}</h1>
          <p className="text-gray-600 mb-4">{userInfo && userInfo.email}</p>
          
          {/* Stats */}
          <div className="flex">
            <div className="mr-8">
              <p className="font-bold">Earned</p>
              <p>100</p>
            </div>
            <div className="mr-8">
              <p className="font-bold">Consumed</p>
              <p>500</p>
            </div>
            <div>
              <p className="font-bold">Total</p>
              <p>200</p>
            </div>
          </div>
          {/* Bio */}
          {/* <p className="text-gray-700 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p> */}
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center mt-14">
        <OffersCards 
        imageUrl="https://placekitten.com/300/200"  // Replace with your image URL
        mainHeading="Card Title"
        subHeading="Some description or additional information about the card."
        onClick={redeemButtonClick}
        />
        <OffersCards 
        imageUrl="https://placekitten.com/300/200"  // Replace with your image URL
        mainHeading="Card Title"
        subHeading="Some description or additional information about the card."
        onClick={redeemButtonClick}
        />
        <OffersCards 
        imageUrl="https://placekitten.com/300/200"  // Replace with your image URL
        mainHeading="Card Title"
        subHeading="Some description or additional information about the card."
        onClick={redeemButtonClick}
        />
      </div>
    </div>





  );
}
