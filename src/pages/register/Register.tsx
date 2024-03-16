import { SubmitHandler, useForm } from "react-hook-form";

import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useCreateUserMutation } from "../redux/features/product/prodductApi";
import { toast } from "sonner";

type TUser = {
  name: string;
  email: string;
  password: string;
};

const Register = () => {
  const [user, {isSuccess} ] = useCreateUserMutation();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if(isSuccess){
    toast.message('Register successful')
  }


  const { register, handleSubmit } = useForm<TUser>();

  const onSubmit: SubmitHandler<TUser> = async (data) => {
    console.log(data);
   await user(data);
    navigate(from, { replace: true });
  };

  return (
    <div className="my-12 rounded-md w-1/2 mx-auto min-h-[400px] p-8 border bg-[#001529]">
    <h1 className="text-white text-2xl font-bold mb-4">Register Here!</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="">
        <label className=" text-white" htmlFor="name">
          Name
        </label>
        <input
          placeholder="Enter your name"
          className="px-3 w-full h-8 rounded mb-4"
          type="text"
          id="name"
          {...register("name")}
        />
      </div>
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
        <label className="text-white" htmlFor="password">
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
        <input type="checkbox" /> <span className="text-white">save my data</span>
        </div>
        <div>
        <NavLink to='/login'>
        <p className="text-white underline">Have an account? Login</p>
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

export default Register;
