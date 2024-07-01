import CommunityLayout from "./CommunityLayout"

function ReceiverResgistry() {
    return (
        <CommunityLayout headerType="backMenu" headerLabel="Daftarkan Penerima" headerHref="/community/receiver">
            <main className="px-4 py-8 flex flex-col gap-4 mb-16">
                <div className="flex gap-4 shadow-md p-4 items-center">
                    <input type="checkbox" checked={true} />
                    <div>
                        <p className="font-medium">Hello 1</p>
                        <p className="text-sm">Alamat</p>
                    </div>
                </div>
                <div className="flex gap-4 shadow-md p-4 items-center">
                    <input type="checkbox" checked={true} />
                    <div>
                        <p className="font-medium">Hello 1</p>
                        <p className="text-sm">Alamat</p>
                    </div>
                </div>
                <div className="flex gap-4 shadow-md p-4 items-center">
                    <input type="checkbox" checked={true} />
                    <div>
                        <p className="font-medium">Hello 1</p>
                        <p className="text-sm">Alamat</p>
                    </div>
                </div>
                <button className="bg-primary p-4 text-white rounded-lg">Kirim Daftar Penerima</button>
            </main>
        </CommunityLayout>
    )
}

export default ReceiverResgistry