import React from "react";
import { MdOutlineLocalOffer, MdStar } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

// Example images and testimonials
const images = [
  "https://media.istockphoto.com/id/1452145403/photo/woman-doing-shopping-at-market.jpg?s=612x612&w=0&k=20&c=f9fYhTGxMXVXFQHPWCj6v5hGayi6cOT57aUcfpj4P8Y=",
  "https://previews.123rf.com/images/lizardfilms/lizardfilms1712/lizardfilms171201303/91872877-person-shopping-at-the-grocery-shop-food-concept.jpg",
  "https://previews.123rf.com/images/lizardfilms/lizardfilms1712/lizardfilms171201326/91873550-people-shopping-at-the-grocery-shop-food-concept.jpg",
];

const testimonials = [
  {
    name: "John Doe",
    text: "Great shopping experience! Highly recommend Apna_Shop for all your needs.",
    image:
      "https://media.istockphoto.com/id/1452145403/photo/woman-doing-shopping-at-market.jpg?s=612x612&w=0&k=20&c=f9fYhTGxMXVXFQHPWCj6v5hGayi6cOT57aUcfpj4P8Y=",
  },
  {
    name: "Jane Smith",
    text: "Amazing products and fantastic customer service. Love shopping here!",
    image:
      "https://previews.123rf.com/images/lizardfilms/lizardfilms1712/lizardfilms171201303/91872877-person-shopping-at-the-grocery-shop-food-concept.jpg",
  },
  {
    name: "Alia Neo",
    text: "Amazing products and fantastic customer service. Love shopping here!",
    image:
      "https://previews.123rf.com/images/lizardfilms/lizardfilms1712/lizardfilms171201326/91873550-people-shopping-at-the-grocery-shop-food-concept.jpg",
  },
];

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <motion.section
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 4 }}
      className="bg-cover bg-center py-16 px-6 mt-20 bg-gradient-to-b from-purple-100 via-pink-100 to-blue-200"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0 space-y-6">
          <h1 className="text-2xl lg:text-4xl font-bold">
            Welcome To Apna_Shop
          </h1>
          <p className="text-lg mb-8">
            Welcome to Apna_Shop, your one-stop destination for all your
            shopping needs! Explore our wide range of products, from the latest
            fashion trends to essential electronics. Enjoy seamless online
            shopping with our user-friendly interface, secure payment options,
            and...
          </p>

          <div className="flex flex-col lg:flex-row items-center lg:items-start mb-6">
            <div className="flex text-yellow-300 mb-2 lg:mb-0">
              <MdStar className="h-6 w-6" />
              <MdStar className="h-6 w-6" />
              <MdStar className="h-6 w-6" />
              <MdStar className="h-6 w-6" />
              <MdStar className="h-6 w-6" />
            </div>
            <div className="lg:ml-4 text-gray-500">
              176k
              <span className="font-semibold text-gray-500 ml-2">
                Excellent Reviews
              </span>
            </div>
          </div>
          <div className="flex justify-center lg:justify-start flex-wrap gap-4">
            <NavLink
              to="/mens"
              className="text-lg font-medium px-6 py-3 rounded-full bg-white text-pink-500 shadow-lg hover:shadow-2xl transition duration-300"
            >
              Shop Now
            </NavLink>
            <NavLink
              to="/womens"
              className="flex items-center text-lg font-medium px-6 py-3 rounded-full bg-pink-500 text-white shadow-lg hover:shadow-2xl transition duration-300"
            >
              <MdOutlineLocalOffer className="mr-2 h-6 w-6" />
              Offer
            </NavLink>
          </div>
        </div>
        <div className="lg:w-3/4 flex justify-center lg:justify-end">
          <div className="w-80 lg:w-full max-w-md">
            <Slider {...settings}>
              {images.map((img, index) => (
                <div key={index}>
                  <img
                    src={img}
                    alt={`Slide ${index}`}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              ))}
            </Slider>
            <Slider {...settings} className="mt-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-4 bg-transparent rounded-lg"
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full mb-4"
                  />
                  <p className="text-lg text-gray-700 mb-2">
                    "{testimonial.text}"
                  </p>
                  <span className="text-sm text-gray-500">
                    {testimonial.name}
                  </span>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
