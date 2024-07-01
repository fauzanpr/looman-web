import { IoIosLogOut } from "react-icons/io"
import CommunityLayout from "./CommunityLayout"
import useCommunityProfile from "../hooks/useCommunityProfile"

function CommunityProfile() {
    const { profile, isLoading } = useCommunityProfile();
    const logoutHandler = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("id");
    }

    if (isLoading) {
        return (
            <CommunityLayout headerType="none">
                <main className="px-4 py-16 flex flex-col gap-8">
                    <p>Loading...</p>
                </main>
            </CommunityLayout>
        )
    }
    return (
        <CommunityLayout headerType="none">
            <main className="px-4 py-16 flex flex-col gap-8">
                <div className='w-fit mx-auto flex flex-col items-center gap-2'>
                    <p className="text-2xl">Hallo, {profile?.user_community_name}</p>
                    {/* sementara email di comment dulu */}
                    {/* <div className='bg-primarySurface px-4 py-2 rounded-xl flex items-center gap-2'>
                        <FcGoogle size={25} />
                        <p>{ profile?.email }</p>
                    </div> */}
                    <p className='text-center'>{profile?.full_address}</p>
                </div>
                <hr />
                <div className='flex flex-col gap-4'>
                    <div className='text-lg flex justify-between items-center'>
                        <p>Community Name</p>
                        <p>{profile?.community_name}</p>
                    </div>
                    <div className='text-lg flex justify-between items-center'>
                        <p>Phone Number</p>
                        <p>{profile?.phone_number}</p>
                    </div>
                    <div className='flex w-full justify-center bg-red-100 rounded-xl items-center'>
                        <IoIosLogOut size={30} color='#ef4444' />
                        <p className=' p-4 text-xl text-red-500' onClick={logoutHandler}>KELUAR</p>
                    </div>
                </div>
            </main>
        </CommunityLayout>
    )
}

export default CommunityProfile