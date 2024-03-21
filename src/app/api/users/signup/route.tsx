import { connect } from "@/app/dbConfig/db";
import User from "@/models/userModel";
import {NextRequest, NextResponse} from "next/server";
import { sendMail } from "@/helpers/mailer";
import bcrypt from 'bcryptjs';

connect();


// export async fuction POST{request: NextRequest}{
//     try {
//         const reqBody = await request.json()
//     } catch (error) {
        
//     }
// }

export async function POST(request:NextRequest) {
  // if (request.method === 'POST') {

    try {
      const reqBody = await request.json();
      const {username,password,email} = reqBody;
        // console.log(reqBody,"/////////////////");
        
        
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        
        if (existingUser) {
          // return NextResponse.json({ error: 'Username or email already exists.' },{status : 500});
          return NextResponse.json({ error: 'Username or email already exists.' },{status : 500});
        }
        
        // Hash the password before saving it
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        // Create a new user instance
        const newUser = new User({ username, password: hashedPassword, email });
        
        // Save the user to the database
        const savedUser = await newUser.save();


        // Send verification email
        // await sendMail(email, emailType:"VERIFY",userId:savedUser.id);
        await sendMail(email, "VERIFY",savedUser.id)


        
        const responseData = { message: 'User signed up successfully!' , success:true, savedUser};
        // response.status(201).json({ message: 'User signed up successfully!' , user:savedUser});
        
        return NextResponse.json(responseData,{ status: 201 } );
        
        
        
        
        
      } catch (error:any) {
        console.log(error);
        console.error('Error:', error.message);
        // NextResponse.json({ error: 'Internal Server Error' },{ status: 500 });
        return NextResponse.json({ error: 'Internal Server Error' });
        
      }
    }

    // else
    // {
    //   return NextResponse.json({ error: 'Method Not Allowed' });
    // }
// }
// export async function handler(request:any,response:any) {
//   if (request.method === 'POST') {

//     try {
//       const reqBody = await request.json();
//       const {username,password,email} = reqBody;
//         console.log(reqBody,"/////////////////");
        
        
//         const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        
//         if (existingUser) {
//           // return NextResponse.json({ error: 'Username or email already exists.' },{status : 500});
//           return NextResponse.json({ error: 'Username or email already exists.' },{status : 500});
//         }
        
//         // Hash the password before saving it
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);
        
//         // Create a new user instance
//         const newUser = new User({ username, password: hashedPassword, email });
        
//         // Save the user to the database
//         const savedUser = await newUser.save();
        
//         // const responseData = { message: 'User signed up successfully!' , success:true, savedUser};
//         response.status(201).json({ message: 'User signed up successfully!' , user:savedUser});
        
//         // NextResponse.json(responseData,{ status: 201 } );
        
        
        
        
        
//       } catch (error:any) {
//         console.log(error);
//         console.error('Error:', error.message);
//         // NextResponse.json({ error: 'Internal Server Error' },{ status: 500 });
//         response.status(500).json({ error: 'Internal Server Error' });
        
//       }
//     }else
//     {
//       response.status(405).json({ error: 'Method Not Allowed' });
//     }
// }