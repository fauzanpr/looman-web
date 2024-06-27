import { FaArrowLeft } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { Link } from "react-router-dom";

export type HEADER_TYPE = "profile" | "backMenu"
// const color = "#d1d5db";

interface IProps {
    type: HEADER_TYPE;
    label?: string;
    href?: string;
}

interface IPropsBackMenu {
    label: string;
    href: string;
}

function Header({ type, label, href }: IProps) {
    switch (type) {
        case "profile":
            return <HeaderProfile />
        default:
            return <BackMenu label={label || ""} href={href || ""} />
    }
}

function BackMenu({ href, label }: IPropsBackMenu) {
    return (
        <header className="flex items-center p-4 gap-4 bg-primary">
            <Link to={href}>
                <FaArrowLeft color="white" />
            </Link>
            <p className="text-white">{label}</p>
        </header>
    )
}

function HeaderProfile() {
    return (
        <header className="flex justify-between items-center p-4">
            <div className="flex gap-4 items-center">
                <div className="bg-slate-600 h-6 w-6 rounded-full" />
                <p>Hi, Fauzan</p>
            </div>
            <IoMdNotifications color="#20B3AB" size={32} />
        </header>
    )
}

export default Header