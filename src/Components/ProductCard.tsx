import React from "react";
import { Link } from "react-router";
import Button from "./Button";
import type { ProductCardProps } from "../types/ProductType";



const ProductCard: React.FC<ProductCardProps> = ({
  id,
  badge = "New",
  imageSrc,
  imageAlt = "Product image",
  title,
  price,
}) => {
  return (
    <div className="w-full">

      {/* Image Frame */}
      <div className=" p-4 rounded-4xl">
        <div className="bg-white p-2 rounded-4xl">
          <div className="relative bg-[#ECEEF0] rounded-4xl p-4 flex items-center justify-center overflow-hidden">

            {/* Badge */}
            <div className="absolute top-0 left-0">
              <div className="bg-blue-600 text-white text-sm font-medium px-5 py-2 rounded-br-3xl">
                {badge}
              </div>
            </div>

            {/* Image */}
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-48 object-cover"
            />

          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mt-6">
        <h3 className="text-2xl font-bold uppercase leading-tight tracking-wide text-black min-h-[64px] line-clamp-2">
          {title}
        </h3>

        <Link to={`/product/${id}`}>
          <Button
            variant="secondary"
            size="md"
            className="mt-5 w-full !rounded-xl !py-4 text-base font-semibold"
          >
            VIEW PRODUCT - <span className="text-orange-400 ml-2">${price}</span>
          </Button>
        </Link>
      </div>

    </div>
  );
};

export default ProductCard;