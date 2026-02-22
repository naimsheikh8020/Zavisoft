import { useParams } from "react-router";
import { assets, products } from "../assets/assets";
import { useState } from "react";
import { Heart } from "lucide-react";
import ProductCard from "../Components/ProductCard";

const sizes = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  const productImages = [
    assets.productDetails1,
    assets.productDetails2,
    assets.productDetails3,
    assets.productDetails4,
  ];

  const [activeImage, setActiveImage] = useState(productImages[0]);
  const [selectedSize, setSelectedSize] = useState<number | null>(38);
  const [selectedColor, setSelectedColor] = useState("navy");

  if (!product) {
    return (
      <div className="text-center mt-20 text-2xl font-semibold">
        Product not found
      </div>
    );
  }

  return (
    <section className="max-w-full mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT - IMAGE SECTION */}
        <>
          {/* Mobile Layout */}
          <div className="block lg:hidden">
            {/* Main Image */}
            <div className="bg-gray-100 rounded-3xl p-4">
              <img
                src={activeImage}
                className="w-full object-contain"
              />
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-3">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(img)}
                  className={`w-2 h-2 rounded-full transition ${activeImage === img ? "bg-blue-600" : "bg-gray-300"
                    }`}
                />
              ))}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 mt-4 justify-center">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(img)}
                  className={`w-20 h-16 rounded-xl bg-gray-100 p-1 transition border ${activeImage === img
                      ? "border-black"
                      : "border-transparent"
                    }`}
                >
                  <img
                    src={img}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-2 gap-3">
            <div className="rounded-3xl">
              <img
                src={assets.productDetails1}
                className="w-full object-contain"
              />
            </div>

            <div className="rounded-3xl">
              <img
                src={assets.productDetails2}
                className="w-full object-contain"
              />
            </div>

            <div className="rounded-3xl border-black">
              <img
                src={assets.productDetails3}
                className="w-full object-contain"
              />
            </div>

            <div className="rounded-3xl">
              <img
                src={assets.productDetails4}
                className="w-full object-contain"
              />
            </div>
          </div>
        </>

        {/* RIGHT - PRODUCT DETAILS */}
        <div className="flex flex-col">
          <span className="bg-blue-600 text-white text-sm font-medium px-4 py-1 rounded-full w-fit mb-4">
            New Release
          </span>

          <h1 className="text-3xl font-bold leading-tight mb-4 uppercase">
            ADIDAS 4DFWD X PARLEY RUNNING SHOES
          </h1>

          <p className="text-xl text-blue-600 font-semibold mb-6">
            $125.00
          </p>

          {/* COLOR */}
          <div className="mb-6">
            <p className="text-sm font-semibold mb-3">COLOR</p>

            <div className="flex gap-3">
              <button
                onClick={() => setSelectedColor("navy")}
                className={`w-11 h-11 rounded-full flex items-center justify-center transition ${selectedColor === "navy"
                    ? "ring-2 ring-black p-[3px]"
                    : ""
                  }`}
              >
                <div className="w-full h-full rounded-full bg-[#1f2a3c]" />
              </button>

              <button
                onClick={() => setSelectedColor("green")}
                className={`w-11 h-11 rounded-full flex items-center justify-center transition ${selectedColor === "green"
                    ? "ring-2 ring-black p-[3px]"
                    : ""
                  }`}
              >
                <div className="w-full h-full rounded-full bg-[#7f8f7a]" />
              </button>
            </div>
          </div>

          {/* SIZE */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <p className="text-sm font-semibold">SIZE</p>
              <span className="text-xs underline cursor-pointer">
                SIZE CHART
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-10 rounded-lg text-sm font-medium border ${selectedSize === size
                      ? "bg-black text-white border-black"
                      : "bg-white border-gray-300 hover:border-black"
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 mb-8">
            <button className="flex-1 bg-black text-white py-4 rounded-xl font-semibold tracking-wide">
              ADD TO CART
            </button>

            <button className="w-14 flex items-center justify-center rounded-xl bg-black">
              <Heart className="text-white" size={20} />
            </button>
          </div>

          <button className="w-full bg-indigo-600 text-white py-4 rounded-xl font-semibold mb-10">
            BUY IT NOW
          </button>

          {/* ABOUT */}
          <div>
            <h3 className="font-semibold mb-4">ABOUT THE PRODUCT</h3>

            <p className="text-sm text-gray-600 mb-4">
              Shadow Navy / Army Green
            </p>

            <p className="text-sm text-gray-500 mb-4">
              This product is excluded from all promotional discounts and offers.
            </p>

            <ul className="text-sm text-gray-500 list-disc pl-5 space-y-2">
              <li>Pay over time in interest-free installments.</li>
              <li>Free standard shipping, returns & exchanges.</li>
            </ul>
          </div>
        </div>

      </div>

      <div>
        <div className="flex justify-between items-center">
          <div>
          <h2 className="text-5xl font-bold mt-12">You may also like</h2>
        </div>
        <div className="flex gap-4">
          <button className="w-10 h-10 rounded-md bg-gray-400 text-white flex items-center justify-center">
            ‹
          </button>
          <button className="w-10 h-10 rounded-md bg-black text-white flex items-center justify-center">
            ›
          </button>

        </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;