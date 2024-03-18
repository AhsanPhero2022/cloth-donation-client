import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGetTestimonialQuery } from "../redux/features/product/prodductApi";

type TItem = {
  _id: string;
  image: string;
  title: string;
  description: string;
};

export const Slied = () => {
  const { data, isLoading } = useGetTestimonialQuery("");

  console.log(isLoading);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="py-12 ">
      <h1 className="py-8 text-3xl font-bold text-center">
        Donar Testimonials
      </h1>
      <div>
        <Slider {...settings}>
          {data?.map((item: TItem) => (
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                className="max-h-60"
                src={item.image} />{" "}
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Slied;
