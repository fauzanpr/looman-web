import { Link } from "react-router-dom";
import Struk from "../../../../assets/struk.svg";
import { CiCalendar } from "react-icons/ci";

function HistoryCard() {
    return (
        <Link to="2" className="flex gap-4 p-4 rounded-xl shadow-md">
            <img src={Struk} alt="Gambar Struk" />
            <div className="flex flex-col gap-1 w-full">
                <div className="flex justify-between w-full">
                    <p className="text-primary font-medium">Berhasil</p>
                    <p className="text-gray-400 font-light">No.3783289</p>
                </div>
                <div className="flex gap-1">
                    <CiCalendar size={25} color="#20b3ab" />
                    <p>Senin, 12 Juli 2024</p>
                </div>
            </div>
        </Link>
    )
}

export default HistoryCard