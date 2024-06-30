import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { FilantrophyTransactionCreationModel } from "../../../model/filantrophy/FilantrophyTransactionModel";

function useFilantrophyTransactionMutation() {
    const mutation = useMutation({
        mutationFn: (data: FormData) => axios.post("http://localhost:8000/api/v1/philanthropy/transaction", data, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
    });

    const onCreate = (data: FilantrophyTransactionCreationModel, file: File) => {
        const formData = new FormData();
        formData.append("nominal", String(data.nominal));
        formData.append("transaction_proof", file, String(data.transaction_proof));
        formData.append("status", "masuk");
        formData.append("note", String(data.note));
        mutation.mutateAsync(formData);
    };

    return {
        ...mutation,
        onCreate
    }
}

export default useFilantrophyTransactionMutation