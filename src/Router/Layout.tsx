import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Layout = () => {
  return (
     <div className="min-h-screen flex flex-col overflow-x-hidden bg-[#E7E7E3] px-15 py-8">
      <Navbar />
        <Outlet />
      <Footer />
    </div>
  )
}

export default Layout