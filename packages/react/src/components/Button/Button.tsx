import React, { FC } from "react";
import { ButtonProps } from "./Button.types";
import classNames from "classnames/bind";

const Button: FC<ButtonProps> = ({
  children,
  className,
  href = "",
  type = "button",
  isLoading,
  disabled,
  isHide,
  loadingClassName = "",
  loadingComponent,
  disabledClassName = "",
  disabledComponent,
  ...props
}) => {
  const customStyle = {
    loadingClassName,
    disabledClassName,
  };

  const cx = classNames.bind(customStyle);
  const classButton = cx(className, {
    "btn-loading": isLoading,
    "btn-disabled": disabled,
    hidden: isHide,
    loadingClassName: isLoading,
    disabledClassName: disabled,
  });

  if (isLoading && loadingComponent) {
    children = loadingComponent;
  }

  if (disabled && disabledComponent) {
    children = disabledComponent;
  }

  if (href) {
    return (
      <a href={href} className={classButton} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classButton} {...props}>
      {children}
    </button>
  );
};

export default Button;
