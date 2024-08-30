import React from "react";
import MenuData from "./MenuData";
// import "./MenuButton.css";

const MenuButtons = ({ menuItems, filterItems, setItems }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center mb-5 mt-5">
      <button
        className="d-flex flex-wrap justify-content-center mb-2 mt-2 "
        onClick={() => setItems(MenuData)}
        style={{
          gap: "1rem",
          padding: "0.3rem 0.8rem",
          flexDirection: "column",
          width: "93%",
          alignItems: "center",
        }}
      >
        All
      </button>
      {menuItems.map((val) => (
        <button
          className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold btn-sm"
          onClick={() => filterItems(val)}
          style={{
            gap: "1rem",
            padding: "0.3rem 0.8rem",
            flexDirection: "column",
            width: "100%",
            margin: "2px",
          }}
        >
          {val}
        </button>
      ))}
    </div>
  );
};

export default MenuButtons;
