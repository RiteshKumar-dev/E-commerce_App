import React from "react";
import { motion } from "framer-motion";

function Offer() {
  return (
    <motion.section
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 4 }}
      className="bg-banneroffer bg-cover bg-center w-full px-4 py-24 mt-1"
    >
      <div className="max_padd_container">
        <h2 className="h2">Summer sales 50%</h2>
        <h3 className="h3 capitalized">Men's Leather Formal Wear Shoes</h3>
        <button className="btn_dark_rounded">Go to store...</button>
      </div>
    </motion.section>
  );
}

export default Offer;
