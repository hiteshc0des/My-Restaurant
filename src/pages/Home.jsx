import React from "react";
import ReactPlayer from "react-player";
import MenuBtn from "../components/MenuBtn";
import "./Home.css";
import Food_Plate from "../utils/img/Food_Plate.png";
import { Link } from "react-router-dom";
import ImageGallery from "../components/ImageGallery";
import ContactInfo from "../components/ContactInfo";
import video from "../utils/img/vid.mp4";

const Home = () => {
  return (
    <div className="home-page">
      <header className="h-100 min-vh-100 d-flex align-items-center text-light shadow">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 d-flex d-sm-block flex-column align-items-center">
              <h1 className="mb-2 text-custom-color fw-bold text-center text-sm-start">
                Welcome
              </h1>
              <h2 className="mb-0 text-custom-color fw-bold">
                Discover the authentic <br />
                taste of India
              </h2>
              <br />
              <MenuBtn />
            </div>
          </div>
        </div>
      </header>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center d-none d-lg-flex">
            <img src={Food_Plate} style={{ width: "900px" }} alt="about img" />
          </div>
          <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
            <h2 className="fs-1 mb-5 text-uppercase fw-bold">About Us</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Provident voluptate aut dolore ullam quasi numquam quod molestias
              cum officiis perspiciatis?
            </p>
            <p className="mb-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab magni
              animi tenetur eaque vel accusamus placeat quaerat ad. Similique
              quaerat qui doloribus assumenda deserunt tenetur quas suscipit
              officiis quod sequi?
            </p>
            <Link to="/about">
              <button
                type="button"
                className="btn btn-outline-success btn-lg  custom-hover-btn"
              >
                More About Us
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="menu-section py-5 text-light shadow">
        <div className="container d-flex flex-column align-items-center">
          <h2 className="fs-1 mb-5 text-uppercase fw-bold">Our Favorites</h2>
          <div className="row mb-5 w-100">
            <div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0">
              <h3 className="fs-2 mb-5">
                <u>Food</u>
              </h3>
              <ul className="px-0">
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2">Poha </p>
                  <p className="fs-3 mx-2 text-success fw-nold">Rs.120</p>
                </li>
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2">Channa Kulcha</p>
                  <p className="fs-3 mx-2 text-success fw-nold">Rs.60</p>
                </li>
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2">Malai Kofta </p>
                  <p className="fs-3 mx-2 text-success fw-nold">Rs.150</p>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0">
              <h3 className="fs-2 mb-5">
                <u>Drinks</u>
              </h3>
              <ul className="px-0">
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2">Butter Scotch</p>
                  <p className="fs-3 mx-2 text-success fw-nold">Rs.80</p>
                </li>
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2">Espresso Coffee</p>
                  <p className="fs-3 mx-2 text-success fw-nold">Rs.80</p>
                </li>
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2">Spirits</p>
                  <p className="fs-3 mx-2 text-success fw-nold">Rs.110</p>
                </li>
              </ul>
            </div>
          </div>
          <MenuBtn />
        </div>
      </div>

      <ImageGallery />

      <div className="bg-dark text-light py-5 shadow">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0">
              <ContactInfo />
              <div>
                <Link to="/contact">
                  <button
                    type="button"
                    className="btn btn-success btn-lg custom-hover-btn"
                  >
                    Contact us
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <ReactPlayer
                url={video}
                width="100%"
                height="400px"
                playing
                loop
                muted
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
