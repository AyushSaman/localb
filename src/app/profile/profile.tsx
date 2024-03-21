// "use client";
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import React from 'react';
// import { useEffect } from './page';



// export default function profile() {
//   const Router = useRouter();


//   useEffect(() => {
//     first;

//     return () => {
//       second;
//     };
//   }, [third]);


//   async function logout() {
//     try {
//       const response = await axios.get('/api/users/logout');
//       if (response.status === 200) {
//         Router.push("/login");
//       }
//     } catch (error: any) {
//       console.error('Error logging in:');
//     }
//   }
//   return (
//     <div>UserProfile
//       <button onClick={logout} className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
//         Logout
//       </button>
//     </div>
//   );
// }
