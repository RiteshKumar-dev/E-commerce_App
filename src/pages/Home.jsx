import React from "react";
import Hero from "../components/Hero";
import Popular from "../components/Popular";
import Offer from "../components/Offer";
import NewCollections from "../components/NewCollections";
import NewsLetter from "../components/NewsLetter";
import DiscountNavbar from "../components/DiscountNavbar";

const Home = () => {
  return (
    <>
      {/* <DiscountNavbar /> */}
      <Hero />
      <Popular />
      <Offer />
      <NewCollections />
      <NewsLetter />
    </>
  );
};

export default Home;
