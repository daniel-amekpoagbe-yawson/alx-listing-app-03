import React from "react";
import { ButtonProps } from "../../interfaces";

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
}) => {
  const base =
    "px-4 py-2 rounded-md font-medium transition duration-200 focus:outline-none";
  const styles =
    variant === "primary"
      ? "bg-indigo-600 hover:bg-indigo-700 text-white"
      : "bg-gray-200 hover:bg-gray-300 text-gray-800";

  return (
    <button onClick={onClick} className={`${base} ${styles}`}>
      {label}
    </button>
  );
};

export default Button;
