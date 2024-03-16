import { useParams } from "react-router-dom";
import { useCreateProductsMutation, useGetProductsQuery } from "../../pages/redux/features/product/prodductApi";

import { DotWave } from "@uiball/loaders";
import { toast } from "sonner";
import { useState } from "react";

type TParameter = {
  _id: string;
};

const ShowDetails = () => {
  const { data, isLoading } = useGetProductsQuery("");
  const detailsData = useParams();
  const [amount, setAmount] = useState<number | string>(""); // State to hold the donated amount
  const [donarInfoSave, {isSuccess}] = useCreateProductsMutation()


  // Method to handle donation submission
  const handleDonation = async () => {
    

    try {

  await  donarInfoSave(amount).unwrap()

  if (isSuccess) {
    toast.success("Thank you for the donation");
  }             
      
    } catch (error) {
      console.error("Error:", error);
    }
  };

 

  const singleData = data?.find((d: TParameter) => d._id == detailsData._id);

  return (
    <div>
      {isLoading ? (
        <>
          <div className="flex">
            <p>Loading</p>

            <DotWave size={47} speed={1} color="black" />
          </div>
        </>
      ) : singleData ? (
        <div className="card mx-auto my-12 w-1/2 bg-base-100 shadow-xl">
          <figure>
            <img className="w-1/2" src={singleData.image} alt="Loading..." />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Title: {singleData.title}</h2>
            <p>Size: {singleData.size}</p>
            <p>Description: {singleData.description}</p>
            <div className="card-actions justify-end">
              <button
                onClick={() =>
                  (
                    document.getElementById("my_modal_5") as HTMLDialogElement
                  )?.showModal()
                }
                className="btn btn-primary"
              >
                Donate Now
              </button>
            </div>
            {/* modal start */}

            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box w-full">
                <h3 className="font-bold text-lg">Charity</h3>
                <p className="py-4 text-center font-medium ">
                  Donate for the poor kids
                </p>
                <div>
                  <h1>Amount: </h1>
                  <input
                    type="number"
                    placeholder="$0000"
                    className="input input-bordered input-accent w-full max-w-xs"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
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
            {/* modal end */}
          </div>
        </div>
      ) : (
        <p>Data not found</p>
      )}
    </div>
  );
};

export default ShowDetails;
