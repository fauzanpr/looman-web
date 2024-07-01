import HistoryCard from "../../components/history/HistoryCard"
import useGetFilantrophyHistory from "../../hooks/useGetFilantrophyHistory"
import FilantrophyLayout from "../layout"

function History() {
    const { filantrophyHistory, isLoading } = useGetFilantrophyHistory();
    return (
        <FilantrophyLayout headerType="titleOnly" headerTitle="Riwayat">
            <main className="px-4 py-8 flex flex-col gap-8">
                <h1 className="text-xl font-semibold">Daftar Riwayat Donasi</h1>
                {isLoading ? <p>Loading...</p> : null}
                <div className="flex flex-col gap-4 mb-20">
                    {filantrophyHistory?.data?.map(item => <HistoryCard transaction_proof={item.transaction_proof} transactionStatus={item.transaction_status} id={item.id} nominal={item.nominal} transactionNumber={item.transaction_number} key={item.id} />)}
                </div>
            </main>
        </FilantrophyLayout>
    )
}

export default History