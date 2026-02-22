import { Heart, Trash2, ChevronDown } from "lucide-react";
import { assets, products } from "../assets/assets";
import { ProductSection } from "../Components/ProductSection";
import ProductCard from "../Components/ProductCard";

const Cart = () => {
  return (
    <section className=" py-10 px-6">
      <div className=" mx-auto">

        {/* Top Banner */}
        <div className="mb-10">
          <h1 className="text-3xl font-semibold text-gray-800">
            Saving to celebrate
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Enjoy up to 60% off thousands of styles during the End of Year sale -
            while supplies last. No code needed.
          </p>
          <p className="text-sm text-gray-600 mt-1 underline cursor-pointer">
            Join us, or Sign-in
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-xl font-semibold mb-1">Your Bag</h2>
            <p className="text-sm text-gray-500 mb-6">
              Items in your bag not reserved- check out now to make them yours.
            </p>

            <div className="flex gap-6 items-start">

              {/* Image */}
              <div className="w-32 h-32 bg-gray-100 rounded-xl flex items-center justify-center">
                <img
                  src={assets.Shoes}
                  alt="shoe"
                  className="object-contain"
                />
              </div>

              {/* Info */}
              <div className="flex-1">

                <div className="flex justify-between">
                  <h3 className="font-semibold text-gray-800">
                    DROPSET TRAINER SHOES
                  </h3>
                  <span className="text-blue-600 font-semibold">
                    $130.00
                  </span>
                </div>

                <p className="text-sm text-gray-600 mt-1">
                  Men’s Road Running Shoes
                </p>
                <p className="text-sm text-gray-600">
                  Enamel Blue / University White
                </p>

                {/* Dropdown Row */}
                <div className="flex gap-6 mt-4">

                  <button className="flex items-center gap-1 text-sm font-medium">
                    Size 10
                    <ChevronDown size={16} />
                  </button>

                  <button className="flex items-center gap-1 text-sm font-medium">
                    Quantity 1
                    <ChevronDown size={16} />
                  </button>

                </div>

                {/* Icons */}
                <div className="flex gap-5 mt-4 text-gray-500">
                  <Heart
                    size={18}
                    className="cursor-pointer hover:text-black transition"
                  />
                  <Trash2
                    size={18}
                    className="cursor-pointer hover:text-black transition"
                  />
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className=" rounded-2xl p-8  h-fit">
            <h2 className="text-xl font-semibold mb-6">
              Order Summary
            </h2>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span>1 ITEM</span>
                <span>$130.00</span>
              </div>

              <div className="flex justify-between">
                <span>Delivery</span>
                <span>$6.99</span>
              </div>

              <div className="flex justify-between">
                <span>Sales Tax</span>
                <span>-</span>
              </div>


              <div className="flex justify-between font-semibold text-base">
                <span>Total</span>
                <span>$136.99</span>
              </div>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-lg mt-6 font-medium tracking-wide hover:opacity-90 transition">
              CHECKOUT
            </button>

            <p className="mt-4 text-sm underline cursor-pointer">
              Use a promo code
            </p>
          </div>

        </div>
        <ProductSection
          title="You may also like"
          items={products}
          onPrev={() => console.log("prev")}
          onNext={() => console.log("next")}
          renderItem={(product) => (
            <ProductCard key={product.id} {...product} />
          )}
        />
      </div>
    </section>
  );


}

export default Cart
