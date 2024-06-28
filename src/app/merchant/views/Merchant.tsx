import { BsChevronRight } from "react-icons/bs"
import MerchantLayout from "../components/MerchantLayout"
import FoodCard from "../components/FoodCard";
import { Link } from "react-router-dom";

function Merchant() {
  return (
    <MerchantLayout headerType="profile">
      <main className="px-4 py-8 flex flex-col gap-16">
        <Link to="/merchant/add" className="flex items-center justify-between bg-primarySurface p-4 text-lg rounded-xl">
          <p className="block text-primary">Selamatkan Makananmu</p>
          <BsChevronRight size={25} color="#20b3ab" />
        </Link>

        <div className="flex flex-col gap-4">
          {[1, 2, 3, 4].map(item => <FoodCard key={item} />)}
        </div>
      </main>
    </MerchantLayout>
  )
}

export default Merchant;