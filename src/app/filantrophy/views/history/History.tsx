import HistoryCard from "../../components/history/HistoryCard"
import FilantrophyLayout from "../layout"

function History() {
    return (
        <FilantrophyLayout headerType="titleOnly" headerTitle="Riwayat">
            <main className="px-4 py-8 flex flex-col gap-8">
                <h1 className="text-xl font-semibold">Daftar Riwayat Donasi</h1>
                <div className="flex flex-col gap-4">
                    <HistoryCard />
                    <HistoryCard />
                </div>
            </main>
        </FilantrophyLayout>
    )
}

export default History