import { FcGoogle } from "react-icons/fc"
import MerchantLayout from "../components/MerchantLayout"
import { IoIosLogOut } from "react-icons/io"

function MerchantProfile() {
    return (
        <MerchantLayout headerType="titleOnly" headerTitle="Profile">
            <main className="px-4 py-16 flex flex-col gap-8">
                <div className='w-fit mx-auto flex flex-col items-center gap-2'>
                    <div className="bg-slate-600 h-12 w-12 rounded-full" />
                    <p className="text-2xl">Hallo, Alvira</p>
                    <div className='bg-primarySurface px-4 py-2 rounded-xl flex items-center gap-2'>
                        <FcGoogle size={25} />
                        <p>alvira@mail.com</p>
                    </div>
                </div>
                <hr />
                <div className='flex flex-col gap-4'>
                    <div className='text-lg flex justify-between items-center'>
                        <p>User ID</p>
                        <p>43987</p>
                    </div>
                    <div className='text-lg flex justify-between items-center'>
                        <p>Name</p>
                        <p>Angel</p>
                    </div>
                    <div className='text-lg flex justify-between items-center'>
                        <p>Age</p>
                        <p>24th</p>
                    </div>
                    <div className='text-lg flex justify-between items-center'>
                        <p>Gender</p>
                        <p>Male</p>
                    </div>
                    <div className='text-lg flex justify-between items-center'>
                        <p>Locale</p>
                        <p>Indonesia</p>
                    </div>
                    <div className='text-lg flex justify-between items-center'>
                        <p>Timezone</p>
                        <p>Jakarta, Indonesia</p>
                    </div>
                    <div className='flex w-full justify-center bg-red-100 rounded-xl items-center'>
                        <IoIosLogOut size={30} color='#ef4444' />
                        <p className=' p-4 text-xl text-red-500'>KELUAR</p>
                    </div>
                </div>
            </main>
        </MerchantLayout>
    )
}

export default MerchantProfile