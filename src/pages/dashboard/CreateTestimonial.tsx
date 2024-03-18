import { useForm, SubmitHandler } from "react-hook-form";
import { useCreateTestimonialMutation } from "../../pages/redux/features/product/prodductApi";
import { toast } from "sonner";

type Inputs = {
  image: string;
  title: string;
 
  description: string;
};

const CreateTestimonial = () => {
  const [testimonial, { isSuccess }] = useCreateTestimonialMutation();

 
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await testimonial(data).unwrap();

    reset();
   
  };


  if (isSuccess) {
    toast.success("Testimonial Added");
  }
  
  return (
    <div className="bg-[#001529]  px-8 py-12 min-h-screen">
      <h1 className="text-3xl font-bold text-center my-12 text-white">
        Add a testimonial about the donation
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" gap-4 mb-8">
          <div className="w-1/2 mx-auto">
            <h2 className="text-white font-semibold my-3">Title</h2>
            <input
            required
              placeholder="Enter Title"
              className="h-8 rounded-md w-full px-3"
              {...register("title")}
            />
          </div>
          <div className="w-1/2 mx-auto">
            <h2 className="text-white font-semibold my-3">Image</h2>
            <input
              placeholder="Photo url"
              className="h-8 rounded-md w-full px-3"
              {...register("image")}
            />
          </div>
        </div>
        

        <div className="w-1/2 mx-auto">
          <h2 className="text-white font-semibold my-3">Description</h2>
          <input
          required
            placeholder="Write description"
            className="h-16 rounded-md w-full px-3"
            {...register("description")}
          />
        </div>

        <div className="text-center my-12 font-bold">
          <input
            className="py-4 px-8 bg-white text-blue-700  rounded-md"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateTestimonial;
