import { NextResponse } from 'next/server'

const allowedOrigins =
  process.env.NODE_ENV === 'production' ? [''] : ['http://localhost:3000']

export const middleware = (req: {
  url: string
  nextUrl: any
  headers: any
}) => {
  const { nextUrl, headers } = req
  const { pathname, searchParams } = nextUrl
  const origin = headers.get('origin')
  //   if (origin && !allowedOrigins.includes(origin)) {
  //     return new NextResponse(null, {
  //       status: 400,
  //       statusText: 'Forbidden',
  //       headers: {
  //         'Content-Type': 'text/plain',
  //       },
  //     })
  //   }
  //   if (pathname.startsWith('/about')) {
  //     //   return NextResponse.rewrite(new URL('/about2', req.url))
  //     return NextResponse.redirect(new URL('/about2', req.url))
  //   }
  return NextResponse.next()
}

export const config = {
  matcher: ['/pages', '/about'],
}
