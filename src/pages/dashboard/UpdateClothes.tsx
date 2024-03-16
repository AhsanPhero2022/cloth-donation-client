import { useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form"
import { useUpdateProductsMutation } from "../redux/features/product/prodductApi";
type Inputs = {
    title: string;
image: string;
description: string;
size: string;
category: string
  }

const UpdateClothes = () => {
const [updateData] = useUpdateProductsMutation()
    const {id} = useParams()
   



    const {
        register,
        handleSubmit,
        
             } = useForm<Inputs>()


      const onSubmit: SubmitHandler<Inputs> = async(data) => {
        console.log(data);
        const updatedProducts = {
            id: id,
            title: data.title,
            image: data.image,
            description: data.description,
            category: data.category,
            size: data.size
        }

 const newData = await updateData(updatedProducts)

console.log(newData, "new Data");

      }





    return (
        <div className="my-12 rounded-md w-1/2 mx-auto min-h-[400px] p-8 border bg-[#001529]">
    <h1 className="text-white text-2xl font-bold mb-4">Update Now!</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="">
        <label className=" text-white" htmlFor="name">
          Title
        </label>
        <input
          placeholder="Enter your name"
          className="px-3 w-full h-8 rounded mb-4"
          type="text"
          id="title"
          {...register("title")}
        />
      </div>
      <div className="">
        <label className=" text-white" htmlFor="email">
          Image
        </label>
        <input
          placeholder="Enter your email"
          className="px-3 w-full h-8 rounded mb-4"
          type="text"
          id="image"
          {...register("image")}
        />
      </div>
      <div>
        <label className="text-white" htmlFor="password">
          Description
        </label>
        <input
          placeholder="Enter your password"
          className="px-3 w-full h-8 rounded mb-4"
          type="text"
          id="description"
          {...register("description")}
        />
      </div>
      <div>
        <label className="text-white" htmlFor="password">
          Size
        </label>
        <input
          placeholder="Enter your password"
          className="px-3 w-full h-8 rounded mb-4"
          type="text"
          id="size"
          {...register("size")}
        />
      </div>
      <div>
        <label className="text-white" htmlFor="password">
          Category
        </label>
        <input
          placeholder="Enter your password"
          className="px-3 w-full h-8 rounded mb-4"
          type="text"
          id="category"
          {...register("category")}
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

export default UpdateClothes;