import React from "react";
import Item from "./Item";
import POPULAR from "../assets/assets/popular";

const RelatedProducts = () => {
  return (
    <section className="py-8 bg-gradient-to-b from-pink-100  to-pink-200 mt-5">
      <div className="container mx-auto px-4">
        <h3 className="text-center h3">Related Products</h3>
        <hr className="h-[3px] md:w-1/2 mx-auto bg-gradient-to-l from-transparent via-black to-transparent mb-16" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {POPULAR.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              old_price={item.old_price}
              new_price={item.new_price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
