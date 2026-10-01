import { NextResponse } from "next/server";

export function middleware(request) {
  const authorization = request.headers.get("authorization");

  if (!authorization || !authorization.startsWith("Basic ")) {
    return new NextResponse("Authentication required", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Sound Doctrine Upload"',
      },
    });
  }

  const encoded = authorization.slice(6);

  let decoded;

  try {
    decoded = atob(encoded);
  } catch {
    return new NextResponse("Authentication required", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Sound Doctrine Upload"',
      },
    });
  }

  const separator = decoded.indexOf(":");
  const username = separator >= 0 ? decoded.slice(0, separator) : "";
  const password = separator >= 0 ? decoded.slice(separator + 1) : "";

  if (
    username !== process.env.UPLOAD_USERNAME ||
    password !== process.env.UPLOAD_PASSWORD
  ) {
    return new NextResponse("Invalid credentials", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Sound Doctrine Upload"',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/upload/:path*",
};
