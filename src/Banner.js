import React from 'react';
// import fried_chicken from "./banner images/fried_chicken.jpeg";
// import pasta from "./banner images/pasta.jpeg";
import plaintains from "./banner images/plaintains.jpeg";
import shrimpRice from "./banner images/shrimp-rice.jpeg";
// import shrimp from "./banner images/shrimp.jpeg";
// import thukpa from "./banner images/thukpa.jpeg";
import wine from "./banner images/wine.jpg";
import salmonWine from "./banner images/salmon_and_wine.avif";

function Banner() {
  return (
      <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={wine} className="d-block w-100" alt="two glasses of red wine " />
              </div>
              <div className="carousel-item">
                <img src={plaintains} className="d-block w-100" alt="fried plaintains with pickles, chopped cabbage and chopped tomatoes" />
              </div>
              <div className="carousel-item">
                <img src={shrimpRice}className="d-block w-100" alt="A plate of steamed rice with shrimps in juloof style." />
                {/* <div className="carousel-text d-none d-md-block">
                  <h5>Green Apple welcomes you.</h5>
                </div> */}
              </div>
              <div className="carousel-item">
                <img src={salmonWine} className="d-block w-100" alt="a waiter ready to serve the small salmon pieces and two glasses of white wine" />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
  )
}

export default Banner
