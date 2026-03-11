/*
 * @ Server Page
*/
import type { Metadata } from "next";
import LoginPage from "@/components/(auth)/loginpage";

export const metadata: Metadata = {
    title: "登录",
};

export default function Login() {
    return (
        <>
            <LoginPage />
        </>
    )
}
