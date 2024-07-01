import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CommunityProfileModel } from "../../../model/community/ProfileModel";

function useCommunityProfile() {
    const query = useQuery({
        queryKey: ["community-profile"],
        queryFn: () => {
            return axios.get<CommunityProfileModel>(`http://localhost:8000/api/v1/community/profile`, {
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

export default useCommunityProfile;