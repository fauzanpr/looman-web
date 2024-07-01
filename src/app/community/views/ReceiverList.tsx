import { Link } from "react-router-dom"
import ReceiverCard from "../components/ReceiverCard"
import CommunityLayout from "./CommunityLayout"

function ReceiverList() {
  return (
    <CommunityLayout headerType="titleOnly" headerTitle="Daftar Penerima">
        <main className="px-4 py-8 flex flex-col gap-8 mb-16">
            <ReceiverCard name="Ahmadi" address="Suhat Indah" status={false} />
            <ReceiverCard name="Ahmadi" address="Suhat Indah" status={false} />
            <ReceiverCard name="Ahmadi" address="Suhat Indah" status={false} />
            <ReceiverCard name="Ahmadi" address="Suhat Indah" status={false} />
            <Link to="/community/receiver/register" className="bg-primary p-4 text-white block text-center rounded-lg text-lg
            ">Tambah Penerima</Link>
        </main>
    </CommunityLayout>
  )
}

export default ReceiverList