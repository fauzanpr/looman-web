// import { Link } from "react-router-dom"
import ReceiverCard from "../components/ReceiverCard"
import CommunityLayout from "./CommunityLayout"
import useGetCommunityReceivers from "../hooks/useGetCommunityReceivers"

function ReceiverList() {
    const { receivers, isLoading } = useGetCommunityReceivers();

    if (isLoading) {
        return (
            <CommunityLayout headerType="titleOnly" headerTitle="Daftar Penerima">
                <main className="px-4 py-8 flex flex-col gap-8 mb-16">
                    <p>Loading...</p>
                </main>
            </CommunityLayout>
        )
    }

    return (
        <CommunityLayout headerType="titleOnly" headerTitle="Daftar Penerima">
            <main className="px-4 py-8 flex flex-col gap-8 mb-16">
                {receivers?.data.map(receiver => <ReceiverCard id={receiver.id} name={receiver.name} status={receiver.status} />)}
                {/* <Link to="/community/receiver/register" className="bg-primary p-4 text-white block text-center rounded-lg text-lg
            ">Tambah Penerima</Link> */}
            </main>
        </CommunityLayout>
    )
}

export default ReceiverList;