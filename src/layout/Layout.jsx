import { Outlet } from "react-router-dom";
import Navbar from "../sharedComponents/navbar/Navbar";
import Footer from "../sharedComponents/footer/Footer";

const Layout = () => {
  return (
    <div className="bg-white  flex flex-col min-h-[100vh]">
      <div className="flex-grow border max-w-7xl mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>

      <div className="flex-shrink-0">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Layout;
