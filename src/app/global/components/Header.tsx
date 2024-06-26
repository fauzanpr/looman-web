import { IoMdNotifications } from "react-icons/io";

type HEADER_TYPE = "profile" | "backMenu"

interface IProps {
    type: HEADER_TYPE;
}

function Header({ type }: IProps) {
    switch (type) {
        case "profile":
            return <HeaderProfile />
    }
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