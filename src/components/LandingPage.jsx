import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage(){
  return (
    <div>
      <style jsx>{`
        .go-to-divs {
          height: 20vh;
          width: 20vh;
          background-color: lightpink;
          margin: 5vw;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 1px 1px 1px black;
        }
        .container {
          display: flex;
          margin: 5vw;
        }      
      `}</style>
      <div className="container">
        <Link to="/flashcards"><div className="go-to-divs">Go to Flashcards</div></Link>
        <Link to="/tutorial"><div className="go-to-divs">Go to Tutorial</div></Link>
      </div>
    </div>
  );
}

export default LandingPage;
