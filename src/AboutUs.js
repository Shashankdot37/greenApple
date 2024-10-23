import React from "react";
import BannerImg from "./banner images/Mission_Banner.jpg";
import HistoryImg from "./banner images/history.jpg";

function AboutUs() {
  return (
    <>
      <div>
        <h1>About Us</h1>
      </div>
      <div className="banner-section">
        <div className="card bg-dark text-white">
          <img
            src={BannerImg}
            className="card-img"
            alt="Mission Statement with backgroung image of Nyatapola Temple"
          />
          <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
            <h1 className="card-title">Our Mission</h1>
            <p className="card-text" id="missionText">
              To provide a culinary journey that celebrates the rich flavors of
              Nepal, using sustainable practices and exceptional service to
              create memorable dining experiences.
            </p>
          </div>
        </div>
      </div>

      {/* ------------------ */}

      <div id="history">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <article>
                <h2>
                  <u>History</u>
                </h2>
                <p>
                  Founded in 2004, Green Apple emerged from a desire to deliver
                  the experience of Nepal through taste. Inspired by the vibrant
                  culture and diverse flavors of the Himalayas, our founders
                  envisioned a culinary haven where locals and visitors could
                  savor the true essence of Nepalese gastronomy
                </p>
                <p>
                  With a commitment to preserving traditional cooking methods
                  and using only the finest local ingredients, Green Apple has
                  become a beloved destination for those seeking an
                  unforgettable dining experience.
                </p>
              </article>
            </div>
            <div className="col-md-4">
              <img
                src={HistoryImg}
                alt="Some people, estimated 10, sitting at a table on a rooftop restaurant of Bhakapur on the evening."
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------ */}
      <div id="OurValues" class="container">
        <h2><u>Our Values</u></h2>
        <div class="row">
          <div class="col-md-4">
            <div class="card mb-4 h100">
              <div class="card-body">
                <h5 class="card-title">Sustainability</h5>
                <p class="card-text">
                  We are committed to sourcing local, organic ingredients and
                  minimizing our environmental impact.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4 h100">
              <div class="card-body">
                <h5 class="card-title">Quality</h5>
                <p class="card-text">
                  Every dish is prepared with the utmost care and attention to
                  detail.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4 h100">
              <div class="card-body">
                <h5 class="card-title">Customer Service</h5>
                <p class="card-text">
                  We believe that our guests are our top priority. We strive to
                  create a welcoming and hospitable atmosphere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
