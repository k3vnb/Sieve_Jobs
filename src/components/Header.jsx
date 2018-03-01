import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return(
    <div>
      <style jsx>{`
          h1 {
            text-align: center;
            font-family: 'Saira Condensed', sans-serif;
            }
          .links {
            display: flex;
            justify-content: space-around;
          }
        }`}</style>
      <h1>Sieve Jobs</h1>
      <div className="links">
        <Link to="/">Home</Link> | <Link to="/flashcards">Flashcards</Link> | <Link to="/tutorial">Tutorial</Link> | <Link to="/edit">Add/Edit</Link>
      </div>
    </div>
  );
}

export default Header;
