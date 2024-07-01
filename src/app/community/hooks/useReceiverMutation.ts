import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { ReceiverCreationModel } from "../../../model/community/ReceiverCreationModel"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useReceiverMutation() {
    const navigate = useNavigate();
    const mutation = useMutation({
        mutationFn: (data: ReceiverCreationModel) => {
            return axios.post("http://127.0.0.1:8000/community/receiver", data, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
        },
        onSuccess: () => {
            toast.success("Tambah data berhasil");
            navigate("/community/receiver");
        },
        onError: () => {
            toast.error("Tambah data gagal");
        }
    });

    const onCreate = (data: ReceiverCreationModel) => mutation.mutateAsync(data);

    return {
        ...mutation,
        onCreate
    }
}

export default useReceiverMutation