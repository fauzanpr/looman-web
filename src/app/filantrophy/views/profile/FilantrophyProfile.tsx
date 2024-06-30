import { IoIosLogOut } from 'react-icons/io';
import FilantrophyLayout from '../layout';
// import { FcGoogle } from 'react-icons/fc';
import useFilantrophyProfile from '../../hooks/useFilantrophyProfile';
import { useNavigate } from 'react-router-dom';

function FilantrophyProfile() {
    const { profile, isLoading } = useFilantrophyProfile();
    const navigate = useNavigate();

    const logoutHandler = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        navigate("/");
    }

    if (isLoading) {
        return (
            <FilantrophyLayout headerType='none'>
                <main className="px-4 py-16 flex flex-col gap-8">
                    <p>Loading...</p>
                </main>
            </FilantrophyLayout>
        )
    }

    return (
        <FilantrophyLayout headerType="none">
            <main className="px-4 py-16 flex flex-col gap-8">
                <div className='w-fit mx-auto flex flex-col items-center gap-2'>
                    <div className="bg-slate-600 h-12 w-12 rounded-full" />
                    <p className="text-2xl">Hallo, { profile?.full_name }</p>
                    {/* sementara email di comment dulu */}
                    {/* <div className='bg-primarySurface px-4 py-2 rounded-xl flex items-center gap-2'>
                        <FcGoogle size={25} />
                        <p>{ profile?.email }</p>
                    </div> */}
                    <p className='text-center'>{ profile?.full_address }</p>
                </div>
                <hr />
                <div className='flex flex-col gap-4'>
                    <div className='text-lg flex justify-between items-center'>
                        <p>User ID</p>
                        <p>{ profile?.philanthropy_number }</p>
                    </div>
                    <div className='text-lg flex justify-between items-center'>
                        <p>Name</p>
                        <p>{ profile?.full_name }</p>
                    </div>
                    <div className='text-lg flex justify-between items-center'>
                        <p>Date of Birth</p>
                        <p>{ profile?.date_of_birth }</p>
                    </div>
                    <div className='flex w-full justify-center bg-red-100 rounded-xl items-center'>
                        <IoIosLogOut size={30} color='#ef4444' />
                        <p className=' p-4 text-xl text-red-500' onClick={logoutHandler}>KELUAR</p>
                    </div>
                </div>
            </main>
        </FilantrophyLayout>
    )
}

export default FilantrophyProfile