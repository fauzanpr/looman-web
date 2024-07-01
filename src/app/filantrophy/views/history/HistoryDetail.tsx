import FilantrophyLayout from "../layout"
import useGetFilantrophyDetail from "../../hooks/useGetFilantrophyDetail";

function HistoryDetail() {
    const { historyDetail, isLoading } = useGetFilantrophyDetail();
    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <FilantrophyLayout headerType="backMenu" headerHref="/filantrophy/history" headerLabel="Riwayat">
            <main className="px-4 py-8 flex flex-col gap-8">
                <div className="text-center">
                    <p className="text-xl text-primary font-medium">Terimakasih</p>
                    <p>Donasi kamu telah disalurkan</p>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between">
                        <p>Tanggal</p>
                        <p>{historyDetail?.created_at}</p>
                    </div>
                    <div className="flex justify-between">
                        <p>ID Donasi</p>
                        <p>{historyDetail?.transaction_number}</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Status Pembayaran</p>
                        { historyDetail?.transaction_status === "gagal" && <p className={"text-red-500"}>{historyDetail?.transaction_status.toUpperCase()}</p> }
                        { historyDetail?.transaction_status === "berhasil" && <p className={"text-primary"}>{historyDetail?.transaction_status.toUpperCase()}</p> }
                        { historyDetail?.transaction_status === "menunggu" && <p className={"text-yellow-400"}>{historyDetail?.transaction_status.toUpperCase()}</p> }
                    </div>
                    <div>
                        <p>Keterangan</p>
                        <p>{historyDetail?.note}</p>
                    </div>
                </div>
            </main>
        </FilantrophyLayout>
    )
}

export default HistoryDetail