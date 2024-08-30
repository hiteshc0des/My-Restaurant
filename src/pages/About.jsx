import React from "react";
import "./About.css";
import AboutChef1 from "../utils/img/about-chef1.jpg";
import AboutChef2 from "../utils/img/about-chef2.jpg";
import ImageGallery from "../components/ImageGallery";
import Reviews from "../components/Reviews";
import chef1 from "../utils/img/chef1.jpg";
import chef2 from "../utils/img/chef2.jpg";
import chef3 from "../utils/img/chef3.jpg";
import chef4 from "../utils/img/chef4.png";

const About = () => {
  return (
    <div className="about-page">
      <header className="mt-5">
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <h1 className="text-light">About Us</h1>
        </div>
      </header>

      <div className="container my-5">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          dolores necessitatibus quaerat non, explicabo consectetur laudantium
          vel dicta consequatur eum quo aspernatur officia? Tempore doloribus
          enim quas nam aspernatur est nostrum sint facere iste nesciunt nemo
          explicabo, vitae aut impedit, voluptatem reiciendis corrupti similique
          laudantium! Quaerat itaque ipsum quo eaque?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
          necessitatibus recusandae ducimus saepe consequuntur velit dolorem
          similique assumenda, asperiores voluptatum vel modi minima omnis a
          quia quo molestiae. Incidunt cumque ea odit optio, iusto voluptas
          ratione vitae obcaecati temporibus fuga minima provident aut quasi
          autem expedita quia dolores at placeat perferendis. Nisi qui earum
          inventore soluta explicabo, labore ut ea nemo reprehenderit minus
          repellat, impedit atque vel debitis autem veritatis optio laboriosam
          officiis molestiae maxime repellendus beatae tempora sapiente! Quam!
        </p>

        <div className="row">
          <div className="col-lg-6">
            <img src={AboutChef1} className="img-fluid my-4" alt="" />
          </div>
          <div className="col-lg-6">
            <img src={AboutChef2} className="img-fluid my-4" alt="" />
          </div>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, esse
          nulla, debitis similique, ad nihil architecto maiores doloribus quis
          blanditiis distinctio. Praesentium, harum atque fuga nobis eius
          laboriosam totam consequuntur officia dolorem quo velit incidunt
          fugiat at maxime, molestias esse dignissimos accusantium enim debitis.
          Id et quidem sapiente adipisci dolor ipsa amet tempora porro atque
          perferendis. Libero odio, molestiae aliquam modi facere, veritatis,
          illo labore deserunt ducimus ipsam rem ipsum perspiciatis eveniet
          maiores excepturi. Architecto sit ducimus inventore officia porro vel?
          Accusantium recusandae nisi autem iste suscipit distinctio, libero
          rem.
        </p>
      </div>

      <div className="bg-dark text-light">
        <ImageGallery />
      </div>

      {/* team */}

      <div className="container-xxl pt-5 pb-3">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">
              Team Members
            </h5>
            <h1 className="mb-5">Our Master Chefs</h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <img className="img-fluid" src={chef1} alt="" />
                </div>
                <h5 className="mb-0">John Mike</h5>
                <small>Head Chef</small>
                <div className="d-flex justify-content-center mt-3">
                  <a className="btn btn-square btn-primary mx-1" href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square btn-primary mx-1" href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square btn-primary mx-1" href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <img className="img-fluid" src={chef2} alt="" />
                </div>
                <h5 className="mb-0">Mark</h5>
                <small>Chef</small>
                <div className="d-flex justify-content-center mt-3">
                  <a className="btn btn-square btn-primary mx-1" href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square btn-primary mx-1" href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square btn-primary mx-1" href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <img className="img-fluid" src={chef3} alt="" />
                </div>
                <h5 className="mb-0">Nike Burn</h5>
                <small>Chef</small>
                <div className="d-flex justify-content-center mt-3">
                  <a className="btn btn-square btn-primary mx-1" href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square btn-primary mx-1" href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square btn-primary mx-1" href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <img
                    className="img-fluid"
                    src={chef4}
                    alt=""
                    style={{ height: "215px" }}
                  />
                </div>
                <h5 className="mb-0">Anna Rose</h5>
                <small>Chef</small>
                <div className="d-flex justify-content-center mt-3">
                  <a className="btn btn-square btn-primary mx-1" href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square btn-primary mx-1" href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square btn-primary mx-1" href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />

      {/* reviews */}

      <div className="my-custom-margin">
        <Reviews />
      </div>
    </div>
  );
};

export default About;
