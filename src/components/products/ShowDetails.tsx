import { useParams } from "react-router-dom";
import {
  useCreateDonarMutation,
  useGetProductsQuery,
} from "../../pages/redux/features/product/prodductApi";

import { DotWave } from "@uiball/loaders";
import { toast } from "sonner";
import { useState } from "react";
import { useAppSelector } from "../../pages/redux/hook";
import { useCurrentUser } from "../../pages/redux/features/auth/authSlice";
import { Button } from "antd";

type TParameter = {
  _id: string;
};

interface CurrentUserState {
  id: string;
  name: string;
  email: string;
}

const ShowDetails = () => {
  const { data, isLoading } = useGetProductsQuery("");
  const detailsData = useParams();
  const [amount, setAmount] = useState<number | string>("");
  const [donarInfoSave, { isSuccess }] = useCreateDonarMutation();
  const user = useAppSelector(useCurrentUser) as CurrentUserState;

  if (isSuccess) {
    toast.success("Thank you for the donation");
  }

  const handleDonation = async () => {
    const donerInfo = {
      email: user.email,
      amount: amount,
    };

    await donarInfoSave(donerInfo).unwrap();
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
              <Button
                onClick={() =>
                  (
                    document.getElementById("my_modal_5") as HTMLDialogElement
                  )?.showModal()
                }
                className="bg-yellow-400"
              >
                Donate Now
              </Button>
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
