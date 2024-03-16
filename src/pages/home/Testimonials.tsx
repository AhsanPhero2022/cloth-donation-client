import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const Slied = () => {
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
      <h1 className="py-8 text-3xl font-bold text-center">Testimonials</h1>
      <div>
        
        <Slider {...settings}>
          <div className="p-8 bg-[#3461ff] rounded-md me-3">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://blog.hubspot.com/hs-fs/hubfs/client%20relationship%20management_featured.jpg?width=595&height=400&name=client%20relationship%20management_featured.jpg"
                alt=""
              />
              <h2 className="text-2xl font-semibold text-white">
                Amelia Joseph <br />
                <span className="text-sm">Chief Manager</span>
              </h2>
            </div>
            <p className="text-white">
              My vision came alive effortlessly. Their blend of casual and
              professional approach made the process a breeze. Creativity
              flowed, and the results were beyond my expectations.
            </p>
          </div>
          <div className="p-8 rounded-md">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPY10-H9Uwqg4nwb9oBl3DPnNLLfmxi7XntA&usqp=CAU"
                alt=""
              />
              <h2 className="text-2xl font-semibold ">
                Amelia Joseph <br />
                <span className="text-sm">Chief Manager</span>
              </h2>
            </div>
            <p>
              My vision came alive effortlessly. Their blend of casual and
              professional approach made the process a breeze. Creativity
              flowed, and the results were beyond my expectations.
            </p>
          </div>
          <div className="p-8 rounded-md">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq90Lo497z77Gk40hNR_aVF-7oKvn9ShEosQ&usqp=CAU"
                alt=""
              />
              <h2 className="text-2xl font-semibold ">
                Amelia Joseph <br />
                <span className="text-sm">Chief Manager</span>
              </h2>            </div>
            <p>
              My vision came alive effortlessly. Their blend of casual and
              professional approach made the process a breeze. Creativity
              flowed, and the results were beyond my expectations.
            </p>
          </div>
          <div className="p-8 rounded-md">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq90Lo497z77Gk40hNR_aVF-7oKvn9ShEosQ&usqp=CAU"
                alt=""
              />
              <h2 className="text-2xl font-semibold ">
                Amelia Joseph <br />
                <span className="text-sm">Chief Manager</span>
              </h2>
            </div>
            <p>
              My vision came alive effortlessly. Their blend of casual and
              professional approach made the process a breeze. Creativity
              flowed, and the results were beyond my expectations.
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
};
 

export default Slied