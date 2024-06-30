import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FilantrophyProfileModel } from "../../../model/filantrophy/FilantrophyTransactionModel";

function useFilantrophyProfile() {
    const query = useQuery({
        queryKey: ["filantrophy-profile"],
        queryFn: () => {
            return axios.get<FilantrophyProfileModel>(`http://localhost:8000/api/v1/philanthropy/profile`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            });
        }
    });

    const profile = query.data?.data.data;

    return {
        ...query,
        profile
    }
}

export default useFilantrophyProfile;