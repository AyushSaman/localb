// pages/api/login.js
import { connect } from "@/app/dbConfig/db";
import {NextRequest, NextResponse} from "next/server";
import User from "@/models/userModel";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

let sec:string = "TheBestKeyEver"

connect(); // Custom function to connect to MongoDB, see step 3

export async function POST(request:NextRequest) {
    try {
        const reqBody = await request.json();
      const { username, password } = reqBody;

      // Find the user in the database
      const user = await User.findOne({ username: username , isVerified:true});

      // If the user is not found, return an error
      if (!user) {
        return NextResponse.json({ error: 'Invalid credentials' },{status:401});
      }

      // Compare the provided password with the hashed password in the database
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return NextResponse.json({ error: 'Invalid credentials' },{status:401});
      }

      // If the password matches, you can set up a session or JWT token for authentication

      // If the password matches, generate a JWT token
      const token = await jwt.sign({ userId: user._id, username: user.username, email: user.email }, sec, { expiresIn: '1d' });

      // Send the token in the response
      const responseData = { token, message: 'Login successful!' , success:true};


     const response = NextResponse.json(responseData,{status:200});
     response.cookies.set("token",token,{
        httpOnly:true
      });
      return response

    } catch (error:any) {
      console.error('Error:', error.message);
      const errorResponse = { error: 'Internal Server Error' };
      return NextResponse.json(errorResponse,{status:500});
    }
}