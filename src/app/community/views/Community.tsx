import { FaArrowRight } from "react-icons/fa6";
import CommunityLayout from "./CommunityLayout"

function Community() {
    return (
        <CommunityLayout headerType="profile">
            <main className="px-4 py-8 flex flex-col gap-16">
                <div className="w-full h-64">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d126448.08835835352!2d112.5337189694777!3d-7.946883086420016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x2e78827687d272e7%3A0x789ce9a636cd3aa2!2sJl.%20Soekarno%20Hatta%20No.9%2C%20Jatimulyo%2C%20Kec.%20Lowokwaru%2C%20Kota%20Malang%2C%20Jawa%20Timur%2065141!3m2!1d-7.9468912!2d112.6161209!5e0!3m2!1sen!2sid!4v1719586936222!5m2!1sen!2sid" height="100%" width="100%" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-t-lg"></iframe>
                    <div className="flex items-center justify-between p-4 bg-white border rounded-b-xl">
                        <p>36 Makanan Tersedia</p>
                        <button className="border border-primary text-primary px-4 py-2 rounded-lg">Lihat titik lokasi</button>
                    </div>
                </div>

                <div className="bg-blue-500">
                    <div className="flex items-center justify-between p-4">
                        <p>Rekomendasi Terdekat</p>
                        <FaArrowRight />
                    </div>
                </div>
            </main>
        </CommunityLayout>
    )
}

export default Community;