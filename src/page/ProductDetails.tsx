import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import ProductCard from "../Components/ProductCard";
import { getProductById, getProducts } from "../service/product.service";
import type { Product } from "../types/ProductType";
import { useCart } from "../context/CartContext";

const sizes = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [activeImage, setActiveImage] = useState("");
  const [selectedSize, setSelectedSize] = useState<number | null>(38);
  const [selectedColor, setSelectedColor] = useState("navy");
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    if (!product) return;

    addToCart(product, 1, selectedSize || undefined, selectedColor);
    setAddedToCart(true);

    // Reset the success message after 2 seconds
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  useEffect(() => {
    // Scroll to top when navigating to product details page
    window.scrollTo(0, 0);

    const fetchProductData = async () => {
      if (!id) return;

      try {
        setLoading(true);
        setError(null);

        // Fetch product details
        const productData = await getProductById(Number(id));
        setProduct(productData);
        setActiveImage(productData.images[0] || "");

        // Fetch related products
        const allProducts = await getProducts();
        const related = allProducts
          .filter(p => p.category.id === productData.category.id && p.id !== productData.id)
          .slice(0, 4);
        setRelatedProducts(related);
      } catch (err) {
        setError("Failed to load product details");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-xl font-semibold">Loading product...</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="text-center mt-20">
        <p className="text-2xl font-semibold text-red-600 mb-4">
          {error || "Product not found"}
        </p>
        <a href="/" className="text-blue-600 underline">Return to home</a>
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
                alt={product.title}
                className="w-full object-contain"
              />
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-3">
              {product.images.map((img, index) => (
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
              {product.images.map((img, index) => (
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
                    alt={`${product.title} view ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-2 gap-3">
            {product.images.slice(0, 4).map((img, index) => (
              <div key={index} className="rounded-3xl bg-gray-100 p-4 cursor-pointer hover:opacity-80 transition" onClick={() => setActiveImage(img)}>
                <img
                  src={img}
                  alt={`${product.title} view ${index + 1}`}
                  className="w-full object-contain"
                />
              </div>
            ))}
            {/* Fill empty slots if less than 4 images */}
            {[...Array(Math.max(0, 4 - product.images.length))].map((_, index) => (
              <div key={`empty-${index}`} className="rounded-3xl bg-gray-100 p-4">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  No image
                </div>
              </div>
            ))}
          </div>
        </>

        {/* RIGHT - PRODUCT DETAILS */}
        <div className="flex flex-col">
          <span className="bg-blue-600 text-white text-sm font-medium px-4 py-1 rounded-full w-fit mb-4">
            {product.category.name}
          </span>

          <h1 className="text-3xl font-bold leading-tight mb-4 uppercase">
            {product.title}
          </h1>

          <p className="text-xl text-blue-600 font-semibold mb-6">
            ${product.price.toFixed(2)}
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
            <button
              onClick={handleAddToCart}
              className={`flex-1 py-4 rounded-xl font-semibold tracking-wide transition-all ${addedToCart
                  ? 'bg-green-600 text-white'
                  : 'bg-black text-white hover:bg-gray-800'
                }`}
            >
              {addedToCart ? '✓ ADDED TO CART' : 'ADD TO CART'}
            </button>

            <button className="w-14 flex items-center justify-center rounded-xl bg-black hover:bg-gray-800 transition">
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
              {product.description}
            </p>

            <ul className="text-sm text-gray-500 list-disc pl-5 space-y-2">
              <li>Pay over time in interest-free installments.</li>
              <li>Free standard shipping, returns & exchanges.</li>
            </ul>
          </div>
        </div>

      </div>

      <div>
        <div className="flex justify-between items-center mt-12">
          <h2 className="text-2xl md:text-5xl font-bold">You may also like</h2>
          <div className="flex gap-2 md:gap-4">
            <button className="w-8 h-8 md:w-10 md:h-10 rounded-md bg-gray-400 text-white flex items-center justify-center">
              ‹
            </button>
            <button className="w-8 h-8 md:w-10 md:h-10 rounded-md bg-black text-white flex items-center justify-center">
              ›
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
          {relatedProducts.map((relatedProduct) => (
            <ProductCard
              key={relatedProduct.id}
              id={relatedProduct.id.toString()}
              imageSrc={relatedProduct.images[0] || ""}
              title={relatedProduct.title}
              price={relatedProduct.price}
              badge={relatedProduct.category.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;