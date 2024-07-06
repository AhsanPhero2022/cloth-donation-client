import { NavLink } from "react-router-dom";

import { useGetProductsQuery } from "../../pages/redux/features/product/prodductApi";
import { Button } from "antd";

type TData = {
  title: string;
  _id: string;
  image: string;
  size: string;
};

const AllProducts = () => {
  const { data: allData, isLoading } = useGetProductsQuery(undefined);

  if (isLoading) {
    <div>Loading...</div>;
  }

  return (
    <div className="my-12">
      <h1 className="text-3xl font-bold text-center my-12">
        You can see here all donated clothes, with details.
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {allData?.map((item: TData) => (
          <div key={item._id} className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img className="h-60 w-full" src={item.image} alt="Loading..." />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p>{item.size}</p>
              <div className="card-actions justify-end">
                <NavLink to={`/showDetails/${item._id}`}>
                  <Button className="bg-yellow-400">View Details</Button>
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
