import React from "react";

// eslint-disable-next-line react/prop-types
const InfoBlock = ({ children, className, title }) => {
  return (
    <div className={`info__block ${className}`}>
      <h3 className={"info__block__title"}>{title}</h3>
      {children}
    </div>
  );
};

export default InfoBlock;
