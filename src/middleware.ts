import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    // const publicPath = request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/signup' || request.nextUrl.pathname === '/verifyemail';
    const token = request.cookies.get('token')?.value || ""
    
    if (request.nextUrl.pathname === '/profile') {
      if (token) {
        return NextResponse.rewrite(new URL('/profile', request.nextUrl))
      }else if(!token){
        return NextResponse.redirect(new URL('/login', request.nextUrl))
      }
    }
    if (request.nextUrl.pathname === '/advertisement') {
      if (token) {
        return NextResponse.rewrite(new URL('/advertisement', request.nextUrl))
      }else if(!token){
        return NextResponse.redirect(new URL('/login', request.nextUrl))
      }
    }
    


    // if (publicPath && token) {
    //     return NextResponse.redirect(new URL('/', request.nextUrl))
    // } 
    // // if (request.nextUrl.pathname === '/') {
    // //     return NextResponse.redirect(new URL('/', request.nextUrl))
    // // }
    // if (!publicPath && !token){
    //     return NextResponse.redirect(new URL('/login', request.nextUrl))
    // }
  
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/login',
    '/signup',
    '/advertisement',
    '/profile',
    '/verifyemail'
  ],
}