import { SubmitHandler, useForm } from "react-hook-form";

import {  useLocation, useNavigate } from "react-router-dom";
import {  useCreateVolunteerMutation } from "../redux/features/product/prodductApi";
import { toast } from "sonner";

type TUser = {
  name: string;
  email: string;
  password: string;
  number: number;
  location: string
};

const CreateVolunteers = () => {
  const [user, {isSuccess} ] = useCreateVolunteerMutation();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if(isSuccess){
    toast.message('Now you are a volunteer "Go to About Us" page')
  }


  const { register, handleSubmit } = useForm<TUser>();

  const onSubmit: SubmitHandler<TUser> = async (data) => {
   
   await user(data);
    navigate(from, { replace: true });
  };

  return (
    <div className="my-12 rounded-md w-1/2 mx-auto min-h-[400px] p-8 border bg-[#001529]">
    <h1 className="text-white text-2xl text-center font-bold mb-4">Join as a virtual volunteer</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="">
        <label className=" text-white" htmlFor="name">
          Name
        </label>
        <input
          placeholder="Enter your Name"
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
          placeholder="Enter your Email"
          className="px-3 w-full h-8 rounded mb-4"
          type="text"
          id="email"
          {...register("email")}
        />
      </div>
      <div>
        <label className="text-white" htmlFor="number">
          Phone Number
        </label>
        <input
          placeholder="Enter your Number"
          className="px-3 w-full h-8 rounded mb-4"
          type="number"
          id="number"
          {...register("number")}
        />
      </div>
      <div>
        <label className="text-white" htmlFor="location">
          Location
        </label>
        <input
          placeholder="Enter your Location"
          className="px-3 w-full h-8 rounded mb-4"
          type="text"
          id="location"
          {...register("location")}
        />
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

export default CreateVolunteers;
