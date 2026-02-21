import { Search, User, ShoppingBag } from "lucide-react";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <header className="w-full bg-[#f3f3f3] rounded-2xl ">
      <div className="p-8 flex items-center justify-between">
        
        {/* Left Side*/}
        <div className="flex items-center gap-6 text-sm font-medium text-gray-800">
          <button className="flex items-center gap-1 hover:text-black transition">
            New Drops <span>🔥</span>
          </button>
          <button className="hover:text-black transition cursor-pointer">Men</button>
          <button className="hover:text-black transition cursor-pointer">Women</button>
        </div>
        
        {/* center the logo */}
        <div>
            <img src={assets.Logoo} alt="Logo"/>
        </div>

        {/* Right */}
        <div className="flex items-center gap-5 text-gray-800">
          <Search className="w-5 h-5 cursor-pointer hover:text-black transition" />
          <User className="w-5 h-5 cursor-pointer hover:text-black transition" />
          <div className="relative cursor-pointer">
            <ShoppingBag className="w-5 h-5 hover:text-black transition" />
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-semibold">
              0
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;