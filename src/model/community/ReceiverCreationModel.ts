export interface ReceiverCreationModel {
    name?: string;
    phone?: string;
    latitude?: string;
    longitude?: string;
    address?: string;
    age?: "anak-anak" | "remaja" | "dewasa" | "lansia";
}

export interface MapModel {
    long: string | number;
    lat: string | number;
}

export interface UpdateStatusReceiverModel {
    _method: "PUT";
    status: string;
}