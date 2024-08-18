import React, { useState } from "react";

const ProductDescription = () => {
  const [activeTab, setActiveTab] = useState("description");

  const renderContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <p>
            This is the product description content Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Quas repellat animi harum. Inventore
            ad et neque, voluptatibus, perferendis autem quod quaerat totam
            temporibus labore repudiandae aperiam ipsam numquam impedit eos?
          </p>
        );
      case "careGuide":
        return (
          <p>
            This is the care guide content. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Est quisquam itaque, minima amet
            labore voluptatum impedit similique quidem repellat non, suscipit
            dolore modi natus! Harum veniam incidunt nemo amet necessitatibus?
          </p>
        );
      case "sizeGuide":
        return (
          <p>
            This is the size guide content. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Delectus, voluptas maxime harum beatae
            sapiente facilis hic, eius nostrum odit id cupiditate quam aperiam,
            perferendis expedita at quas sunt non? Minus?
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="flex justify-center space-x-4 mb-6">
        <button
          className={`px-4 py-2 font-semibold border-b-2 truncate ${
            activeTab === "description"
              ? "border-blue-500"
              : "border-transparent"
          }`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={`px-4 py-2 font-semibold border-b-2 truncate ${
            activeTab === "careGuide" ? "border-blue-500" : "border-transparent"
          }`}
          onClick={() => setActiveTab("careGuide")}
        >
          Care Guide
        </button>
        <button
          className={`px-4 py-2 font-semibold border-b-2 truncate ${
            activeTab === "sizeGuide" ? "border-blue-500" : "border-transparent"
          }`}
          onClick={() => setActiveTab("sizeGuide")}
        >
          Size Guide
        </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">{renderContent()}</div>
    </div>
  );
};

export default ProductDescription;
