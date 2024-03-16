import { useEffect, useState } from "react";
import { useGetProductsQuery } from "../redux/features/product/prodductApi";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

type TPost = {
  image: string;
  title: string;
  _id: string;
};

const ClothesPost = () => {
  const [post, setPost] = useState<TPost[]>([]);
  const { data, isLoading } = useGetProductsQuery("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
    });
  }, []);

  useEffect(() => {
    if (!isLoading && data) {
      if (data.length > 6) {
        const newData = data.slice(0, 6);
        setPost(newData);
      } else {
        setPost(data);
      }
    }
  }, [data, isLoading]);
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-12">
        This is clothes post
      </h1>
      <div
        data-aos="fade-up"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 px-2 mx-auto"
      >
        {post?.map((item: TPost) => (
          <div className="card w-96 bg-base-100 shadow-xl" key={item._id}>
            <figure>
              <img
                className="w-full rounded-md h-80"
                src={item.image}
                alt="Loading..."
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <NavLink to={`/showDetails/${item._id}`}>
                  <button className="btn btn-warning">View Details</button>
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center my-12">
        <NavLink to="/winter-clothes">
          <button className="btn btn-warning">See All Post</button>
        </NavLink>
      </div>
    </div>
  );
};

export default ClothesPost;
