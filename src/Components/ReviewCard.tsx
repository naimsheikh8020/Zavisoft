import React from "react";
import { Star } from "lucide-react";
import type { ReviewCardProps } from "../types/ReviewCardPropos";


const ReviewCard: React.FC<ReviewCardProps> = ({
  title,
  description,
  rating,
  avatarUrl,
  imageUrl,
  maxRating = 5,
}) => {
  const fullStars = Math.floor(rating);

  return (
    <div className="w-full max-w-md rounded-3xl bg-[#EDEDED] overflow-hidden">
      
      <div className="p-6 relative">
        
        {/* Avatar */}
        <img
          src={avatarUrl}
          alt="reviewer"
          className="absolute top-6 right-6 w-14 h-14 rounded-full object-cover"
        />

        <div className="pr-20">
          <h3 className="text-xl font-semibold text-gray-900">
            {title}
          </h3>

          <p className="text-gray-600 mt-2 text-sm leading-relaxed">
            {description}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-4">
            <div className="flex gap-1">
              {Array.from({ length: maxRating }).map((_, index) => (
                <Star
                  key={index}
                  size={18}
                  className={`${
                    index < fullStars
                      ? "fill-orange-500 text-orange-500"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>

            <span className="text-sm font-medium text-gray-800">
              {rating.toFixed(1)}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Image */}
      <div className="w-full h-64">
        <img
          src={imageUrl}
          alt="product"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ReviewCard;