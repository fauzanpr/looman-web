export interface ReceiverModel {
    data: {
        id: number,
        community_id: number,
        community_name: string,
        name: string,
        phone_number: string,
        latitude: number,
        longitude: number,
        status: string,
    }[]
}