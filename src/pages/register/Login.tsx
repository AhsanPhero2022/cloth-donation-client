import { SubmitHandler, useForm } from "react-hook-form";
import { NavLink,  useLocation, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/features/auth/authApi";

import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
import { useAppDispatch } from "../redux/hook";
import { toast } from "sonner";


type TUser = {
  email: string;
  password: string;
};

const Login = () => {
  const [login] = useLoginMutation();
  const { register, handleSubmit } = useForm<TUser>();
const dispatch = useAppDispatch()

const navigate = useNavigate();
const location = useLocation();
const from = location.state?.from?.pathname || "/";



  const onsubmit: SubmitHandler<TUser> = async (data) => {
 
    const userInfo = {
      email: data.email,
      password: data.password,
    };


    const res = await login(userInfo).unwrap();
   if(res.toke){
    toast.success("Login Successful")
    
   }

    const user = verifyToken(res.token)
   

    dispatch(setUser({user: user, token: res.token}))
    navigate(from, { replace: true });
  };

  return (
    <div className="my-12 rounded-md w-1/2 mx-auto min-h-[400px] p-8 border bg-[#001529]">
      <h1 className="text-white text-2xl font-bold mb-4">Login Here!</h1>
      <form onSubmit={handleSubmit(onsubmit)}>
        <div className="">
          <label className=" text-white" htmlFor="email">
            Email
          </label>
          <input
            placeholder="Enter your email"
            className="px-3 w-full h-8 rounded mb-4"
            type="text"
            id="email"
            {...register("email")}
          />
        </div>
        <div>
          <label className="text-white" htmlFor="email">
            password
          </label>
          <input
            placeholder="Enter your password"
            className="px-3 w-full h-8 rounded mb-4"
            type="password"
            id="password"
            {...register("password")}
          />
        </div>
        <div className="flex justify-between my-4">
          <div>
            <input type="checkbox" />{" "}
            <span className="text-white">save my data</span>
          </div>
          <div>
            <NavLink to="/register">
              <p className="text-white underline">
                Do not have account? Register
              </p>
            </NavLink>
          </div>
        </div>
        <div className="text-center">
          <button
            className="bg-white font-bold text-[#001529] text-2xl py-3 px-6 rounded"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
