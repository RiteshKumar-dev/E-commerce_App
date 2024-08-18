import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import ProductHd from "../components/ProductHd";
import ProductDisplay from "../components/ProductDisplay";
import ProductDiscription from "../components/ProductDiscription";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { all_products } = useContext(ShopContext); // You can still use this context if needed
  const { ProductId } = useParams();
  // const [product, setProduct] = useState(null);

  // useEffect(() => {
  //   const storedProducts = localStorage.getItem("products");
  //   if (storedProducts) {
  //     const products = JSON.parse(storedProducts);
  //     const foundProduct = products.find((e) => e.asin === ProductId);
  //     setProduct(foundProduct);
  //   }
  // }, [ProductId]);

  useEffect(() => {
    // console.log("All Products:", all_products);
    // console.log("Product ID:", ProductId);
  }, [all_products, ProductId]);

  const product = all_products.find((e) => e.id === Number(ProductId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <section>
      <div>
        <ProductHd product={product} />
        <ProductDisplay product={product} />
        <ProductDiscription product={product} />
        <RelatedProducts product={product} />
      </div>
    </section>
  );
};

export default Product;
