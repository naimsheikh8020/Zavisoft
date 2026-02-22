import type { ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductSectionProps<T> {
  title: string;
  items: T[];
  renderItem: (item: T) => ReactNode;
  onPrev?: () => void;
  onNext?: () => void;
  className?: string;
}

export function ProductSection<T>({
  title,
  items,
  renderItem,
  onPrev,
  onNext,
  className = "",
}: ProductSectionProps<T>) {
  return (
    <section className={`mt-12 ${className}`}>

      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl md:text-5xl font-bold">
          {title}
        </h2>

        {(onPrev || onNext) && (
          <div className="flex gap-2 md:gap-4">
            <button
              onClick={onPrev}
              disabled={!onPrev}
              className="w-8 h-8 md:w-10 md:h-10 rounded-md bg-gray-400 text-white flex items-center justify-center disabled:opacity-40"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={onNext}
              disabled={!onNext}
              className="w-8 h-8 md:w-10 md:h-10 rounded-md bg-black text-white flex items-center justify-center disabled:opacity-40"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
        {items.map((item, index) => (
          <div key={index}>{renderItem(item)}</div>
        ))}
      </div>

    </section>
  );
}