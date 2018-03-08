import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage(){
  return (
    <div>
      <link href="https://fonts.googleapis.com/css?family=Comfortaa|Didact+Gothic|Ropa+Sans|Rubik+Mono+One" rel="stylesheet" />
      <style jsx>{`
        .go-to-divs {
          height: 20vh;
          width: 20vw;
          padding: 3%;
          background-color: #ff0d7da6;
          margin: 4vw;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          box-shadow: .5px 3px 4px #00000063;
          font-family: 'Comfortaa', cursive;
          color: white;
          transition: transform .3s, box-shadow .3s;
        }
        .go-to-divs:hover {
          transform: scale(1.1);
          box-shadow: 2px 2px 2px #000000b8;
        }
        .container {
          display: flex;
          margin: 5vw;
        }
        .intro {
          text-align: center;
          font-family: 'Didact Gothic', sans-serif;
        }
        .intro h2 {
          font-size: 3em;
          color: #1fb5a9;
        }
      `}</style>
    <div className="landingpage">
      <div className="intro">
      <h2>WELCOME TO SIEVE JOBS</h2>
      <p>Your Job Interview Preparation Assitant</p>
      </div>
      <div className="container">
        <Link to="/flashcards"><div className="go-to-divs">Go to Flashcards</div></Link>
        <Link to="/tutorial"><div className="go-to-divs">Go to Tutorial</div></Link>
        <Link to="/edit"><div className="go-to-divs">Answer Interview Questions</div></Link>
      </div>
    </div>
  </div>
  );
}

export default LandingPage;
