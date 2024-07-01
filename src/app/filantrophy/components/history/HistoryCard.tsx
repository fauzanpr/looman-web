import { Link } from "react-router-dom";
import Struk from "../../../../assets/struk.svg";
import { CiCalendar } from "react-icons/ci";
import { currency } from "../../../../utils/curency";
import { useSetAtom } from "jotai";
import { filantrophyIdAtom } from "../../statemant/filantrophyDetail";

interface IProps {
    id: number;
    transactionNumber: string;
    nominal: number;
    transactionStatus: "menunggu" | "berhasil" | "gagal";
    transaction_proof?: string;
}

function HistoryCard({ transactionNumber, id, nominal, transactionStatus }: IProps) {
    const setFilantrophyId = useSetAtom(filantrophyIdAtom);
    return (
        <Link to={id.toString()} className="flex gap-4 p-4 rounded-xl shadow-md" onClick={() => setFilantrophyId(id)}>
            <img src={Struk} alt="Gambar Struk" />
            <div className="flex flex-col gap-1 w-full">
                <div className="flex justify-between w-full">
                    { transactionStatus === "berhasil" && <p className="text-primary font-medium">{ transactionStatus.toUpperCase() }</p> }
                    { transactionStatus === "gagal" && <p className="text-red-500 font-medium">{ transactionStatus.toUpperCase() }</p> }
                    { transactionStatus === "menunggu" && <p className="text-yellow-400 font-medium">{ transactionStatus.toUpperCase() }</p> }
                    
                    <p className="text-gray-400 font-light">No.{transactionNumber}</p>
                </div>
                <div className="flex gap-1">
                    <CiCalendar size={25} color="#20b3ab" />
                    <p>{currency(nominal)}</p>
                </div>
            </div>
        </Link>
    )
}

export default HistoryCard