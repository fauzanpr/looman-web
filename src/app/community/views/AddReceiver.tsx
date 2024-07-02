import { useState } from "react"
import CommunityLayout from "./CommunityLayout"
import { ReceiverCreationModel } from "../../../model/community/ReceiverCreationModel";
import useReceiverMutation from "../hooks/useReceiverMutation";
// import GMaps from "../components/GMaps";

function AddReceiver() {
    const { onCreate, isPending } = useReceiverMutation();
    const [data, setData] = useState<ReceiverCreationModel>();

    const createAge = (e: number) => {
        if (e <= 11) {
            return "anak-anak";
        } else if (e >= 12 && e <= 25) {
            return "remaja";
        } else if (e >= 26 && e <= 45) {
            return "dewasa";
        } else if (e >= 46) {
            return "lansia";
        }
    };

    const onSubmit = () => {
        if (data) onCreate(data);
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
                {/* <div className="w-full">
                    <label htmlFor="nama">Alamat</label>
                    <input type="text" className="p-2 w-full block border border-gray-300 rounded-md" onChange={e => {
                        setData(prev => {
                            return {
                                ...prev,
                                address: e.target.value
                            }
                        })
                    }} />
                </div> */}
                {/* <div className="w-full">
                    <label htmlFor="nama">Narahubung</label>
                    <input type="text" className="p-2 w-full block border border-gray-300 rounded-md" onChange={e => {
                        setData(prev => {
                            return {
                                ...prev,
                                contact_person: e.target.value
                            }
                        })
                    }} />
                </div> */}
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
                <div className="w-full">
                    <label htmlFor="nama">Longitude</label>
                    <input type="text" className="p-2 w-full block border border-gray-300 rounded-md" onChange={e => {
                        setData(prev => {
                            return {
                                ...prev,
                                longitude: e.target.value
                            }
                        })
                    }} />
                </div>
                <div className="w-full">
                    <label htmlFor="nama">Latitude</label>
                    <input type="text" className="p-2 w-full block border border-gray-300 rounded-md" onChange={e => {
                        setData(prev => {
                            return {
                                ...prev,
                                latitude: e.target.value
                            }
                        })
                    }} />
                </div>
                <div className="w-full">
                    <label htmlFor="nama">Address</label>
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
                    <label>Umur</label>
                    <input type="number" className="p-2 w-full block border border-gray-300 rounded-md" onChange={e => {
                        setData(prev => {
                            return {
                                ...prev,
                                age: createAge(Number(e.target.value))
                            }
                        })
                    }} />
                </div>
                {/* <div className="w-full">
                    <label htmlFor="nama">Keterangan Tambahan</label>
                    <input type="text" className="p-2 w-full block border border-gray-300 rounded-md" onChange={e => {
                        setData(prev => {
                            return {
                                ...prev,
                                notes: e.target.value
                            }
                        })
                    }} />
                </div> */}
                {/* <GMaps /> */}
                <button className="p-4 text-white bg-primary rounded-lg" onClick={onSubmit}>{isPending ? "Menyimpan..." : "Simpan"}</button>
            </main>
        </CommunityLayout>
    )
}

export default AddReceiver