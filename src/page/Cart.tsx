import { Heart, Trash2, Minus, Plus } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router";
import ProductCard from "../Components/ProductCard";
import { useState, useEffect } from "react";
import { getProducts } from "../service/product.service";
import type { Product } from "../types/ProductType";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  const deliveryFee = 6.99;
  const subtotal = getTotalPrice();
  const total = subtotal + deliveryFee;

  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Get number of products to show based on screen size
  const getProductsPerPage = () => {
    if (typeof window === 'undefined') return 4;
    if (window.innerWidth >= 1024) return 4; // lg
    if (window.innerWidth >= 640) return 2; // sm
    return 1; // mobile
  };

  const [productsPerPage, setProductsPerPage] = useState(getProductsPerPage());

  useEffect(() => {
    const handleResize = () => {
      setProductsPerPage(getProductsPerPage());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset currentIndex when productsPerPage changes to avoid out of bounds
  useEffect(() => {
    setCurrentIndex(0);
  }, [productsPerPage]);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const products = await getProducts();
        setRelatedProducts(products.slice(0, 12)); // Get 12 products for carousel
      } catch (error) {
        console.error("Error fetching related products:", error);
      }
    };
    fetchRelatedProducts();
  }, []);

  const maxIndex = Math.max(0, relatedProducts.length - productsPerPage);
  const isFirstPage = currentIndex === 0;
  const isLastPage = currentIndex >= maxIndex;

  const handleNext = () => {
    if (isTransitioning || isLastPage) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => Math.min(prevIndex + productsPerPage, maxIndex));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handlePrevious = () => {
    if (isTransitioning || isFirstPage) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => Math.max(prevIndex - productsPerPage, 0));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const visibleProducts = relatedProducts.slice(currentIndex, currentIndex + productsPerPage);

  if (cartItems.length === 0) {
    return (
      <section className="py-6 md:py-10 px-4 md:px-6 min-h-screen">
        <div className="w-full mx-auto text-center py-12 md:py-20">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-6 md:mb-8">Add some products to get started!</p>
          <Link to="/" className="inline-block bg-black text-white px-6 md:px-8 py-2.5 md:py-3 rounded-xl font-semibold hover:bg-gray-800 transition text-sm md:text-base">
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }
  return (
    <section className="py-6 md:py-10 px-4 md:px-6">
      <div className="mx-auto w-full">

        {/* Top Banner */}
        <div className="mb-6 md:mb-10">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
                Saving to celebrate
              </h1>
              <p className="text-xs md:text-sm text-gray-500 mt-2">
                Enjoy up to 60% off thousands of styles during the End of Year sale -
                while supplies last. No code needed.
              </p>
              <p className="text-xs md:text-sm text-gray-600 mt-1 underline cursor-pointer">
                Join us, or Sign-in
              </p>
            </div>

          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-10">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2 bg-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-sm">
            <h2 className="text-lg md:text-xl font-semibold mb-1">Your Bag</h2>
            <p className="text-xs md:text-sm text-gray-500 mb-4 md:mb-6">
              Items in your bag not reserved- check out now to make them yours.
            </p>

            <div className="space-y-4 md:space-y-6">
              {cartItems.map((item) => (
                <div key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`} className="flex flex-col sm:flex-row gap-4 md:gap-6 items-start pb-4 md:pb-6 border-b border-gray-200 last:border-0">

                  {/* Image */}
                  <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gray-100 rounded-lg md:rounded-xl flex items-center justify-center shrink-0">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.title}
                      className="object-contain w-full h-full p-2"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 w-full">

                    <div className="flex justify-between gap-2">
                      <h3 className="font-semibold text-gray-800 uppercase text-xs sm:text-sm line-clamp-2">
                        {item.product.title}
                      </h3>
                      <span className="text-blue-600 font-semibold text-sm md:text-base whitespace-nowrap">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>

                    <p className="text-xs md:text-sm text-gray-600 mt-1">
                      {item.product.category.name}
                    </p>
                    {item.selectedColor && (
                      <p className="text-xs md:text-sm text-gray-600">
                        Color: {item.selectedColor}
                      </p>
                    )}
                    {item.selectedSize && (
                      <p className="text-xs md:text-sm text-gray-600">
                        Size: {item.selectedSize}
                      </p>
                    )}

                    {/* Quantity Controls */}
                    <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-3 md:mt-4">
                      <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-2 md:px-3 py-1">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="text-gray-600 hover:text-black transition disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                          <Minus size={14} className="md:w-4 md:h-4" />
                        </button>
                        <span className="text-xs md:text-sm font-medium w-6 md:w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="text-gray-600 hover:text-black transition"
                        >
                          <Plus size={14} className="md:w-4 md:h-4" />
                        </button>
                      </div>
                      <span className="text-xs text-gray-500">
                        ${item.product.price.toFixed(2)} each
                      </span>
                    </div>

                    {/* Icons */}
                    <div className="flex gap-4 md:gap-5 mt-3 md:mt-4 text-gray-500">
                      <Heart
                        size={16}
                        className="cursor-pointer hover:text-red-500 transition md:w-4.5 md:h-4.5"
                      />
                      <Trash2
                        size={16}
                        className="cursor-pointer hover:text-red-600 transition md:w-4.5 md:h-4.5"
                        onClick={() => removeFromCart(item.product.id)}
                      />
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 h-fit bg-gray-50 shadow-sm">
            <h2 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">
              Order Summary
            </h2>

            <div className="space-y-3 md:space-y-4 text-xs md:text-sm">
              <div className="flex justify-between">
                <span>{cartItems.length} {cartItems.length === 1 ? 'ITEM' : 'ITEMS'}</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Delivery</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Sales Tax</span>
                <span>-</span>
              </div>

              <div className="border-t pt-3 md:pt-4 flex justify-between font-semibold text-sm md:text-base">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full bg-black text-white py-2.5 md:py-3 rounded-lg mt-5 md:mt-6 font-medium tracking-wide hover:bg-gray-800 transition text-sm md:text-base">
              CHECKOUT
            </button>

            <p className="mt-3 md:mt-4 text-xs md:text-sm underline cursor-pointer text-center">
              Use a promo code
            </p>
          </div>

        </div>
      </div>

      {/* You may also like - Full Width Section */}
      {relatedProducts.length > 0 && (
        <div className="w-full  py-8 md:py-12 mt-8 md:mt-12">
          <div className="mx-auto w-full  px-4 md:px-6">
            <div className="flex justify-between items-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">You may also like</h2>
              <div className="flex gap-2 md:gap-4">
                <button
                  onClick={handlePrevious}
                  disabled={isTransitioning || isFirstPage}
                  className="w-8 h-8 md:w-10 md:h-10 rounded-md bg-gray-400 text-white flex items-center justify-center hover:bg-gray-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  ‹
                </button>
                <button
                  onClick={handleNext}
                  disabled={isTransitioning || isLastPage}
                  className="w-8 h-8 md:w-10 md:h-10 rounded-md bg-black text-white flex items-center justify-center hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  ›
                </button>
              </div>
            </div>
            <div className="relative overflow-hidden">
              <div
                className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 transition-all duration-500 ease-in-out ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                  }`}
              >
                {visibleProducts.map((relatedProduct) => (
                  <ProductCard
                    key={`${relatedProduct.id}-${currentIndex}`}
                    id={relatedProduct.id.toString()}
                    imageSrc={relatedProduct.images[0] || ""}
                    title={relatedProduct.title}
                    price={relatedProduct.price}
                    badge={relatedProduct.category.name}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );


}

export default Cart
