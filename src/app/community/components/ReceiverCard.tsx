import { useSetAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import { receiverDetailAtom } from "../stateman/receiver";

interface IProps {
    name: string;
    status: string;
    id: number;
    // address: string;
}

function ReceiverCard({ name, status, id }: IProps) {
    const navigate = useNavigate();
    const setReceiverDetail = useSetAtom(receiverDetailAtom);
    const receiverCardClickHandler = () => {
        setReceiverDetail(prev => {
            return {
                ...prev,
                name: name,
                id: id,
                status: status
            }
        })
        navigate("/community/receiver/register");
    }
    return (
        <div className="p-4 shadow-md rounded-lg" onClick={receiverCardClickHandler}>
            <p className="text-base">{name}</p>
            {status === "active" && <p className={"text-green-500"}>Berhak Menerima</p>}
            {status === "inactive" && <p className={"text-red-500"}>Belum Berhak Menerima</p>}
            {/* <p className="text-gray-400 text-sm">{address}</p> */}
        </div>
    )
}

export default ReceiverCard;