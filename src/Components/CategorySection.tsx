import { assets } from "../assets/assets"
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"

const categories = [
  {
    id: 1,
    title: "Lifestyle",
    subtitle: "Shoes",
    image: assets.Category1,
  },
  {
    id: 2,
    title: "Basketball",
    subtitle: "Shoes",
    image: assets.Category2,
  },
]

const CategorySection = () => {
  return (
    <section className="bg-black rounded-xl w-full py-20">
      <div className="w-full mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-white text-4xl lg:text-5xl font-extrabold tracking-tight uppercase">
            Categories
          </h2>

          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-md bg-[#3A3A3A] hover:bg-[#4A4A4A] transition flex items-center justify-center">
              <ChevronLeft className="text-white" size={20} />
            </button>

            <button className="w-10 h-10 rounded-md bg-[#3A3A3A] hover:bg-[#4A4A4A] transition flex items-center justify-center">
              <ChevronRight className="text-white" size={20} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 overflow-hidden rounded-3xl">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative bg-[#F2F2F2] h-[440px] lg:h-[480px] overflow-hidden group"
            >
              {/* Product Image */}
              <img
                src={category.image}
                alt={`${category.title} ${category.subtitle}`}
                className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%] object-contain transition-transform duration-500 group-hover:scale-105"
              />

              {/* Soft bottom fade */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/50 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                <div className="text-black leading-tight">
                  <p className="text-xl font-bold uppercase">{category.title}</p>
                  <p className="text-xl font-bold uppercase">{category.subtitle}</p>
                </div>

                <button className="w-11 h-11 rounded-xl bg-black hover:bg-neutral-800 transition flex items-center justify-center">
                  <ArrowUpRight size={18} className="text-white" />
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