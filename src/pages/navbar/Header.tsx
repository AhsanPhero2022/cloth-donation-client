import { NavLink } from "react-router-dom";
import img from "../../assets/new+on.jpg";

const Header = () => {
  return (
    <div>
      <div
      data-aos="fade-down"
        className="w-full bg-cover bg-center h-full lg:h-[700px]"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="w-1/2 lg:pt-48 space-y-8 p-4">
          <h1 className="text-3xl font-bold text-white opacity-80">
            Providing Warmth and Hope to Vulnerable Communities During the
            Chilly Winter Months.
          </h1>
         
            <button className="cursor-pointer font-bold font-helvetica transition-all duration-200 px-4 py-2 rounded-full bg-yellow-400 border border-transparent flex items-center text-base hover:bg-yellow-300 active:transform-scale-95">
            <NavLink to="/volunteer">
              <span className="me-2">Join as a Virtual Volunteer  </span>
              </NavLink>
              <svg
                width="34"
                height="34"
                viewBox="0 0 74 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                 
                <circle
                  cx="37"
                  cy="37"
                  r="35.5"
                  stroke="black"
                  stroke-width="3"
                ></circle>
                  
                <path
                  d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                  fill="black"
                ></path>
              </svg>
            </button>

        
          <p className="text-white font-extralight">
            Embrace the Season of Giving: Help Us Bring Warmth and Comfort to
            Those in Need This Winter. Your Support Makes a Difference! Join Our
            Cause and Make a Positive Impact Today by Donating Winter Clothes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
