import React from "react";
import { motion } from "framer-motion";

const DiscountNavbar = () => {
  return (
    <motion.section
      // initial={{ scale: 0 }}
      // animate={{ scale: 1 }}
      // transition={{ type: "spring", stiffness: 260, damping: 8 }}
      className="fixed top-0 left-0 w-full z-10 bg-gradient-to-r from-pink-100 to-purple-300 text-white py-2 px-6 lg:px-20 ring-1 ring-slate-900/5"
    >
      <div className="container mx-auto flex justify-center items-center text-center">
        <p className="text-sm md:text-lg text-center truncate">
          🌟 Enjoy 20% off on your first purchase! Use code:
          <span className="font-bold ml-3 text-center truncate">
            WELCOME 2.0
          </span>
        </p>
        <button className="bg-white text-green-600 font-bold py-1 px-2 rounded-full hover:bg-gray-100 transition duration-300 ml-10 truncate">
          Shop Now
        </button>
      </div>
    </motion.section>
  );
};

export default DiscountNavbar;
