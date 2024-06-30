import { useState } from "react"
import CommunityLayout from "./CommunityLayout"
import { ReceiverCreationModel } from "../../../model/community/ReceiverCreationModel";

function AddReceiver() {
    const [data, setData] = useState<ReceiverCreationModel>();
    const onSubmit = () => {
        console.log(data);
    }
    return (
        <CommunityLayout headerType="backMenu" headerHref="/community" headerLabel="Tambah Penerima">
            <main className="px-4 py-8 flex flex-col gap-8 mb-16">
                <div className="w-full">
                    <label htmlFor="nama">Nama</label>
                    <input type="text" className="p-2 w-full block border border-gray-300 rounded-md" onChange={e => {
                        setData(prev => {
                            return {
                                ...prev,
                                name: e.target.value
                            }
                        })
                    }} />
                </div>
                <div className="w-full">
                    <label htmlFor="nama">Alamat</label>
                    <input type="text" className="p-2 w-full block border border-gray-300 rounded-md" onChange={e => {
                        setData(prev => {
                            return {
                                ...prev,
                                address: e.target.value
                            }
                        })
                    }} />
                </div>
                <div className="w-full">
                    <label htmlFor="nama">Telepon</label>
                    <input type="text" className="p-2 w-full block border border-gray-300 rounded-md" onChange={e => {
                        setData(prev => {
                            return {
                                ...prev,
                                phone: e.target.value
                            }
                        })
                    }} />
                </div>
                <button className="p-4 text-white bg-primary rounded-lg" onClick={onSubmit}>Simpan</button>
            </main>
        </CommunityLayout>
    )
}

export default AddReceiver