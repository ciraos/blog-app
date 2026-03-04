import { NextRequest, NextResponse } from "next/server";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function POST(req: NextRequest) {
    try {
        const { email, password, repeat_password } = await req.json();

        if (!email || !password || !repeat_password) {
            return NextResponse.json(
                { success: false, message: "邮箱、密码和重复密码不能为空" },
                { status: 400 }
            );
        }

        // 密码一致性校验
        if (password !== repeat_password) {
            return NextResponse.json(
                { success: false, message: "两次输入的密码不一致" },
                { status: 400 }
            );
        }

        if (!baseUrl) {
            return NextResponse.json(
                { success: false, message: ".env文件中网址配置错误" },
                { status: 500 }
            );
        }

        const reg = await fetch(`${baseUrl}/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password, repeat_password })
        });

        const data = await reg.json();

        // 判断请求是否成功
        if (!reg.ok) {
            return NextResponse.json(
                { success: false, message: data.message || "注册失败" },
                { status: reg.status }
            );
        }

        return NextResponse.json(data, { status: 200 });

    } catch (error) {
        console.error("Registration error:", (error as Error).message);
        return NextResponse.json(
            { success: false, message: "服务器错误" },
            { status: 500 }
        );
    }
}
