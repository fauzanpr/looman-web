import { Link, useNavigate } from "react-router-dom"
import FilantrophyLayout from "./layout"
import { useAtom } from "jotai"
import { pointAtom } from "../statemant/point";
import toast from "react-hot-toast";

function PointRequest() {
    const [point, setPoint] = useAtom(pointAtom);
    const navigate = useNavigate();
    const onClick = () => {
        if (point.currentPoint > point.pointMin) {
            setPoint(prev => {
                return {
                    ...prev,
                    currentPoint: prev.currentPoint - prev.pointMin
                }
            });
            navigate("/filantrophy/point");
            toast.success("Poin berhasil diklaim");
        } else {
            toast.error("Point tidak cukup")
        }
    };
    return (
        <FilantrophyLayout headerType="backMenu" headerHref="/filantrophy/point" headerLabel="Klaim Poin">
            <main className="px-4 py-8 flex flex-col gap-4">
                <p>Apakah Yakin menukar poin?</p>
                <button onClick={onClick} className="p-2 bg-primary text-white">Yakin</button>
                <Link to="/filantrophy/point" className="block bg-red-500 text-white p-2 text-center">Batal</Link>
            </main>
        </FilantrophyLayout>
    )
}

export default PointRequest