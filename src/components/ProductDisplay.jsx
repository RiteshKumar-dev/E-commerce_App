import React, { useContext } from "react";
import product_rt_1 from "../assets/assets/product_rt_1.png";
import product_rt_2 from "../assets/assets/product_rt_2.png";
import product_rt_3 from "../assets/assets/product_rt_3.png";
import product_rt_4 from "../assets/assets/product_rt_4.png";
import { MdStar } from "react-icons/md";
import { ShopContext } from "../Context/ShopContext";
import { motion } from "framer-motion";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  return (
    <motion.section
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto py-6 px-6"
    >
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2 flex flex-col lg:flex-row items-center gap-4">
          <div className="flex flex-row lg:flex-col items-center space-x-2 lg:space-y-6 cursor-pointer ">
            <img
              src={product_rt_1}
              alt="productImg"
              className="max-h-24 w-auto rounded-2xl"
            />
            <img
              src={product_rt_2}
              alt="productImg"
              className="max-h-24 w-auto rounded-2xl"
            />
            <img
              src={product_rt_3}
              alt="productImg"
              className="max-h-24 w-auto rounded-2xl"
            />
            <img
              src={product_rt_4}
              alt="productImg"
              className="max-h-24 w-auto rounded-2xl"
            />
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src={product.image}
              alt="Product"
              className="w-full max-w-lg h-auto object-cover cursor-pointer rounded-2xl"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col space-y-6">
          <h3 className="text-2xl font-bold">{product.name}</h3>
          <div className="flex items-center text-yellow-500">
            <MdStar className="h-6 w-6" />
            <MdStar className="h-6 w-6" />
            <MdStar className="h-6 w-6" />
            <MdStar className="h-6 w-6" />
            <MdStar className="h-6 w-6" />
            <p className="ml-2 text-gray-700">(111)</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-lg line-through text-gray-500">
              ${product.old_price}
            </div>
            <div className="text-2xl font-semibold text-gray-900">
              ${product.new_price}
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Select Size...</h4>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 border rounded-md text-gray-700">
                S
              </button>
              <button className="px-4 py-2 border rounded-md text-gray-700">
                M
              </button>
              <button className="px-4 py-2 border rounded-md text-gray-700">
                L
              </button>
              <button className="px-4 py-2 border rounded-md text-gray-700">
                XL
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-6">
            <button
              onClick={() => {
                addToCart(product.id);
              }}
              className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
            >
              Add to Cart
            </button>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition">
              Buy it Now
            </button>
          </div>
          <p className="mt-4 text-gray-700">
            <span className="font-semibold">Category:</span> Women | Jacket |
            Winter
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Tags:</span> Modern | Latest
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default ProductDisplay;
