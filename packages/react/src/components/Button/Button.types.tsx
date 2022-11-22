import React from "react";

type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
  disabled?: boolean;
  isHide?: boolean;
  loadingClassName?: string;
  loadingComponent?: React.ReactNode;
  disabledClassName?: string;
  disabledComponent?: React.ReactNode;
};

// export types
export { ButtonProps };
