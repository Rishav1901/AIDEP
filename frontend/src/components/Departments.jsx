import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Departments = () => {

  const redirectToURL = (url) => {
    // Perform redirection here
    window.open(url, "_blank");
  };
  const departmentsArray = [
    {
      name: "Diabetes Prediction",
      imageUrl: "https://i.ibb.co/6mwf9PB/image.png",
      ai_url:"https://disease-app-gemini.streamlit.app/"
    },
    {
      name: "OrthHeart Disease Predictionopedics",
      imageUrl: "https://i.ibb.co/SNwv412/image.png",
      ai_url:"https://disease-app-gemini.streamlit.app/"
    },
    {
      name: "Parkinson's Prediction ",
      imageUrl: "https://i.ibb.co/3kkmCqW/image.png",
      ai_url:"https://disease-app-gemini.streamlit.app/"
    },
    {
      name: "Neurology",
      imageUrl: "/departments/neuro.jpg",
      ai_url:"https://disease-app-gemini.streamlit.app/"
    },
    {
      name: "Oncology",
      imageUrl: "/departments/onco.jpg",
      ai_url:"https://disease-app-gemini.streamlit.app/"
    },
    {
      name: "Radiology",
      imageUrl: "/departments/radio.jpg",
      ai_url:"https://disease-app-gemini.streamlit.app/"
    },
    {
      name: "Physical Therapy",
      imageUrl: "/departments/therapy.jpg",
      ai_url:"https://disease-app-gemini.streamlit.app/"
    },
    {
      name: "Dermatology",
      imageUrl: "/departments/derma.jpg",
      ai_url:"https://disease-app-gemini.streamlit.app/"
    },
    {
      name: "ENT",
      imageUrl: "/departments/ent.jpg",
      ai_url:"https://disease-app-gemini.streamlit.app/"
    },
  ];

  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <div className="container departments">
        <h2>Departments</h2>
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={[
            // "superLargeDesktop",
            // "desktop",
            "tablet",
            "mobile",
          ]}
        >
          {departmentsArray.map((depart, index) => {
            return (
              <div key={index} className="card"  onClick={() => redirectToURL(depart.ai_url)}>
              <div className="depart-name">{depart.name}</div>
              <img src={depart.imageUrl} alt="Department" />
            </div>

            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Departments;
