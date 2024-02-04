import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from "jose"
 

const PUBLIC_FILE = /\.(.*)$/;

const verifyJWT = async (jwt: string | Uint8Array) => {
    try {
     const { payload } = await jwtVerify(
       jwt,
       new TextEncoder().encode(process.env.JWT_TOKEN)
     );
   
     return payload;
    } catch (err) {
     console.error(err);
     return false;
    }
   };

   export default async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
   
    if (
      pathname.startsWith("/_next") ||
      pathname.startsWith("/api") ||
      pathname.startsWith("/") ||
      PUBLIC_FILE.test(pathname) 
    ) {
      return NextResponse.next();
    }
  
      // @ts-ignore
      const jwt = req.cookies.get(process.env.COOKIE_NAME);
      const isAuthenticated = !!jwt && await verifyJWT(jwt.value);
  
   
      if (
        pathname.startsWith("/signup") ||
        pathname.startsWith("/login") 
      ) {
        if (isAuthenticated) {
          req.nextUrl.pathname = "/dashboard";
          return NextResponse.redirect(req.nextUrl);
        } else return NextResponse.next();
      }
      
      else if (!isAuthenticated) {
        req.nextUrl.pathname = "/";
        return NextResponse.redirect(req.nextUrl);
      }
      return NextResponse.next();
  }
  
