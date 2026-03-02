
//!
export interface PostCategoriesResponse {
    code: number;
    message: string;
    data: PostCategoriesItem[];
}

interface PostCategoriesItem {
    count: number;
    created_at: string;
    id: string;
    name: string;
    updated_at: number;
    is_series: boolean;
}
