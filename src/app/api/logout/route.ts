
import { NextResponse } from "next/server";

export function DELETE() {
    const res = NextResponse.json(
        {
            success: true,
            msg: "登出成功"
        },
        { status: 200 }
    );

    res.cookies.set("token", "", { maxAge: 0 });
    res.cookies.set("refresh_token", "", { maxAge: 0 });

    return res;
}
