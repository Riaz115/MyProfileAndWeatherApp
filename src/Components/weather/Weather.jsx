import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import "./Weather.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function Weather() {
  // this is for the states
  const [cityName, setCityName] = useState("Enter you city name");
  const [cityVal, setCityVal] = useState("");
  const [temp, setTemp] = useState("0");
  const [country, setCountry] = useState("");

  // this is for the date manangment
  let myDate = new Date();
  let myDay = myDate.getDay();
  let myHour = myDate.getHours();
  let myMinutes = myDate.getMinutes();
  let myMonth = myDate.getMonth();
  let date = myDate.getDate();
  let periods = "AM";

  // this is  for the hours and periods
  if (myHour >= 12) {
    periods = "PM";
    myHour = myHour - 12;
  } else if (myHour < 10) {
    myHour = "0" + myHour;
  } else if (myMinutes < 10) {
    myMinutes = "0" + myMinutes;
  } else {
    periods = "AM";
  }

  // this is function for the get day
  const forDay = () => {
    let weekday = [];
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    return weekday[myDay];
  };
  let day = forDay();

  // this is for get the month
  const forMonth = () => {
    let months = [
      "JAN",
      "FAB",
      "MAR",
      "APR",
      "MAY",
      "JUNE",
      "JULY",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];

    return months[myMonth];
  };
  let month = forMonth();

  //this is for input onChange function
  const forInput = (e) => {
    setCityVal(e.target.value);
  };

  //this is function for the fetching api
  let myApi = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=7ff24ec5e62c08f6684e5c3ec4ed03ca`;
  const forApi = async () => {
    try {
      if (cityVal === "") {
        setCityName("city name is required");
        setTemp("0");
      } else {
        let response = await axios.get(myApi);
        setTemp(response.data.main.temp);
        setCountry(response.data.sys.country);
      }
    } catch (error) {
      setCityName("please enter valid city name");
      setCountry("");
      setTemp("0");
    }
  };

  //this is  for the HandleButton
  const forHandleButton = (e) => {
    e.preventDefault();
    setCityName(cityVal);
    forApi();
  };

  return (
    <>
      <Container className="text-center weatherApp">
        <Row className=" d-flex justify-content-center align-items-center m-0">
          <Col>
            <div className="for-form">
              <Form>
                <input
                  type="text"
                  className="for-input"
                  placeholder="Enter Your City Name"
                  onChange={forInput}
                />
                <button className="btn for-btn" onClick={forHandleButton}>
                  Search
                </button>
              </Form>
            </div>
            <div className="for-box mt-4 ">
              <div className="for-date ">
                <div className="only-date">
                  <p className="my-day">{day}</p>
                  <p className="for-month">
                    {date},{month}
                  </p>
                  <p className="time">
                    {myHour}:{myMinutes} {periods}
                  </p>
                </div>
              </div>
              <h4 className="cityName text-capitalize">
                {cityName},{country}
              </h4>
              <div className="for-temp">
                <h1 className="temp">
                  {temp} <sup>0</sup> c
                </h1>
                <p className="for-icon">
                  <FontAwesomeIcon icon={faCloud} />
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

// export default Weather;
