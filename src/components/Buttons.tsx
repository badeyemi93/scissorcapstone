import React, { ReactNode, MouseEvent, FormEvent } from "react";
import "../components/Button.css";

// Create a type alias for the props
type ButtonProps = {
  className: string;
  onclick?: ((event: MouseEvent) => void) | ((event: FormEvent) => void);
  children: ReactNode;
};

const Button: React.FC<ButtonProps> = ({ className, onclick, children }) => {
  return (
    <button onClick={onclick} className={`btn ${className}`}>
      {children}
    </button>
  );
};

export default Button;

