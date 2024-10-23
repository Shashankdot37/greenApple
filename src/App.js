import NavBar from "./NavBar";
import Banner from "./Banner";
import IntroHome from "./IntroHome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import Location from "./Location";
import AboutUs from "./AboutUs";
import { useLocation } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div id="navBar">
          <NavBar />
          <Content />
        </div>
        <Routes>
          <Route path="/" element={null} />
          <Route path="/location" element={<Location />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
    </Router>
  );
}

function Content() {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" && (
        <>
          <div id="banner">
            <Banner />
          </div>
          <div id="intro">
            <IntroHome />
          </div>
          <div id="featuredMenu">
            <Menu />
          </div>
        </>
      )}
    </>
  );
}

export default App;
