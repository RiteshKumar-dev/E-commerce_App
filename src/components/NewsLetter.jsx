import React from "react";
import { motion } from "framer-motion";

const NewsLetter = () => {
  return (
    <motion.section
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 4 }}
      className="w-full py-12 xl:py-28 bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 mt-1"
    >
      <div className="mx-auto xl:w-[80%] flexCenter flex-col gap-y-8 w-full max-w-[666px]">
        <h3 className="text-1xl font-semibold lg:h3">
          Get Exclusive offers on your Email...
        </h3>
        <h4 className="lg:uppercase lg:bold-18">
          Subscribe to our newsLetter and stay updated...
        </h4>
        <div className="flexBetween rounded-full ring-1 ring-slate-900/10 hover:ring-slate-900/15 bg-primary lg:w-full max-w-[588px]">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email address"
            className="w-full bg-transparent ml-7 border-none outline-none regular-16"
          />
          <button className="btn_dark_rounded">Subscribe</button>
        </div>
      </div>
    </motion.section>
  );
};

export default NewsLetter;
