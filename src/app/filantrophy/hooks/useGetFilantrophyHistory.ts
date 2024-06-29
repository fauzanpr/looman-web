import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { FilantrophyTransactionModel } from "../../../model/filantrophy/FilantrophyTransactionModel";

function useGetFilantrophyHistory() {
    const query = useQuery({
        queryKey: ["filantrophy-history"],
        queryFn: () => {
            return axios.get<FilantrophyTransactionModel>("http://localhost:8000/api/v1/philanthropy/transaction/history", {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            });
        }
    });

    const filantrophyHistory = query.data?.data;

    return {
        ...query,
        filantrophyHistory
    }
}

export default useGetFilantrophyHistory