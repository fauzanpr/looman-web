interface IProps {
    name: string;
    status: boolean;
    address: string;
}

function ReceiverCard({ address, name, status }: IProps) {
    return (
        <div className="p-4 shadow-md rounded-lg">
            <div className="flex justify-between items-center">
                <p className="text-base">{name}</p>
                <p className={`${status ? "text-green-500" : "text-red-500"} text-sm`}>{status ? "Sudah Menerima" : "Belum Menerima"}</p>
            </div>
            <p className="text-gray-400 text-sm">{address}</p>
        </div>
    )
}

export default ReceiverCard;