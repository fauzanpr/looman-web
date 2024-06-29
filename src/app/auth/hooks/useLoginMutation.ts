import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { LoginModel, ResponseModel } from "../../../model/auth/AuthModel";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function useLogin() {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (data: LoginModel) => {
      return axios.post<ResponseModel>("http://localhost:8000/api/v1/auth/login", data);
    },
    onSuccess: (res) => {
      localStorage.setItem("token", res.data.data.access_token);
      localStorage.setItem("role", res.data.data.role);

      if (res.data.data.role === "philanthropy") {
        toast.success("Login berhasil");
        navigate("/filantrophy")
      } else if (res.data.data.role === "food_industry") {
        toast.success("Login berhasil");
        navigate("/merchant");
      }
    },
    onError: () => {
      toast.error("Login Gagal");
    }
  });

  const onLogin = (data: LoginModel) => mutation.mutateAsync(data);

  return {
    ...mutation,
    onLogin
  }
}

export default useLogin