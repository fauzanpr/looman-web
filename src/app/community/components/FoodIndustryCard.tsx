import Food from "../../../assets/makanan.svg";
import { IoLocationOutline } from "react-icons/io5";

interface IProps {
    nameMenu: string;
    address: string;
    note: string;
}

function FoodIndustryCard({ nameMenu, address, note }: IProps) {
    return (
        <div className="flex gap-2 shadow-md rounded-lg">
            <img src={Food} alt="Gambar Tempat Makan" className="w-1/4" />
            <div className="w-3/4">
                <p className="text-primary font-medium text-lg">{nameMenu}</p>
                <div className="flex items-center gap-1">
                    <IoLocationOutline size={15} />
                    <p className="text-gray-500 text-sm">{address}</p>
                </div>
                <p>{note}</p>
            </div>
        </div>
    )
}

export default FoodIndustryCard