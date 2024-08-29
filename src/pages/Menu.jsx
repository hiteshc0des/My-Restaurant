import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuData from "../components/MenuData";
import MenuCard from "../components/MenuCard";
import "./Menu.css";
import MenuButtons from "../components/MenuButtons";

const Menu = () => {
  const [item, setItems] = useState(MenuData);
  const menuItems = [...new Set(MenuData.map((val) => val.Category))];

  const filterItems = (cat) => {
    const newItems = MenuData.filter((newval) => newval.Category === cat);
    setItems(newItems);
  };

  return (
    <div className="menu-page">
      <header className="mt-5">
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <h1 className="text-light mt-10">
            Our
            <span style={{ color: "crimson" }}> Menu</span>
          </h1>
          <br />
        </div>
      </header>

      <MenuButtons
        menuItems={menuItems}
        filterItems={filterItems}
        setItems={setItems}
      />

      <MenuCard item={item} />
    </div>
  );
};

export default Menu;
