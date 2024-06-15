import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import myImage from "../../assests/myImage.jpg";
import "./About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      {/* this is home section */}
      <Container className="wrapper home py-5 mb-5 ">
        <Row className="m-0 for-row">
          {/* this is right side */}
          <Col lg={6} className="for-col">
            <div className="right-sdie">
              <div className="for-image">
                <img src={myImage} alt="myImage" className="img-fluid" />
              </div>
            </div>
          </Col>
          {/* this is left side */}
          <Col lg={6} className="for-col">
            <div className="left-sdie mt-lg-0 mt-5">
              <p className="for-para text-capitalize">welcome to my profile </p>
              <h1 className="for-text text-capitalize">
                i am{" "}
                <span className=" text-success">mern stack developer </span> and
                python developer
              </h1>
              <Link
                to="https://react-my-portfolio-full-stack-website.vercel.app/"
                target="/blank"
              >
                <button className="btn for-btn text-capitalize">
                  about me{" "}
                </button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
