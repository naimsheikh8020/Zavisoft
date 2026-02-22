import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#E7E7E3]">
      
      {/* Inner Wrapper */}
      <div className="flex-1 px-4 md:px-8 lg:px-16 py-4 md:py-6">
        <Navbar />
        <Outlet />
        
      </div>
<Footer />
     
    </div>
  );
};

export default Layout;