import { NextResponse } from "next/server";

export async function GET() {
    // if (request.method === 'POST') {
  try {
    const token = "";
    const responseData = { token, message: 'Logout Successfull!' , success:true};


    const response = NextResponse.json(responseData,{status:200});
    response.cookies.set("token",token,{
       httpOnly:true
     });
     return response
          
        } catch (error:any) {
          console.log(error);
          console.error('Error:', error.message);
          return NextResponse.json({ error: 'Internal Server Error' });
          
        }
      }