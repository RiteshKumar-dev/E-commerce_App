import React from "react";
import { useNavigate } from "react-router-dom";
import { MdSearch } from "react-icons/md";

const Item = ({ id, name, image, old_price, new_price }) => {
  const navigate = useNavigate();

  const handleIconClick = (e) => {
    e.preventDefault();
    navigate(`/product/${id}`);
    window.scrollTo(0, 0);
  };

  const handleImageClick = (e) => {
    e.preventDefault();
    navigate(`/product/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <div className="relative group">
        <div className="block">
          <img
            onClick={handleImageClick}
            src={image}
            alt={name}
            className="w-full h-46 object-cover cursor-pointer"
          />

          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <MdSearch
              className="text-white text-3xl transform transition-transform duration-300 group-hover:rotate-90 cursor-pointer"
              onClick={handleIconClick}
            />
          </div>
        </div>
      </div>
      <div className="p-4">
        <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
        <div className="flex justify-between items-center mt-2">
          <div className="text-gray-400 line-through">${old_price}.00</div>
          <div className="text-xl font-bold text-red-500">${new_price}.00</div>
        </div>
      </div>
    </div>
  );
};

export default Item;
