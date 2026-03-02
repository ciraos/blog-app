
//!
export interface UserResponse {
    code: number;
    data: {
        avatar: string;
        created_at: string;
        email: string;
        id: string;
        latstLoginAt: string;
        nickname: string;
        status: number;
        updated_at: string;
        userGroup: {
            description: string;
            id: string;
            name: string;
        };
        userGroupId: number;
        username: string;
        website: string;
    },
    message: string;
}
