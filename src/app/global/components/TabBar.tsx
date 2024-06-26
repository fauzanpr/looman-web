import { useState } from "react";
import { BsPersonFill } from "react-icons/bs";
import { FaClock, FaWindowClose } from "react-icons/fa"
import { FaCirclePlus } from "react-icons/fa6";
import { RiFileHistoryFill, RiHome2Fill } from "react-icons/ri"
import { Link } from "react-router-dom";

function TabBar() {
    const color = "#d1d5db";
    const colorActive = "#20b3ab";
    const textColor = "text-[#d1d5db]";
    const textSize = "text-sm";
    const iconSize = 25;

    const [isAdd, setIsAdd] = useState(false);

    return (
        <>
            {isAdd ? <Link to="donate" className={`bg-primary w-4/5 text-white text-base py-3 px-10 rounded-xl absolute bottom-24 left-1/2 -translate-x-1/2`}>Mulai Donasi</Link> : null}
            <div className="p-4 flex justify-between items-end fixed w-full bottom-0 bg-white">
                <div className="flex flex-col justify-center items-center">
                    <RiHome2Fill size={iconSize} color={color} />
                    <p className={`${textSize} ${textColor}`}>Home</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <RiFileHistoryFill size={25} color="#d1d5db" />
                    <p className={`${textSize} ${textColor}`}>History</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    {isAdd ? <FaWindowClose size={60} color={colorActive} onClick={() => setIsAdd(false)} /> : <FaCirclePlus size={60} color={colorActive} onClick={() => setIsAdd(true)} />}
                </div>
                <div className="flex flex-col justify-center items-center">
                    <FaClock size={25} color="#d1d5db" />
                    <p className={`${textSize} ${textColor}`}>Berita</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <BsPersonFill size={25} color="#d1d5db" />
                    <p className={`${textSize} ${textColor}`}>Profile</p>
                </div>
            </div>
        </>
    )
}

export default TabBar