import { useState } from "react";
import { assets, reviews } from "../assets/assets";
import Button from "../Components/Button";
import ReviewCard from "../Components/ReviewCard";
import ProductCard from "../Components/ProductCard";
import CategorySection from "../Components/CategorySection";
import { useProducts } from "../hook/useProducts";
import { Loading } from "../Components/Loading";

const Home = () => {
  const { products, loading, error } = useProducts();
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
                className={`rounded-xl overflow-hidden border-2 transition ${activeImage === img
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

      {/* Shop New Section */}
      <div className="mt-8">
        <div className="flex items-center justify-between">
          <h2 className="text-xl  md:text-6xl font-semibold uppercase">
            Don’t miss out <br /> new drops
          </h2>
          <Button variant="primary" size="md" className="shrink-0">
            Shop New DROPS
          </Button>



        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {loading && (
            <Loading size={35}/>

          )}
          {error && (
            <div className="col-span-full text-center py-12">
              <p className="text-xl text-red-600">Error: {error}</p>
            </div>
          )}
          {!loading && !error &&
  products.map((product) => (
    <ProductCard
      key={product.id}
      id={product.id.toString()}
      title={product.title}
      price={product.price}
      imageSrc={product.images?.[0] || "/fallback.jpg"}
      imageAlt={product.title}
      badge="New"
    />
  ))}
        </div>
      </div>

      {/* Categroy Section */}
      <CategorySection />

      {/* Review Section */}
      <div>
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-3xl md:text-6xl uppercase font-bold flex-1 min-w-0">
            Reviews
          </h2>

          <Button variant="primary" size="md" className="shrink-0">
            Shop Now
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {reviews.map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Home;
