import React from "react";
import appleSalad from "./Sign-dishes/apple-salad.jpg";
import fruitSoup from "./Sign-dishes/fruit-soup.jpg";
import pasta from "./Sign-dishes/pasta.avif";

function Menu() {
  return (
    <div className="container" id="menuContainer">
      <div className="row">
        <div className="carousel-container" id="carouselMenu">
          <div className="carousel-container">
            <h1 id="featuredDishh1">Featured Dish</h1>
            <div
              id="carouselExampleDark"
              className="carousel carousel-dark slide"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                  <img src={appleSalad} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Autumnal Apple Walnut Salad</h5>
                    <p>
                    A refreshing blend of crisp apples, tangy cranberries, creamy goat cheese, and toasted walnuts, tossed in a light and zesty vinaigrette. Perfect for a healthy and delicious fall meal
                    </p>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img src={fruitSoup} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Warming Winter Spice Apple Cider</h5>
                    <p>
                    A cozy and comforting blend of apple cider, orange slices, cranberries, cinnamon sticks, cloves, and ginger, simmered to perfection. Perfect for sipping on a chilly day
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={pasta} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Rustic Italian Feast</h5>
                    <p>
                    A mouthwatering spread of classic Italian dishes, featuring hearty ravioli in a rich tomato sauce, a vibrant green salad, and a creamy risotto topped with a poached egg. Perfect for a satisfying and flavorful meal
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
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
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
