import { FaCoins } from "react-icons/fa"
import FoodIndustryCard from "../../community/components/FoodIndustryCard"
import FilantrophyLayout from "./layout"

function Point() {
    return (
        <FilantrophyLayout headerType="backMenu" headerHref="/filantrophy" headerLabel="Tukar Poin">
            <main className="px-4 py-8 flex flex-col gap-8">
                <div className="p-4 flex items-center gap-2 justify-center rounded-lg shadow-md">
                    <FaCoins color="orange" />
                    <p className="text-xl font-medium">Total Poin: 100</p>
                </div>
                <FoodIndustryCard nameMenu="Rawon Cak Oke" address="Sukarno-Hatta no.09" note="Nasi dengan kuah daging" />
            </main>
        </FilantrophyLayout>
    )
}

export default Point