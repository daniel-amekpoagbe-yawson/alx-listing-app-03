import React from "react";
import { CardProps } from "../../interfaces";

const Card: React.FC<CardProps> = ({ image, title, description, price }) => {
  return (
    <div className="border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-200 bg-white">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
        <p className="text-indigo-600 font-semibold mt-2">${price}/night</p>
      </div>
    </div>
  );
};

export default Card;
