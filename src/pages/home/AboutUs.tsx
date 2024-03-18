import { useGetVolunteerQuery } from "../redux/features/product/prodductApi";

interface Volunteer {
    name: string;
    location: string;
    number: string;
  }

const AboutUs = () => {
  const { data, isLoading } = useGetVolunteerQuery("");
  if(isLoading){
    <div>Loading...</div>
  }
  return (
    <div>
      <div className="my-12 grid lg:grid-cols-4 gap-4">
        {data?.map((item: Volunteer) => (
          <div className="card w-auto bg-base-100 shadow-xl my-5 ">
           
            <div className="card-body">
              <h2 className="card-title mx-auto my-4">{item.name}</h2>
             <div className="text-center space-y-3">
             <p><span className="font-semibold">Address:</span> {item.location}</p>
              <p><span className="font-semibold">Phone:</span> {item.number}</p>
             </div>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
