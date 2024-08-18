import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { MdRemoveCircleOutline } from "react-icons/md";
import { TbTrash } from "react-icons/tb";
import { motion } from "framer-motion";

const CartItems = () => {
  const { all_products, cartItems, addToCart, removeFromCart } =
    useContext(ShopContext);

  const getTotalPrice = (price, quantity) => price * quantity;

  const calculateSubTotal = () => {
    return all_products
      .reduce((total, product) => {
        if (cartItems[product.id] > 0) {
          return (
            total + getTotalPrice(product.new_price, cartItems[product.id])
          );
        }
        return total;
      }, 0)
      .toFixed(2);
  };

  return (
    <motion.section
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="p-4 mt-28 md:mt-24 lg:mt-24"
    >
      <div className="overflow-x-auto rounded-2xl">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Product</th>
              <th className="p-2 border hidden md:table-cell">Title</th>
              <th className="p-2 border hidden md:table-cell">Price</th>
              <th className="p-2 border hidden md:table-cell">Quantity</th>
              <th className="p-2 border hidden md:table-cell">Total</th>
              <th className="p-2 border">Remove</th>
            </tr>
          </thead>
          <tbody>
            {all_products.map((product) => {
              if (cartItems[product.id] > 0) {
                return (
                  <tr key={product.id} className="border-t text-center">
                    <td className="p-2 border">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-24 h-24 object-cover mx-auto"
                      />
                    </td>
                    <td className="p-2 border hidden md:table-cell">
                      {product.name}
                    </td>
                    <td className="p-2 border hidden md:table-cell">
                      ${product.new_price.toFixed(2)}
                    </td>
                    <td className="p-2 border hidden md:table-cell">
                      <div className="flex items-center justify-center">
                        <button
                          onClick={() => removeFromCart(product.id)}
                          className="text-red-500 text-xl"
                        >
                          -
                        </button>
                        <span className="mx-4">{cartItems[product.id]}</span>
                        <button
                          onClick={() => addToCart(product.id)}
                          className="text-green-500 text-xl"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="p-2 border hidden md:table-cell">
                      $
                      {getTotalPrice(
                        product.new_price,
                        cartItems[product.id]
                      ).toFixed(2)}
                    </td>
                    <td className="p-2 border">
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="text-red-500"
                      >
                        <TbTrash size={24} />
                      </button>
                    </td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </table>
      </div>
      <div className="mt-8 p-4 bg-gray-100 rounded-lg shadow-lg">
        <h4 className="text-xl font-bold mb-4">Summary</h4>
        <div className="space-y-2">
          <div className="flex justify-between">
            <h4 className="font-semibold">Subtotal:</h4>
            <h4>${calculateSubTotal()}</h4>
          </div>
          <hr />
          <div className="flex justify-between">
            <h4 className="font-semibold">Shipping Fee:</h4>
            <h4>Free</h4>
          </div>
          <hr />
          <div className="flex justify-between">
            <h4 className="font-semibold">Total:</h4>
            <h4>${calculateSubTotal()}</h4>
          </div>
        </div>
        <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
          Check Out
        </button>
        <div className="mt-4">
          <h4 className="font-semibold">Enter your coupon code:</h4>
          <div className="flex mt-2">
            <input
              type="text"
              placeholder="Coupon code..."
              className="flex-grow p-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 ml-2">
              Submit
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CartItems;
