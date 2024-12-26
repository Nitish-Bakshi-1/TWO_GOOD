import React from "react";

const Element = ({ imgLink }) => {
  return (
    <div className="h-[100%] w-[31%] bg-red-400 overflow-hidden">
      <img src={imgLink} alt="" />
    </div>
  );
};

export default Element;
