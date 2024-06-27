import { FaArrowLeft } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { Link } from "react-router-dom";

export type HEADER_TYPE = "profile" | "backMenu" | "titleOnly";
// const color = "#d1d5db";

interface IProps {
    type: HEADER_TYPE;
    label?: string;
    href?: string;
    title?: string;
}

interface IPropsBackMenu {
    label: string;
    href: string;
}

interface IPropsTitleOnly {
    title: string;
}

function Header({ type, label, href, title }: IProps) {
    switch (type) {
        case "profile":
            return <HeaderProfile />
        case "titleOnly":
            return <TitleOnly title={title || ""} />
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

function TitleOnly({ title }: IPropsTitleOnly) {
    return <header className="flex items-center p-4 gap-4 bg-primary">
        <p className="text-white text-center w-full font-semibold">{title}</p>
    </header>
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