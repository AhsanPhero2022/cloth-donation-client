

  



import { toast } from "sonner";
import { useState } from "react";




interface CurrentUserState {
     id: string;
    name: string;
    email: string;
  
}

const GratitudePost = () => {
 
  const [title, setTitle] = useState<number | string>(""); 
  const [image, setImage] = useState<number | string>(""); 
 





  const handleDonation = async () => {

const donerInfo = {
  
  title : title,
  image: image
}
console.log(donerInfo);

    // await donarInfoSave(donerInfo).unwrap();
  };

 

  return (
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
     

      <dialog
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box w-full">
          <h3 className="font-bold text-lg">Charity</h3>
          <p className="py-4 text-center font-medium ">
            Post for help
          </p>
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
              <button
                onClick={handleDonation}
                className="btn btn-success"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </dialog>
      </div>
  );
};

export default GratitudePost;
