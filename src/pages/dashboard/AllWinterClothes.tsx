
import { toast } from "sonner";
import { useDeleteProductsMutation, useGetProductsQuery,  } from "../redux/features/product/prodductApi";
import { Link  } from "react-router-dom";
import {  PencilSquareIcon } from "@heroicons/react/16/solid";

import { ArchiveBoxXMarkIcon } from "@heroicons/react/20/solid";

type TData = {
    title: string;
    _id: string;
    image: string;
    size: string
}

const AllWinterClothes = () => {
  const { data, isLoading } = useGetProductsQuery("");
 


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
      <div className="overflow-x-auto">
        <table className="table">
         
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Size</th>
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
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Loading"
                        />
                      </div>
                    </div>
                    
                  </div>
                </td>
                <td>
                 {item.title}
                </td>
                <td>{item.size}</td>
                <th>
                  <Link to={`/dashboard/updateClothes/${item._id}`}>
                  <button className="btn btn-success">
                    <PencilSquareIcon 
                    className="w-8 h-8 text-white"
                    />
                    </button>
                  </Link>
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

export default AllWinterClothes;
