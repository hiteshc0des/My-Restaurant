import React from "react";
import masala from "../utils/img/masala.jpg";
import Chhola from "../utils/img/chhola.jpg";
import paneer from "../utils/img/paneer.jpg";
import gujrati from "../utils/img/gujrati.jpeg";
import dosa from "../utils/img/dosa.jpg";
import idli from "../utils/img/idli.jpg";
import "./ImageGallery.css";
const ImageGallery = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center fs-1 mb-5 text-uppercase fw-bold">
        Image Gallery
      </h2>
      <div className="row">
        <div className="col-md-4 px-2">
          <div className="img-container my-3">
            <img
              src={masala}
              className="img-fluid"
              alt=""
              style={{ height: "277px" }}
            />
            <div className="caption">Masala</div>
          </div>
          <div className="img-container my-3">
            <img
              src={Chhola}
              className="img-fluid"
              alt=""
              style={{ height: "240px", width: "420px" }}
            />
            <div className="caption" style={{ color: "black" }}>
              Chole Bhature
            </div>
          </div>
        </div>
        <div className="col-md-4 px-2">
          <div className="img-container my-3">
            <img src={paneer} className="img-fluid" alt="" />
            <div className="caption">Panner </div>
          </div>
          <div className="img-container my-3">
            <img src={gujrati} className="img-fluid" alt="" />
            <div className="caption">Gujrati Thali </div>
          </div>
        </div>
        <div className="col-md-4 px-2">
          <div className="img-container my-3">
            <img src={dosa} className="img-fluid" alt="" />
            <div className="caption">Dosa </div>
          </div>
          <div className="img-container my-3">
            <img
              src={idli}
              className="img-fluid"
              alt=""
              style={{ height: "250px" }}
            />
            <div className="caption" style={{ color: "black" }}>
              Idli
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
