
//!
export interface PostTagsResponse {
    code: number;
    message: string;
    data: PostTagsItem[];
}

interface PostTagsItem {
    count: number;
    created_at: string;
    id: string;
    name: string;
    updated_at: number;
}
