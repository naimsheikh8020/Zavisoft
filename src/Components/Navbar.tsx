import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router";

const NAV_ITEMS = ["New Drops 🔥", "Men", "Women"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative w-full bg-[#f3f3f3] rounded-2xl">
      <nav className="px-4 md:px-8 py-4 md:py-6">
        <div className="flex items-center justify-between">

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-200 transition"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-800">
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <button className="hover:text-black transition">
                  {item}
                </button>
              </li>
            ))}
          </ul>

          {/* Logo */}
          <Link to="/">
            <img
              src={assets.Logoo}
              alt="Brand logo"
              className="h-6 md:h-8 w-auto"
            />
          </Link>

          {/* Icons */}
          <div className="flex items-center gap-4 text-gray-800">
            <Search className="hidden sm:block w-5 h-5 cursor-pointer hover:text-black transition" />
            <User className="hidden sm:block w-5 h-5 cursor-pointer hover:text-black transition" />
            <div className="relative cursor-pointer">
              <ShoppingBag className="w-5 h-5 hover:text-black transition" />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-semibold">
                0
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Modern Dropdown Panel */}
      <div
        className={`md:hidden absolute left-0 w-full px-4 transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-2 invisible"
        }`}
      >
        <div className="bg-white/90 backdrop-blur-xl rounded-xl shadow-lg p-6 space-y-6 border border-gray-200">
          
          <ul className="flex flex-col gap-5 text-base font-medium text-gray-800">
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:text-black transition"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>

          <div className="pt-4 border-t flex items-center gap-6 sm:hidden">
            <button className="flex items-center gap-2">
              <Search size={18} />
              <span>Search</span>
            </button>
            <button className="flex items-center gap-2">
              <User size={18} />
              <span>Account</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}