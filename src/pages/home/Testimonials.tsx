import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGetTestimonialQuery } from "../redux/features/product/prodductApi";
import { StarFilled } from "@ant-design/icons";

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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-12 ">
      <h1 className="py-8 text-3xl font-bold text-center">
        Donar Testimonials
      </h1>
      <div>
        <Slider {...settings}>
          {data?.map((item: TItem) => (
            <div key={item._id} className="px-2  slider-item  ">
              <div className="bg-blue-50  p-4 lg:h-56 rounded-lg">
                <div className="flex gap-2 items-center justify-center">
                  <StarFilled className="text-yellow-400" />
                  <StarFilled className="text-yellow-400" />
                  <StarFilled className="text-yellow-400" />
                  <StarFilled className="text-yellow-200" />
                  <StarFilled className="text-yellow-200" />
                </div>
                <div className="text-center ">
                  <p>{item.description}</p>
                  <img
                    src={item.image}
                    alt="Loading..."
                    className="mx-auto rounded-full w-12 h-12 mt-8"
                  />
                  <p className=" font-bold">{item.title}</p>
                  <p className="">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Slied;
