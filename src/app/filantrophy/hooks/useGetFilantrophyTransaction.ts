import { useQuery } from "@tanstack/react-query"
import axios from "axios";
import { FilantrophyTransactionModel } from "../../../model/filantrophy/FilantrophyTransactionModel";

function useGetFilantrophyTransaction() {
  const query = useQuery({
    queryKey: [""],
    queryFn: () => {
      return axios.get<FilantrophyTransactionModel>( "http://localhost:8000/api/v1/philanthropy/transaction", {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      });
    }
  });

  const filantrophyTransaction = query.data;

  return {
    ...query,
    filantrophyTransaction
  }
}

export default useGetFilantrophyTransaction;