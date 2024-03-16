import { logout } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hook";

const DashboardNavbar = () => {


const dispatch = useAppDispatch()


const handleLogout = ()=>{
  dispatch(logout())
}


    return (
        <div>
            <div className="text-white navbar bg-[#001529]">
  <div className="flex-1">
    <a className="btn btn-ghost  text-xl">Donate clothes</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li>
        <button
        className="btn btn-outline text-white"
        onClick={handleLogout}
        >Logout</button>
      </li>
    
     
    </ul>
  </div>
</div>
        </div>
    );
};

export default DashboardNavbar;