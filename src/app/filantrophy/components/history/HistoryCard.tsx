import { Link } from "react-router-dom";
import Struk from "../../../../assets/struk.svg";
import { CiCalendar } from "react-icons/ci";
import { currency } from "../../../../utils/curency";

interface IProps {
    id: number;
    transactionNumber: string;
    nominal: number;
}

function HistoryCard({ transactionNumber, id, nominal }: IProps) {
    return (
        <Link to={id.toString()} className="flex gap-4 p-4 rounded-xl shadow-md">
            <img src={Struk} alt="Gambar Struk" />
            <div className="flex flex-col gap-1 w-full">
                <div className="flex justify-between w-full">
                    <p className="text-primary font-medium">Berhasil</p>
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