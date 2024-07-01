export interface ReceiverCreationModel {
    community_id?: string | number;
    name?: string;
    address?: string;
    phone?: string;
    contact_person?: string;
    note?: string;
}

export interface MapModel {
    long: string | number;
    lat: string | number;
}