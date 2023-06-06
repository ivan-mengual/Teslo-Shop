import { RequestCookies } from 'next/dist/compiled/@edge-runtime/cookies';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isValidToken } from './utils/jwt';
import { jwt } from './utils';
 

export async function middleware(req: NextRequest) {
  
// console.log('middleware: ', request.cookies.toString())

  const cookies:RequestCookies = req.cookies;
  const token = cookies.has('token') ? cookies.get('token')?.value : '' ;
  
  return NextResponse.next()


  // try {
  //   await jwt.isValidToken(token)
  //   return NextResponse.next();
  // } catch (error) {
  //   return Response.redirect('/auth/login')
  // }
  
  
}
 

export const config = {
  matcher: '/checkout/:path*',
};