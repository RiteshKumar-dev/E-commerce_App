import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineKeyboardArrowDown, MdSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const url =
  "https://real-time-amazon-data.p.rapidapi.com/search?query=Laptop&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
    "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
  },
};

const MoreProducts = ({ Category, banner }) => {
  const [allProducts, setAllProducts] = useState([]);

  // useEffect(() => {
  //   const storedProducts = localStorage.getItem("products");
  //   if (storedProducts) {
  //     setAllProducts(JSON.parse(storedProducts));
  //   } else {
  //     fetch(url, options)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         if (data.status === "OK" && data.data && data.data.products) {
  //           localStorage.setItem(
  //             "products",
  //             JSON.stringify(data.data.products)
  //           );
  //           setAllProducts(data.data.products);
  //         }
  //       })
  //       .catch((error) => console.error("Error:", error));
  //   }
  // }, []);
  const navigate = useNavigate();

  const handleIconClick = (e, id) => {
    e.preventDefault();
    navigate(`/product/${id}`);
    window.scrollTo(0, 0);
  };

  const handleImageClick = (e, id) => {
    e.preventDefault();
    navigate(`/product/${id}`);
    window.scrollTo(0, 0);
  };

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
              : Category === "women"
                ? "https://img.freepik.com/free-vector/horizontal-sale-banner-template_23-2148897327.jpg"
                : "https://panel.craftyartapp.com/templates/uploadedFiles/thumb_file/cf0a2b30d87be3250c91f80c1691baf5378c7af01673860444.jpg"
          }
          alt="Category Banner"
          className="block mx-auto w-full h-64 object-cover rounded-lg mt-12"
        />
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
        <h5 className="text-gray-700 text-lg mb-4 sm:mb-0">
          <span className="font-semibold">Showing 1-12</span> out of{" "}
          {allProducts.length} products...
        </h5>
        <button className="flex items-center text-gray-700 bg-white border border-gray-300 rounded-2xl px-4 py-2 hover:bg-gray-100 focus:outline-none">
          <span className="mr-2">Sort by...</span>
          <MdOutlineKeyboardArrowDown className="h-5 w-5" />
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {allProducts.slice(0, 14).map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <div className="relative group">
              <img
                onClick={(e) => handleImageClick(e, product.asin)}
                src={product.product_photo}
                alt={product.product_title}
                className="w-full h-40 object-cover cursor-pointer"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <MdSearch
                  onClick={(e) => handleIconClick(e, product.asin)}
                  className="text-white text-3xl transform transition-transform duration-300 group-hover:rotate-90 cursor-pointer"
                />
              </div>
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold text-gray-800 truncate">
                {product.product_title}
              </h4>
              <div className="flex justify-between items-center mt-2">
                <div className="text-gray-400 line-through">
                  {product.product_original_price}
                </div>
                <div className="text-xl font-bold text-red-500">
                  {product.product_price}
                </div>
              </div>
              <div className="text-sm text-yellow-500 mt-2">
                {product.product_star_rating} stars (
                {product.product_num_ratings} ratings)
              </div>
              <div className="text-sm text-green-500 mt-1 truncate">
                {product.delivery}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default MoreProducts;
