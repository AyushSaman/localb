import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request:NextRequest) {
    const token = request.cookies.get('token')?.value || "";
    const decodedToken = jwt.verify(token,process.env.TOKEN_SECRET!);
    const responseData = { decodedToken , success:true};

    return NextResponse.json(responseData,{status:200});
    
}