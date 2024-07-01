export interface ReceiverCreationModel {
    community_id?: string | number;
    name?: string;
    phone?: string;
    latitude?: string;
    longitude?: string;
    address?: string;
    contact_person?: string;
    notes?: string;
}

export interface MapModel {
    long: string | number;
    lat: string | number;
}

export interface UpdateStatusReceiverModel {
    _method: "PUT";
    status: string;
}