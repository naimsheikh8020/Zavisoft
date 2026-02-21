import { useState } from "react";
import { assets } from "../assets/assets";
import Button from "../Components/Button";

const Home = () => {
  const images = [assets.HeroImg1, assets.HeroImg2, assets.HeroImg3];
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <section className="w-full mt-6 space-y-6">

      {/* TITLE */}
      <h1 className="text-[51px] md:text-[120px] lg:text-[223px] font-black uppercase leading-[0.95] ">
        <span className="text-black">DO IT </span>
        <span className="text-blue-500">RIGHT</span>
      </h1>

      {/* HERO CARD */}
      <div className="relative mx-4 rounded-3xl overflow-hidden">

        {/* Image Wrapper */}
        <div className="relative aspect-[4/5] sm:aspect-[16/9]">
          <img
            src={activeImage}
            alt="Nike Air Max"
            className="absolute inset-0 w-full h-full object-cover transition duration-500"
          />

          {/* Dark Overlay */}
          <div className="absolute  inset-0 bg-black/20" />

          {/* Side Vertical Badge */}
          <div className="absolute left-[-50px] md:left-[-56px]  top-1/3 -translate-y-1/2 bg-black  text-white text-[10px] sm:text-xs px-2 py-3 rounded-r-lg rotate-[-90deg]">
            Nike product of the year
          </div>

          {/* Text Content */}
          <div className="absolute bottom-6 left-6 text-white max-w-[70%]">
            <h2 className="text-xl sm:text-3xl font-bold uppercase">
              NIKE AIR MAX
            </h2>

            <p className="mt-2 text-xs sm:text-sm text-white/90">
              Nike introducing the new air max for everyone's comfort
            </p>

            <Button variant="primary" size="md" className="mt-4">
              Shop Now
            </Button>
          </div>

          {/* Thumbnails */}
          <div className="absolute right-4 bottom-6 flex flex-col gap-3">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(img)}
                className={`rounded-xl overflow-hidden border-2 transition ${
                  activeImage === img
                    ? "border-white"
                    : "border-transparent opacity-70"
                }`}
              >
                <img
                  src={img}
                  alt="preview"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;