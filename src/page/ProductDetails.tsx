import { useParams } from "react-router";
import { products } from "../assets/assets";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div className="text-center mt-10 text-2xl">Product not found</div>;
  }

  return (
    <>
    <p className="text-gray-600 mt-4">Product ID: {product.id}</p>
    </>
  );
};

export default ProductDetails