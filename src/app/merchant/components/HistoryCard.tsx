import { Link } from "react-router-dom"

interface IProps {
    title: string;
    description: string;
}

function HistoryCard({ title, description }: IProps) {
    return (
        <Link to="2" className="flex gap-4 p-4 rounded-xl border">
            <div className="flex flex-col gap-1 w-full">
                <p className="font-medium">{title}</p>
                <p className="text-gray-400 font-light">{description}</p>
            </div>
        </Link>
    )
}

export default HistoryCard;