// components/ui/Pill.tsx
import React from "react";

interface PillProps {
  label: string;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-full bg-gray-200 hover:bg-blue-100 text-gray-800 text-sm font-medium whitespace-nowrap"
    >
      {label}
    </button>
  );
};

export default Pill;
