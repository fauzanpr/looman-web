export interface FilantrophyTransactionModel {
    data: {
        id: number;
        nominal: number;
        note: string;
        transaction_date: string;
        transaction_status: "menunggu" | "berhasil" | "gagal";
        transaction_number: string;
        transaction_proof: string;
    }[]
}

export interface FilantrophyTransactionCreationModel {
    nominal?: string | number;
    transaction_proof?: File | string;
    status?: string;
    note?: string;
}

export interface FilantrophyProfileModel {
    data: {
        picture: string,
        id: number,
        philanthropy_number: string,
        full_name: string,
        email: string,
        date_of_birth: string,
        phone_number: string,
        full_address: string,
        city: string
    }
}

export interface FilantrophyHistoryDetailModel {
    data: {
        id: number,
        transaction_number: string,
        note: string,
        nominal: number,
        status: string,
        transaction_status: string,
        created_at: string;
    }
}