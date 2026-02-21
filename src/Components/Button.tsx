import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
}) => {
  const baseStyles =
    "font-semibold rounded-lg uppercase transition-all duration-300 ease-in-out";

  const variantStyles = {
    primary:
      "bg-blue-600 text-white hover:bg-black cursor-pointer",
    secondary:
      "bg-black text-white ",
    outline:
      "border-2 border-gray-900 text-gray-900 hover:bg-black hover:text-white",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed hover:bg-inherit hover:text-inherit"
    : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;