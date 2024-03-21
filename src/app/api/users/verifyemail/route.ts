import { connect } from "@/app/dbConfig/db";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();


export async function POST(request:NextRequest) {
    try {
        const reqBody = await request.json();
        const {token} = reqBody
        

    //    const user = await User.findOne({verifyToken:token, verifyTokenExpiry:{gt: new Date().getTime()}});
       const user = await User.findOne({verifyToken:token});
        
       if (!user) {
        return NextResponse.json({error:"invalid token"},{status:400});
       }
       user.isVerified = true;
       user.verifyToken = undefined;
       user.verifyTokenExpiry = undefined;
       
    //    console.log(user);

       await user.save();

       return NextResponse.json({
        message: "Email verified successfully!",
        succuss:true
       })
       
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
}