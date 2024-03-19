import { toast } from "sonner";
import { useState } from "react";
import { useCreatePostMutation, useGetPostQuery } from "../redux/features/product/prodductApi";
import { DotWave } from "@uiball/loaders";

interface TItem {
  title: string;
  image: string;
}


const GratitudePost = () => {
  const [createPost, { isSuccess }] = useCreatePostMutation();
  const [title, setTitle] = useState<number | string>("");
  const [image, setImage] = useState<number | string>("");
  const {data, isLoading} = useGetPostQuery('')



  const handleDonation = async () => {
    const donerInfo = {
      title: title,
      image: image,
    };

    await createPost(donerInfo).unwrap();
  };
  
  if(isSuccess){
    toast.message('post successful')
  }

  if(isLoading){
    <div>
      <p>Loading</p>

<DotWave size={47} speed={1} color="black" />
    </div>
  }


  return (
    <>
    <div>
      <div className="card mx-auto my-12 w-1/2  ">
        <button
          onClick={() =>
            (
              document.getElementById("my_modal_5") as HTMLDialogElement
            )?.showModal()
          }
          className="btn btn-warning mx-auto w-1/2 shadow-xl"
        >
          Post Something
        </button>
      </div>

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box w-full">
          <h3 className="font-bold text-lg">Charity</h3>
          <p className="py-4 text-center font-medium ">Post for help</p>
          <div>
            <h1>Title</h1>
            <input
              type="text"
              placeholder="Title"
              className="input input-bordered input-accent w-full max-w-xs"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <h1>Image</h1>
            <input
              type="text"
              placeholder="Photo"
              className="input input-bordered input-accent w-full max-w-xs"
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button onClick={handleDonation} className="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
<div className="w-1/3  mx-auto">
  {
    data?.map((item : TItem)=>(
      <div className="my-5 border p-4 rounded-md shadow-xl">
        <h2 className="font-semibold my-4"> {item.title}</h2>
        <img
        className="mx-auto"
        src={item.image} alt="" />
        <div>
          <button className="btn btn-warning my-2">Comment</button>
        </div>
      </div>
    ))
  }
</div>
    </>
  );
};

export default GratitudePost;
