import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { ReceiverModel } from "../../../model/community/Receiver";

function useGetCommunityReceivers() {
    const query = useQuery({
        queryKey: [""],
        queryFn: () => {
            return axios.get<ReceiverModel>("http://localhost:8000/api/v1/community/receiver", {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                }
            });
        }
    })

    const receivers = query.data?.data;

    return {
        ...query,
        receivers
    }
}

export default useGetCommunityReceivers