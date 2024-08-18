import React from "react";
import { TbArrowRight } from "react-icons/tb";
import { Link } from "react-router-dom";

const ProductHd = ({ product }) => {
  return (
    <div className="ml-5 text-sm text-gray-600 flex items-center mt-32">
      <Link to="/" className="hover:text-pink-500">
        Home
      </Link>
      <TbArrowRight className="mx-2" />
      <Link to="/shop" className="hover:text-pink-500">
        Shop
      </Link>
      <TbArrowRight className="mx-2" />
      <span className="capitalize">{product.category}</span>
      <TbArrowRight className="mx-2" />
      <span className="font-semibold truncate">{product.name}</span>
    </div>
  );
};

export default ProductHd;
