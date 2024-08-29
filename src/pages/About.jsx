import React from "react";
import "./About.css";
import AboutChef1 from "../utils/img/about-chef1.jpg";
import AboutChef2 from "../utils/img/about-chef2.jpg";
import ImageGallery from "../components/ImageGallery";
import Reviews from "../components/Reviews";
import chef1 from "../utils/img/chef1.png";
import chef2 from "../utils/img/chef2.png";
import chef3 from "../utils/img/chef3.jpg";
import chef4 from "../utils/img/chef4.jpg";

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
      <div className="team">
        <h1>
          Our <span>Team</span>
        </h1>
        <div className="team_box">
          <div className="profile">
            <img src={chef1} alt="Chef 1" />
            <div className="info">
              <h2 className="name">Chef</h2>
              <p className="bio">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="team_icon">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>

          <div className="profile">
            <img src={chef2} alt="Chef 2" />
            <div className="info">
              <h2 className="name">Chef</h2>
              <p className="bio">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="team_icon">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>

          <div className="profile">
            <img src={chef3} alt="Chef 3" />
            <div className="info">
              <h2 className="name">Chef</h2>
              <p className="bio">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="team_icon">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>

          <div className="profile">
            <img src={chef4} alt="Chef 4" />
            <div className="info">
              <h2 className="name">Chef</h2>
              <p className="bio">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="team_icon">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* reviews */}
      <div className="my-5">
        <Reviews />
      </div>
    </div>
  );
};

export default About;
