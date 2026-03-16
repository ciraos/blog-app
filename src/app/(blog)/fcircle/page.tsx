/*
 * server Page
*/
import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const metadata: Metadata = {
    title: "朋友动态",
};

export default async function Fcircle() {
    return (
        <>
            <h2 className="text-3xl font-bold mb-12 text-gray-800">🔗 朋友动态</h2>

            {/* 朋友动态 */}
        </>
    )
}
