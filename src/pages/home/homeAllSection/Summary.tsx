import { CheckCircleIcon } from "@heroicons/react/16/solid";

const Summary = () => {
  return (
    <div className="my-16">
      <h1 className="text-5xl font-bold text-center my-8">Summary</h1>
      <div className="grid lg:grid-cols-2 gap-4 ">
        <div>
          <h1 className="text-3xl font-bold">
            We are here to support vulnerable communities
          </h1>
          <p className="text-xl my-3">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua molestie
            a iaculis at erat pellentesque adipiscing commodo elit at.
          </p>
          <img
          data-aos='fade-right'
            className="rounded-md "
            src="https://assets-global.website-files.com/6203d9f91bd3214ea54a1eba/62041b7f6b64ea20b6de7066_about-us-image-1-charity-webflow-ecommerce-template-p-800.jpeg"
            alt=""
          />
          <img
            data-aos='fade-left'
            className="rounded-md mt-4"
            src="https://assets-global.website-files.com/6203d9f91bd3214ea54a1eba/62041b7f91e9d12616717c46_about-us-image-2-charity-webflow-ecommerce-template-p-1080.jpeg"
            alt=""
          />
        </div>
        <div>
          <img
            data-aos='fade-left'
            className="rounded-md mb-4"
            src="https://assets-global.website-files.com/6203d9f91bd3214ea54a1eba/62041b7f20dcc772aad073a5_about-us-image-3-charity-webflow-ecommerce-template.jpg"
            alt=""
          />
          <p className="text-xl my-8">
            Vitae aliquet nec ullamcorper sit amet risus nullam eget felis et
            netus et malesuada fames urna nec tincidunt praesent semper feugiat
            metus aliquam eleifend mi in nulla posuere sollicitudin pretium
            aenean pharetra magna ac placerat.
          </p>
         <div className="space-y-5">
         <p className="flex gap-3">
            <CheckCircleIcon className="h-6 w-6 text-yellow-500" />
            Excepteur sint occaecat cupidatat non proident
          </p>
          <p className="flex gap-3">
            <CheckCircleIcon className="h-6 w-6 text-yellow-500" />
            Pellentesque elit ullamcorper dignissim
          </p>
          <p className="flex gap-3">
            <CheckCircleIcon className="h-6 w-6 text-yellow-500" />
            Nibh mauris cursus mattis molestie a iaculis
          </p>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
