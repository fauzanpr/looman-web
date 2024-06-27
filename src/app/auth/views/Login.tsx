import { FcGoogle } from "react-icons/fc"
import Logo from "../../../assets/logo.svg";

function Login() {
    return (
        <main className="flex justify-center items-center h-[100vh] bg-primary">
            <div className="text-center flex flex-col gap-8">
                <img src={Logo} alt="Logo Looman" />
                <div className="h-full bg-white flex gap-2 w-fit py-3 px-8 rounded-lg text-primary font-medium mx-auto">
                    <FcGoogle size={25} />
                    <p>Masuk dengan Gmail</p>
                </div>
            </div>
        </main>
    )
}

export default Login;