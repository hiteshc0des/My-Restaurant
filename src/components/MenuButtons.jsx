import React from "react";
import MenuData from "./MenuData";

const MenuButtons = ({ menuItems, filterItems, setItems }) => {
  return (
    <div className="d-flex justify-content-center mb-5 mt-5">
      {menuItems.map((val) => (
        <button
          className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
          onClick={() => filterItems(val)}
        >
          {val}
        </button>
      ))}
      <button
        className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
        onClick={() => setItems(MenuData)}
      >
        All
      </button>
    </div>
  );
};

export default MenuButtons;
