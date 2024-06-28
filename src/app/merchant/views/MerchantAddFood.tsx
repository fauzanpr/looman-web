import MerchantLayout from "../components/MerchantLayout"

function MerchantAddFood() {
    return (
        <MerchantLayout headerType="backMenu" headerLabel="Upload Makanan" headerHref="/merchant">
            <main className="px-4 py-8 flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                    <label htmlFor="foodname">Nama Makanan</label>
                    <input type="text" id="foodname" className="border border-gray-300 p-2 rounded-lg" />
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="foodDesc">Deskripsi Makanan</label>
                    <textarea id="foodDesc" className="border border-gray-300 p-2 rounded-lg h-36" />
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="price">Harga</label>
                    <input type="number" id="price" className="border border-gray-300 p-2 rounded-lg" />
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="foodnumber">Jumlah</label>
                    <input type="number" id="foodnumber" className="border border-gray-300 p-2 rounded-lg" />
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="address">Alamat</label>
                    <input type="text" id="address" className="border border-gray-300 p-2 rounded-lg" />
                </div>
                <button className="bg-primary text-white p-4 rounded-xl mt-8">Buat Sekarang</button>
            </main>
        </MerchantLayout>
    )
}

export default MerchantAddFood