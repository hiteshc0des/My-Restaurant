import React from "react";

const MenuCard = ({ item }) => {
  return (
    <div className="container  ">
      <div className="row  " style={{ backgroundColor: "#fff" }}>
        {item &&
          item.length > 0 &&
          item.map((val) => (
            <div
              key={val.id}
              className="col-md-4 col-sm-6 card my-3 border-0"
              style={{
                backgroundColor: "#fff",
              }}
            >
              <div className="card-img-top ">
                <img src={val.img} alt="" className="img-fluid mx-3 h-200" />
              </div>
              <div className="card-body">
                <div className="card-title fw-bold fs-4">
                  {val.title} -- {val.price}
                </div>
                <div className="card-text">{val.desc}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MenuCard;
