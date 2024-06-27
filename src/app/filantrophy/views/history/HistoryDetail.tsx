import FilantrophyLayout from "../layout"

function HistoryDetail() {
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
                        <p>20/06/2024</p>
                    </div>
                    <div className="flex justify-between">
                        <p>ID Donasi</p>
                        <p>987432348</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Status Pembayaran</p>
                        <p className="text-primary">Berhasil</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Keterangan</p>
                        <p>Donasi untuk jumat berkah</p>
                    </div>
                </div>
            </main>
        </FilantrophyLayout>
    )
}

export default HistoryDetail