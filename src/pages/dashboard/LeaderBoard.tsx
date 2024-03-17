
import { toast } from "sonner";
import { useDeleteProductsMutation, useGetDonarQuery  } from "../redux/features/product/prodductApi";
import { Link  } from "react-router-dom";
import {  PencilSquareIcon } from "@heroicons/react/16/solid";

import { ArchiveBoxXMarkIcon } from "@heroicons/react/20/solid";

type TData = {
   _id: string;
   amount: string;
   email: string
    
}

const LeaderBoard = () => {
  const { data, isLoading } = useGetDonarQuery("");
 


  if(isLoading){
    <div>Loading...</div>
  }

  const [deleteProduct] = useDeleteProductsMutation();

  const handleDelete = async (id: string) => {
     await deleteProduct(id);
      toast.success('Deleted Successfully')
   
  };


  return (
    <div>
        <h2 className="text-3xl font-bold text-center my-12">All time best Donar list</h2>
      <div className="overflow-x-auto">
        <table className="table">
         
          <thead>
            <tr>
              
              <th>Amount</th>
              <th>Email</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
         
           {
            data?.map((item: TData)=>(
                <tr
                key={item._id}
                >
              
                <td>
                 {item.amount}
                </td>
                <td>{item.email}</td>
                <th>
                  
                  <button className="btn btn-success">
                    <PencilSquareIcon 
                    className="w-8 h-8 text-white"
                    />
                    </button>
                
                </th>
                <th>
                <button
                className=" btn bg-red-500"
                onClick={() => handleDelete(item._id)}>
                  <ArchiveBoxXMarkIcon
                  className="w-8 h-8 "
                  />
                  </button>
                </th>
              </tr>
            ))
           }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderBoard;
