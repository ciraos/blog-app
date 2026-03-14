import {
    NextRequest,
    NextResponse
} from "next/server";

export default function proxy(req: NextRequest) {
    const token = req.cookies.get("token")?.value;
    const { pathname } = req.nextUrl;

    //! 场景1: 无token
    if (!token) {
        //?? 场景1.1 访问需要认证的页面时重定向到登录页
        if (pathname.startsWith('/admin')) {
            return NextResponse.redirect(new URL('/login', req.url));
        }
        return NextResponse.next();
    }

    //! 场景 2: 有 token
    else {
        //?? 场景 2.1 在登录页时重定向到仪表板
        if (pathname === '/login') {
            return NextResponse.redirect(new URL('/admin/dashboard', req.url));
        }
    }
}

export const config = {
    matcher: []
}
