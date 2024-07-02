import { FaCoins } from "react-icons/fa"
import FilantrophyLayout from "./layout"
import PointCard from "../components/point/PointCard"
import { useAtomValue } from "jotai"
import { pointAtom } from "../statemant/point"

function Point() {
    const point = useAtomValue(pointAtom);  
    return (
        <FilantrophyLayout headerType="backMenu" headerHref="/filantrophy" headerLabel="Tukar Poin">
            <main className="px-4 py-8 flex flex-col gap-8">
                <div className="p-4 flex items-center gap-2 justify-center rounded-lg shadow-md">
                    <FaCoins color="orange" />
                    <p className="text-xl font-medium">Total Poin: { point.currentPoint }</p>
                </div>
                <div className="flex flex-col gap-4">
                    <PointCard address="Jalan Jakarta No 18, Malang" nameMenu="Soto Blitar" point={15} />
                    <PointCard address="Jalan Malang, Malang" nameMenu="Soto Solo" point={5} />
                    <PointCard address="Jalan Surabaya No 20, Malang" nameMenu="Soto Ayam" point={10} />
                </div>
            </main>
        </FilantrophyLayout>
    )
}

export default Point