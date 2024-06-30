import { useState } from "react";
import Header from "../../global/components/Header"
import { FilantrophyTransactionCreationModel } from "../../../model/filantrophy/FilantrophyTransactionModel";
import useFilantrophyTransactionMutation from "../hooks/useFilantrophyTransactionMutation";

function Donate() {
    const { onCreate } = useFilantrophyTransactionMutation();

    const [data, setData] = useState<FilantrophyTransactionCreationModel>();
    const [file, setFile] = useState<File>();
    const onSendDonate = () => {
        if (data && file) onCreate(data, file);
    }
    const getIsActive = () => {
        if (data?.nominal && data.note && data.status && file) {
            return true;
        } else return false;
    }
    return (
        <>
            <Header type="backMenu" href="/filantrophy" label="Donasi" />
            <div className="p-4 flex flex-col gap-8">
                <h1 className="text-2xl">Kirim Bukti Transfer</h1>
                <textarea name="massage" id="massage" placeholder="Message" value={data?.note} onChange={e => {
                    setData(prev => {
                        return {
                            ...prev,
                            note: e.target.value
                        }
                    })
                }} className="bg-primarySurface p-4 h-44 rounded-lg border border-black" />
                <input type="number" placeholder="Jumlah Donasi" value={data?.nominal} onChange={e => {
                    setData(prev => {
                        return {
                            ...prev,
                            nominal: e.target.value
                        }
                    })
                }} className="bg-primarySurface p-4 rounded-lg border border-black" />
                <input type="file" placeholder="Upload File" onChange={e => {
                    if (e.target.files) setFile(e.target.files[0])
                }} className="bg-primarySurface p-4 rounded-lg border border-black" />
            </div>
            <button className={`${getIsActive() ? "bg-primary" : "bg-gray-400"} text-white w-11/12 rounded-xl p-4 absolute bottom-1 left-1/2 -translate-x-1/2`} onClick={onSendDonate}>Kirim Donasi</button>
        </>
    )
}

export default Donate;