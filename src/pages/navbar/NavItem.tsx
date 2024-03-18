import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/headerLogo.png";
import { logout, useCurrentToken  } from "../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";


const NavItem = () => {
  const user = useAppSelector(useCurrentToken)
const dispatch = useAppDispatch()
console.log(user);

const navigate = useNavigate()
const location = useLocation();
const from = location.state?.from?.pathname || "/";



const handleLogout = () =>{
  dispatch(logout())
  navigate(from, { replace: true });
}

  const items = (
    <ul className="lg:flex items-center gap-4  text-black font-semibold ">
       <li>
        <a className="bg-yellow-500" href="/">Home</a>
      </li>
      <li>
        <NavLink
        className='bg-yellow-500'
        to='/aboutUs'>About Us</NavLink>
      </li>
      <li>
        <NavLink
        className='bg-yellow-500'
        to='/community'> Gratitude</NavLink>
      </li>
      <li>
        <NavLink
        className='bg-yellow-500'
        to='/winter-clothes'>All Clothes</NavLink>
      </li>
     
     <li>
      <NavLink
      className='bg-yellow-500'
      to="/dashboard" >
           Dashboard
          </NavLink>
      </li>
        </ul>
  );

  return (
    <div
    data-aos='fade-right'
    >
      <div className="navbar bg-yellow-300 h-20 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {items}
            </ul>
          </div>
          <div className="w-24">
            <img className="" src={logo} alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{items}</ul>
        </div>
        <div className="navbar-end">
          {
            user ?
            
            <button className="btn btn-warning"
            onClick={handleLogout}
            >Logout</button>
          : 
           <NavLink to="/login" >
           <button className="btn btn-warning">Login</button>
         </NavLink>
          }
         
        </div>
      </div>
    </div>
  );
};

export default NavItem;
