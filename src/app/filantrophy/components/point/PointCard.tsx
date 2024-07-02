import { IoLocationOutline } from "react-icons/io5";
import Food from "../../../../assets/makanan.svg";
import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSetAtom } from "jotai";
import { pointAtom } from "../../statemant/point";

interface IProps {
    nameMenu: string;
    address: string;
    point: number;
}

function PointCard({ nameMenu, address, point }: IProps) {
    const setPoint = useSetAtom(pointAtom);
    const cardClickHandler = () => {
        setPoint(prev => {
            return {
                ...prev,
                pointMin: point
            }
        })
    };
    return (
        <Link to="/filantrophy/point/request" onClick={cardClickHandler} className="flex gap-2 shadow-md rounded-lg">
            <img src={Food} alt="Gambar Tempat Makan" className="w-1/4" />
            <div className="w-3/4">
                <p className="text-primary font-medium text-lg">{nameMenu}</p>
                <div className="flex items-center gap-1">
                    <IoLocationOutline size={15} />
                    <p className="text-gray-500 text-sm">{address}</p>
                </div>
                <div className="flex items-center gap-2">
                    <FaCoins color="orange" />
                    <p className="font-thin text-sm">Poin: {point}</p>
                </div>
            </div>
        </Link>
    )
}

export default PointCard