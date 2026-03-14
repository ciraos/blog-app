import {
    NextRequest,
    NextResponse
} from "next/server";

export default function proxy(req: NextRequest): NextResponse {
    const token = req.cookies.get("token")?.value;
    const { pathname } = req.nextUrl;

    //! 场景 1: 无 token
    if (!token) {
        //? 场景 1.1 访问需要认证的页面时重定向到登录页
        if (pathname.startsWith('/admin')) {
            return NextResponse.redirect(new URL('/login', req.url));
        }
        return NextResponse.next();
    }

    //! 场景 2: 有 token
    else {
        //? 场景 2.1 在登录页时重定向到仪表板
        if (pathname === '/login') {
            return NextResponse.redirect(new URL('/admin/dashboard', req.url));
        }
        //? 修复：有 token 且不在登录页时，允许继续访问
        return NextResponse.next();
    }
}

/*
 * matcher:
*/
export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)'
    ]
}
