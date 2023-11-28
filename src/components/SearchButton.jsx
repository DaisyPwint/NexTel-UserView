import React from "react";
import { Button } from "antd";

const SearchButton = ({ onClick,className,children }) => {
  return (
    <Button
      onClick={onClick} className={className}
    >
      {children}
    </Button>
  );
};

export { SearchButton };
