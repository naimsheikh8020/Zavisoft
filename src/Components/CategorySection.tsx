import { useState, useEffect } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { getCategories } from "../service/product.service";
import type { Category } from "../types/ProductType";

const CategorySection = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const ITEMS_TO_SHOW = 2;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const data = await getCategories();
        const filteredCategories = data.filter(cat =>
          cat.name !== "string" &&
          cat.slug !== "string" &&
          cat.id <= 5
        );
        setCategories(filteredCategories);
      } catch (err) {
        setError("Failed to load categories");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handlePrevious = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => {
        const newIndex = prev - ITEMS_TO_SHOW;
        return newIndex < 0 ? Math.max(0, categories.length - ITEMS_TO_SHOW) : newIndex;
      });
      setIsTransitioning(false);
    }, 300);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => {
        const newIndex = prev + ITEMS_TO_SHOW;
        return newIndex >= categories.length ? 0 : newIndex;
      });
      setIsTransitioning(false);
    }, 300);
  };

  const visibleCategories = categories.slice(currentIndex, currentIndex + ITEMS_TO_SHOW);

  if (loading) {
    return (
      <section className="bg-black rounded-xl w-full py-20">
        <div className="w-full mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-center h-60">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error || categories.length === 0) {
    return (
      <section className="bg-black rounded-xl w-full py-20">
        <div className="w-full mx-auto px-6 lg:px-12">
          <div className="text-center text-white">
            <p>{error || "No categories available"}</p>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="bg-black rounded-xl w-full py-20">
      <div className="w-full mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-white text-4xl lg:text-5xl font-extrabold tracking-tight uppercase">
            Categories
          </h2>

          <div className="flex gap-3">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="w-10 h-10 rounded-md bg-[#3A3A3A] hover:bg-[#4A4A4A] transition flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="text-white" size={20} />
            </button>

            <button
              onClick={handleNext}
              disabled={currentIndex + ITEMS_TO_SHOW >= categories.length}
              className="w-10 h-10 rounded-md bg-[#3A3A3A] hover:bg-[#4A4A4A] transition flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="text-white" size={20} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className={`grid md:grid-cols-2 overflow-hidden rounded-3xl transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          {visibleCategories.map((category, index) => (
            <div
              key={category.id}
              className="relative bg-[#F2F2F2] h-[440px] lg:h-[480px] overflow-hidden group"
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              {/* Product Image - repositioned to touch bottom */}
              <div className="absolute inset-0 flex items-end justify-center pb-16 px-8 pt-8">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full max-w-[80%] h-auto max-h-[75%] object-contain transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2"
                />
              </div>

              {/* Soft bottom fade - enhanced */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

              {/* Content - repositioned */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end z-10">
                <div className="text-white leading-tight">
                  <p className="text-2xl font-bold uppercase mb-1 drop-shadow-lg">{category.name}</p>
                  <p className="text-sm font-medium text-gray-200 uppercase tracking-wider">{category.slug}</p>
                </div>

                <button className="w-12 h-12 rounded-xl bg-white hover:bg-gray-100 transition-all duration-300 flex items-center justify-center shadow-lg hover:scale-110 hover:rotate-12">
                  <ArrowUpRight size={20} className="text-black" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default CategorySection