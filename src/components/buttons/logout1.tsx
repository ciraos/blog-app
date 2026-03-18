"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function LogoutButton1() {
    const router = useRouter();

    const handlerLogout = async () => {
        const b = await fetch("/api/logout", {
            "method": "DELETE",
        });
        const data = await b.json();
        if (data.success) {
            router.refresh();
        }
    };

    return (
        <>
            <Button
                onClick={handlerLogout}
            >
                登出
            </Button>
        </>
    )
}
