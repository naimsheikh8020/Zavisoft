import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { Music2 } from "lucide-react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="w-full mt-12 px-4 sm:px-6 md:px-12">
      <div className="rounded-4xl overflow-hidden">
        <div className="bg-[#4A69E2] px-6 sm:px-10 md:px-16 py-12 sm:py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          
          {/* Left Content */}
          <div className="max-w-xl w-full">
            <h1 className="text-white font-semibold text-2xl sm:text-3xl md:text-5xl leading-snug">
              JOIN OUR KICKSPLUS <br className="hidden sm:block" />
              CLUB & GET 15% OFF
            </h1>

            <p className="text-white/80 mt-4 text-sm sm:text-base">
              Sign up for free! Join the community.
            </p>

            <div className="flex mt-6 w-full max-w-md">
              <input
                type="email"
                placeholder="Email address"
                className="
                  flex-1
                  min-w-0
                  bg-transparent
                  border border-white/60
                  text-white
                  placeholder-white/70
                  px-4 py-3
                  rounded-l-lg
                  outline-none
                  focus:border-white
                "
              />
              <button
                className="
                  bg-black
                  text-white
                  px-4 sm:px-6
                  py-3
                  rounded-r-lg
                  font-medium
                  whitespace-nowrap
                  hover:bg-gray-900
                  transition
                "
              >
                SUBMIT
              </button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end w-full md:w-auto">
            <img
              src={assets.Kicks}
              alt="Kicks"
              className="w-40 sm:w-52 md:w-72 object-contain"
            />
          </div>
        </div>

        <div className="bg-[#232321] rounded-t-[28px] px-6 sm:px-10 md:px-16 py-12 -mt-6 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-white">

            <div>
              <h3 className="text-orange-400 text-lg sm:text-xl font-semibold mb-4">
                About us
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                We are the biggest hyperstore in the universe.
                We got you all cover with our exclusive collections
                and latest drops.
              </p>
            </div>

            <div>
              <h3 className="text-orange-400 text-lg sm:text-xl font-semibold mb-4">
                Categories
              </h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Runners</li>
                <li>Sneakers</li>
                <li>Basketball</li>
                <li>Outdoor</li>
                <li>Golf</li>
                <li>Hiking</li>
              </ul>
            </div>

            <div>
              <h3 className="text-orange-400 text-lg sm:text-xl font-semibold mb-4">
                Company
              </h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>About</li>
                <li>Contact</li>
                <li>Blogs</li>
              </ul>
            </div>

            <div>
              <h3 className="text-orange-400 text-lg sm:text-xl font-semibold mb-4">
                Follow us
              </h3>
              <div className="flex gap-4 text-gray-400 cursor-pointer">
                <FaFacebook size={20} className="hover:text-white transition" />
                <BsInstagram size={20} className="hover:text-white transition" />
                <BsTwitter size={20} className="hover:text-white transition" />
                <Music2 size={20} className="hover:text-white transition" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#232321] -mt-1 px-2 md:px-6">
          <img
            src={assets.kicksfooterlog}
            alt="Kicks Footer Logo"
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;