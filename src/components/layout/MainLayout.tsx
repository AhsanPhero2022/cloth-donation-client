import { Outlet } from "react-router-dom";
import NavItem from "../../pages/navbar/NavItem";
import Footer from "../../pages/footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <NavItem />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
