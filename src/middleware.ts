import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

type Route = {
  fullMatch: boolean
  privateRoute: boolean
  regex?: RegExp
  redirect?: string
}

type Routes = {
  [key: string]: Route
}

const PRIVATE_REDIRECT = '/'
const PUBLIC_REDIRECT = '/auth/signin'
const routes: Routes = {
  '/': { fullMatch: true, privateRoute: true },
  '/transactions': { fullMatch: false, privateRoute: true },
  '/auth/signin': { fullMatch: true, privateRoute: false },
}

export default async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: String(process.env.NEXTAUTH_SECRET), // secureCookie: true,
  })

  const isLogged = Boolean(token)
  const { pathname } = req.nextUrl

  const foundRoute = Object.entries(routes).find(([route, options]) => {
    if (options.regex) return options.regex.test(pathname)
    return route.startsWith(pathname)
  })

  if (!foundRoute) return NextResponse.next()

  const [route, options] = foundRoute

  const { privateRoute, fullMatch, redirect } = options

  if (fullMatch && route !== pathname) {
    return NextResponse.next({ status: 404 })
  }

  if (privateRoute && !isLogged) {
    return NextResponse.redirect(getUrl(redirect || PUBLIC_REDIRECT, req))
  }

  if (!privateRoute && isLogged) {
    return NextResponse.redirect(getUrl(redirect || PRIVATE_REDIRECT, req))
  }

  return NextResponse.next()
}

const getUrl = (url: string, req: NextRequest) => {
  const redirectUrl = req.nextUrl.clone()
  redirectUrl.pathname = url
  return redirectUrl
}
