import Header from "../../global/components/Header"

function Donate() {
    return (
        <>
            <Header type="backMenu" href="/filantrophy" label="Donasi" />
            <div className="p-4 flex flex-col gap-8">
                <h1 className="text-2xl">Kirim Bukti Transfer</h1>
                <textarea name="massage" id="massage" placeholder="Message" className="bg-primarySurface p-4 h-44 rounded-lg border border-black" />
                <input type="number" placeholder="Jumlah Donasi" className="bg-primarySurface p-4 rounded-lg border border-black" />
                <input type="file" placeholder="Upload File" className="bg-primarySurface p-4 rounded-lg border border-black" />
            </div>
            <button className="bg-primary text-white w-11/12 rounded-xl p-4 absolute bottom-1 left-1/2 -translate-x-1/2">Kirim Donasi</button>
        </>
    )
}

export default Donate;