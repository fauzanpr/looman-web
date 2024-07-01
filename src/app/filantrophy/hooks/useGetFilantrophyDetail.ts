import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { FilantrophyHistoryDetailModel } from "../../../model/filantrophy/FilantrophyTransactionModel";
// import { useAtomValue } from "jotai";
// import { filantrophyIdAtom } from "../statemant/filantrophyDetail";
import { useParams } from "react-router-dom";

function useGetFilantrophyDetail() {
    const { historyId } = useParams();
    const query = useQuery({
        queryKey: ["filantrophy"],
        queryFn: () => {
            return axios.get<FilantrophyHistoryDetailModel>(`http://localhost:8000/api/v1/philanthropy/transaction/detail/${historyId}`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            });
        }
    });

    const historyDetail = query.data?.data.data;

    return {
        ...query,
        historyDetail
    }
}

export default useGetFilantrophyDetail