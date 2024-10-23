import React from 'react';
// import './NavBar';
import { useNavigate } from 'react-router-dom';
import './App';

function IntroHome() {

  const navigate = useNavigate();

  const handleLearnMore = () =>
  {
    navigate('/about-us');
  }
  
  return (
    <div id="MainIntro">
      <h1>Green Apple</h1>
      <p>
      Green Apple is a haven of culinary delight nestled amidst the vibrant tapestry of Bhaktapur. Our restaurant offers a harmonious blend of fine dining elegance and casual charm, inviting you to embark on a gastronomic journey that transcends the ordinary. Inspired by the rich heritage of Nepal, we meticulously curate a menu that showcases the finest local ingredients and innovative culinary techniques. Whether you're seeking a romantic dinner or a lively gathering, Green Apple provides an unforgettable experience that will leave you longing to return.
      </p>
      <button id="intro-learnMore" onClick={handleLearnMore}>learn more</button>
    </div>
  )
}

export default IntroHome
