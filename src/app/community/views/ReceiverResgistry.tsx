import { useAtomValue } from "jotai"
import CommunityLayout from "./CommunityLayout"
import { receiverDetailAtom } from "../stateman/receiver";
import useUpdateReceiver from "../hooks/useUpdateReceiver";
import { useNavigate } from "react-router-dom";

function ReceiverResgistry() {
    const receiverDetail = useAtomValue(receiverDetailAtom);
    const { onUpdate, isPending } = useUpdateReceiver();
    const navigate = useNavigate();
    const onAccBtnHandler = () => {
        onUpdate({
            _method: "PUT",
            status: receiverDetail.status === "active" ? "inactive" : "active"
        });
    };
    const onNotBtnHandler = () => {
        navigate("/community/receiver");
    }
    return (
        <CommunityLayout headerType="backMenu" headerLabel="Daftarkan Penerima" headerHref="/community/receiver">
            <main className="px-4 py-8 flex flex-col gap-4 mb-16">
                <p>Apakah Anda yakin mengubah status {receiverDetail.name} menjadi {receiverDetail.status === "active" ? "Belum Berhak Menerima" : "Berhak Menerima"}?</p>
                <button className="bg-primary text-white p-2" onClick={onAccBtnHandler}>{isPending ? "Mengirim..." : "Kirim"}</button>
                <button className="bg-red-500 text-white p-2" onClick={onNotBtnHandler}>Tidak</button>
            </main>
        </CommunityLayout>
    )
}

export default ReceiverResgistry