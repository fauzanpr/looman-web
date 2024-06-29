export interface FilantrophyTransactionModel {
    data: {
        id: number;
        nominal: number;
        note: string;
        transaction_date: string;
        transaction_number: string;
        transaction_proof: string;
    }[]
}