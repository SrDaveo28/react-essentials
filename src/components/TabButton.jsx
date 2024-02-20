import React from "react";

const TabButton = ({ children }) => {
  function handleClick() {
    console.log("Holis");
  }
  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
};

export default TabButton;
