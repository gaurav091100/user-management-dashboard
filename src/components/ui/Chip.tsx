import React from "react";

export type ChipVariant =
  | "default"
  | "primary"
  | "success"
  | "danger"
  | "warning";

interface ChipProps {
  label: string;
  variant?: ChipVariant;
}

const Chip: React.FC<ChipProps> = ({
  label,
  variant = "default",
}) => {
  const variants: Record<ChipVariant, string> = {
    default: "bg-gray-200 text-gray-800",
    primary: "bg-blue-100 text-blue-700",
    success: "bg-teal-100 text-green-700",
    danger: "bg-red-100 text-red-700",
    warning: "bg-yellow-100 text-yellow-700",
  };

  return (
    <span
      className={`
        inline-block items-center
        px-3 py-1
        rounded-full
        text-xs lg:text-sm font-medium capitalize text-center
        ${variants[variant]}
      `}
    >
      {label}
    </span>
  );
};

export default Chip;