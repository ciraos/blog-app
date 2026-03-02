
//! essay
export interface EssayResponse {
    code: number;
    data: {
        list: EssayList[];
        page: number;
        page_size: number;
        total: number;
    };
    message: string;
}

interface EssayList {
    id: number;
    content: string;
    address: string;
    from: string;
    image: string[];
    aplayer: {
        id: string;
    };
    status: number;
    created_at: string;
    updated_at: string;
}
