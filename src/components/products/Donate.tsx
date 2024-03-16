import { useForm, SubmitHandler } from "react-hook-form";
import { useCreateProductsMutation } from "../../pages/redux/features/product/prodductApi";
import { toast } from "sonner";

type Inputs = {
  image: string;
  title: string;
  category: string;
  size: string;
  description: string
};

const Donate = () => {

    const [createProducts, { isSuccess, }] = useCreateProductsMutation()
    
    if(isSuccess){
      toast.success('Clothes Added')
    }
  const {
    register,
    handleSubmit,
    reset,
   
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    
    
  
   


    await createProducts(data).unwrap();


    

    reset();
  };

  
  
 

  return (
    <div className="bg-[#001529]  px-8 py-20 min-h-screen">
     <h1 className="text-3xl font-bold text-center my-12 text-white">Donate winter clothes</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
       <div className="lg:flex justify-evenly items-center gap-4 mb-8">
       
       
       <div className="w-full">
        <h2 className="text-white font-semibold my-3">Title</h2>
       <input
       placeholder="Enter Title"
       className="h-8 rounded-md w-full px-3"
       {...register("title" )} />
       </div>
       <div className="w-full">
        <h2 className="text-white font-semibold my-3">Image</h2>
       <input
       placeholder="Photo url"
       className="h-8 rounded-md w-full px-3"
       {...register("image" )} />
       </div>
        </div>
        <div className="lg:flex justify-evenly items-center gap-4 ">
        <div className="w-full">
        <h2 className="text-white font-semibold my-3">Category</h2>
       <input
       placeholder="Enter Category"
       className="h-8 rounded-md w-full px-3"
       {...register("category" )} />
       </div>
       <div className="w-full">
        <h2 className="text-white font-semibold my-3">Size</h2>
       <input
       placeholder="Enter Title"
       className="h-8 rounded-md w-full px-3"
       {...register("size" )} />
       </div>
        </div>

        <div className="w-full">
        <h2 className="text-white font-semibold my-3">Description</h2>
       <input
       placeholder="Write description"
       className="h-16 rounded-md w-full px-3"
       {...register("description" )} />
       </div>
        
        <div className="text-center my-12 font-bold">
        <input 
        className="py-4 px-8 bg-white text-blue-700  rounded-md"
        type="submit" />
        </div>
      </form>
      
    </div>
  );
};

export default Donate;
