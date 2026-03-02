
//!
export interface IpInfoResponse {
    code: number;
    message: string;
    data: {
        ip: string;
        country: string;
        province: string;
        city: string;
        isp: string;
        latitude: number;
        longitude: number;
        address: string;
    };
    request_id: string;
}
