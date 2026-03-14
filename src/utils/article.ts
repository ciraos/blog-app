
const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function fetchPostList(page: number, pageSize = 10) {
    const res = await fetch(`${baseUrl}/public/articles?page=${page}&pageSize=${pageSize}`, {
        next: { revalidate: 60 * 60 },
    });

    if (!res.ok) {
        throw new Error('获取文章列表失败！');
    }

    return res.json();
}
