import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import all_products from "../assets/assets/all_products";
import Item from "../components/Item";
import { motion } from "framer-motion";

const Category = ({ Category, banner }) => {
  return (
    <motion.section
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 9, damping: 5 }}
      className="max_padd_conatiner mx-auto py-20 xl:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="hidden lg:block mb-8 text-center">
        <img
          src={banner}
          alt="Category Banner"
          className="block mx-auto w-full h-64 object-cover rounded-lg"
        />
      </div>
      <div className="sm:block lg:hidden mb-8 text-center">
        <img
          src={
            Category === "men"
              ? "https://mir-s3-cdn-cf.behance.net/project_modules/hd/16b39f94905625.5edd332826fe8.jpg"
              : "" || Category === "women"
              ? "https://img.freepik.com/free-vector/horizontal-sale-banner-template_23-2148897327.jpg"
              : "https://panel.craftyartapp.com/templates/uploadedFiles/thumb_file/cf0a2b30d87be3250c91f80c1691baf5378c7af01673860444.jpg"
          }
          alt="Category Banner"
          className="block mx-auto w-full h-64 object-cover rounded-lg mt-12"
        />
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
        <h5 className="text-gray-700 text-lg mb-4 sm:mb-0">
          <span className="font-semibold">Showing 1-12</span> out of 36
          products...
        </h5>
        <button className="flex items-center text-gray-700 bg-white border border-gray-300 rounded-2xl px-4 py-2 hover:bg-gray-100 focus:outline-none">
          <span className="mr-2">Sort by...</span>
          <MdOutlineKeyboardArrowDown className="h-5 w-5" />
        </button>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {all_products.map((item) => {
          if (Category === item.category) {
            return (
              <Item
                key={item.id}
                id={item.id}
                image={item.image}
                name={item.name}
                old_price={item.old_price}
                new_price={item.new_price}
              />
            );
          }
        })}
      </div>
      <div className="mt-16 text-center">
        <button className="btn_dark_rounded">Load More...</button>
      </div>
    </motion.section>
  );
};

export default Category;
