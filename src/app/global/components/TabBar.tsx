import { useState } from "react";
import { BsPersonFill } from "react-icons/bs";
import { FaClock, FaWindowClose } from "react-icons/fa"
import { FaCirclePlus } from "react-icons/fa6";
import { RiFileHistoryFill, RiHome2Fill } from "react-icons/ri"
import { Link } from "react-router-dom";

export type TAB_LIST = "home" | "history" | "news" | "profile";
export type PAGE_TYPE = "filantrophy" | "merchant" | "community";
interface IProps {
    tabActive: TAB_LIST;
    type: PAGE_TYPE;
    setTabActive: (tab: TAB_LIST) => void;
}

function TabBar({ tabActive, setTabActive, type }: IProps) {
    const color = "#d1d5db";
    const colorActive = "#20b3ab";
    const textColor = "text-[#d1d5db]";
    const textSize = "text-sm";
    const iconSize = 25;

    const [isAdd, setIsAdd] = useState(false);
    if (type === "filantrophy") {
        return (
            <>
                {isAdd ? <Link to="/filantrophy/donate" className={`bg-primary w-4/5 text-center text-white text-base py-3 px-10 rounded-xl absolute bottom-24 left-1/2 -translate-x-1/2`}>Mulai Donasi</Link> : null}
                <div className="p-4 flex justify-between items-end fixed w-full bottom-0 bg-white">
                    <Link to="/filantrophy" className="flex flex-col justify-center items-center" onClick={() => setTabActive("home")}>
                        <RiHome2Fill size={iconSize} color={tabActive === "home" ? colorActive : color} />
                        <p className={`${textSize} ${textColor}`}>Home</p>
                    </Link>
                    <Link to="/filantrophy/history" className="flex flex-col justify-center items-center" onClick={() => setTabActive("history")}>
                        <RiFileHistoryFill size={25} color={tabActive === "history" ? colorActive : color} />
                        <p className={`${textSize} ${textColor}`}>History</p>
                    </Link>
                    <div className="flex flex-col justify-center items-center">
                        {isAdd ? <FaWindowClose size={60} color={colorActive} onClick={() => setIsAdd(false)} /> : <FaCirclePlus size={60} color={colorActive} onClick={() => setIsAdd(true)} />}
                    </div>
                    <Link to="/filantrophy/news" className="flex flex-col justify-center items-center" onClick={() => setTabActive("news")}>
                        <FaClock size={25} color={tabActive === "news" ? colorActive : color} />
                        <p className={`${textSize} ${textColor}`}>Berita</p>
                    </Link>
                    <Link to="/filantrophy/profile" className="flex flex-col justify-center items-center" onClick={() => setTabActive("profile")}>
                        <BsPersonFill size={25} color={tabActive === "profile" ? colorActive : color} />
                        <p className={`${textSize} ${textColor}`}>Profile</p>
                    </Link>
                </div>
            </>
        )
    }

    if (type === "merchant") {
        return <div className="p-4 flex justify-between items-end fixed w-full bottom-0 bg-white">
            <Link to="/merchant" className="flex flex-col justify-center items-center" onClick={() => setTabActive("home")}>
                <RiHome2Fill size={iconSize} color={tabActive === "home" ? colorActive : color} />
                <p className={`${textSize} ${textColor}`}>Home</p>
            </Link>
            <Link to="/merchant/history" className="flex flex-col justify-center items-center" onClick={() => setTabActive("history")}>
                <RiFileHistoryFill size={25} color={tabActive === "history" ? colorActive : color} />
                <p className={`${textSize} ${textColor}`}>History</p>
            </Link>
            <Link to="/merchant/profile" className="flex flex-col justify-center items-center" onClick={() => setTabActive("profile")}>
                <BsPersonFill size={25} color={tabActive === "profile" ? colorActive : color} />
                <p className={`${textSize} ${textColor}`}>Profile</p>
            </Link>
        </div>
    }
}

export default TabBar;