import { Button } from "antd";

const DonateNow = () => {
  return (
    <div className="lg:flex mx-auto gap-4 justify-center items-center my-12">
      <div className="space-y-5 my-4">
        <div className="w-[50px] bg-yellow-400 h-[5px]"></div>
        <h1 className="text-5xl font-bold">
          Giving help to those <br />
          who need it
        </h1>
        <p>
          Lending a helping hand to those in need, Spreading hope and support
          where it's needed most.
        </p>
        <div className="text-center">
          <Button className="bg-yellow-400 ">Donate Now</Button>
        </div>
      </div>
      <div data-aos="fade-left">
        <img
          className="w-3/4 mx-auto"
          src="https://assets-global.website-files.com/6203d9f91bd3214ea54a1eba/620409c92ec6397ba96bbf0a_home-hero-image-charity-webflow-ecommerce-template-p-800.jpeg"
          alt=""
        />
      </div>
    </div>
  );
};

export default DonateNow;
