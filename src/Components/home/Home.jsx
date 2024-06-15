import React from "react";
import "./Home.css";
import { Col, Container, Row } from "react-bootstrap";
import homeImage from "../../assests/weather3.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* this is home section */}
      <Container className="wrapper home py-5 mb-5 ">
        <Row className="m-0 d-flex jutify-content-space-between align-items-center">
          {/* this is left side */}
          <Col md={6} className="for-col">
            <div className="left-sdie mb-5 mb-md-0">
              <p className="for-para text-capitalize ">
                welcome to the weather app
              </p>
              <h1 className="for-text text-capitalize pe-1">
                get the latest <span className="text-success">weather</span>{" "}
                info of your city
              </h1>
              <Link to="/weather">
                <button className="btn for-btn text-capitalize">
                  check weather
                </button>
              </Link>
            </div>
          </Col>
          {/* this is right side */}
          <Col md={6} className="for-col">
            <div className="right-sdie">
              <div className="for-image">
                <img src={homeImage} alt="weather-img" className="img-fluid" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
