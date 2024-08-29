import React from "react";
import {
  Card,
  CardBody,
  CardText,
  CardFooter,
  CardTitle,
} from "react-bootstrap";
import { Image } from "react-bootstrap";
import "./Reviews.css";
import review_1 from "../utils/img/review_1.png";
import review_2 from "../utils/img/review_2.png";
import review_3 from "../utils/img/review_3.png";
import review_4 from "../utils/img/review_4.png";

const reviewsData = [
  {
    name: "John Mike",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iste culpa perspiciatis. Magnam, explicabo cumque.",
    image: review_1,
  },
  {
    name: "Maria Cruz",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, mollitia?",
    image: review_2,
  },
  {
    name: "Anna Gold",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, mollitia?",
    image: review_3,
  },
  {
    name: "Nike Burn",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, mollitia?",
    image: review_4,
  },
];

const Reviews = () => {
  return (
    <div className="reviews-section container">
      <h2 className="text-center mb-5 text-uppercase fw-bold fs-1">Reviews</h2>
      <div className="row g-4">
        {reviewsData.map((review, index) => (
          <div className="col-lg-6" key={index}>
            <Card className="h-100 shadow">
              <CardBody>
                <div className="p-4">
                  <CardText>{review.text}</CardText>
                </div>
              </CardBody>
              <CardFooter className="d-flex align-items-center">
                <Image
                  src={review.image}
                  alt={`${review.name}'s profile`}
                  className="Image-fluid rounded-circle mx-3 shadow"
                  // style={{ width: "50px", height: "50px" }}
                />
                <CardTitle className="text-success">{review.name}</CardTitle>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
