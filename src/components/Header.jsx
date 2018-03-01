import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../assets/Sieve_Jobs.png';

function Header() {
  return(
    <div>
      <style jsx>{`
          h1 {
            text-align: center;
            font-family: 'Roboto Slab', serif;
            font-weight: 100;
            }
          .links {
            display: flex;
            justify-content: space-around;
          }
          .header {
            display: flex;
          }
        }`}</style>
      <div className="header">
        <img src={logo} alt='logo'/>
        <h1>SIEVE JOBS</h1>
      </div>
      <div className="links">
        <Link to="/">Home</Link> | <Link to="/flashcards">Flashcards</Link> | <Link to="/tutorial">Tutorial</Link> | <Link to="/edit">Add/Edit</Link>
      </div>
    </div>
  );
}

export default Header;
