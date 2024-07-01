import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useAtomValue } from "jotai"
import { receiverDetailAtom } from "../stateman/receiver"
import { UpdateStatusReceiverModel } from "../../../model/community/ReceiverCreationModel";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useUpdateReceiver() {
    const receiverDetail = useAtomValue(receiverDetailAtom);
    const navigate = useNavigate();
    const mutation = useMutation({
        mutationFn: (data: UpdateStatusReceiverModel) => {
            return axios.post(`http://127.0.0.1:8000/api/v1/community/receiver/update-status/${receiverDetail.id}`, data, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
        },
        onSuccess: () => {
            toast.success("Data berhasil diubah");
            navigate("/community/receiver");
        },
        onError: () => {
            toast.error("Data gagal diubah");
        }
    });

    const onUpdate = (data: UpdateStatusReceiverModel) => mutation.mutateAsync(data);

    return {
        ...mutation,
        onUpdate
    }
}

export default useUpdateReceiver