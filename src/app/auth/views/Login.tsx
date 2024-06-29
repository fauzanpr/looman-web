// import { FcGoogle } from "react-icons/fc"
import { useEffect, useState } from "react";
import Logo from "../../../assets/logo.svg";
import { LoginModel } from "../../../model/auth/AuthModel";
import useLogin from "../hooks/useLoginMutation";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [data, setData] = useState<LoginModel>({
        email: "",
        password: ""
    });
    const { onLogin, isPending } = useLogin();

    const loginButtonHandler = () => {
        onLogin(data);
    };

    useEffect(() => {
        if (localStorage.getItem("token")) {
            if (localStorage.getItem("role") === "philanthropy") {
                navigate("/filantrophy")
            }
        }
    }, [navigate]);

    return (
        <main className="flex justify-center items-center h-[100vh] bg-primary">
            <div className="text-center flex flex-col gap-4 w-full p-16">
                <img src={Logo} alt="Logo Looman" className="w-48" />
                <div className="w-full">
                    <label htmlFor="email" className="text-white font-medium block text-xl text-left w-full">Email</label>
                    <input type="email" className="p-2 block w-full rounded-lg" value={data?.email} onChange={e => {
                        setData(prev => {
                            return {
                                ...prev,
                                email: e.target.value
                            }
                        })
                    }} />
                </div>
                <div>
                    <label htmlFor="password" className="text-white font-medium block text-xl text-left">Password</label>
                    <input type="password" className="p-2 block w-full rounded-lg" value={data.password} onChange={e => {
                        setData(prev => {
                            return {
                                ...prev,
                                password: e.target.value
                            }
                        })
                    }} />
                </div>
                <button onClick={loginButtonHandler} className="bg-white p-2 rounded-lg mt-4">{isPending ? "Loading..." : "Login"}</button>
                {/* <div className="h-full bg-white flex gap-2 w-fit py-3 px-8 rounded-lg text-primary font-medium mx-auto">
                    <FcGoogle size={25} />
                    <p>Masuk dengan Gmail</p>
                </div> */}
            </div>
        </main>
    )
}

export default Login;