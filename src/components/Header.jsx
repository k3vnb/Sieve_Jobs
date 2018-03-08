import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../assets/Sieve_Jobs.png';

function Header() {
  const header = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottom: '1px solid black',
    position: 'sticky',
    top: '-125px',
    zIndex: '2'
  }
  return(
    <div style={header}>
      <link href="https://fonts.googleapis.com/css?family=Didact+Gothic" rel="stylesheet" />
      <style jsx global>{`

          h1 {
            text-align: center;
            }
          a {
            text-decoration: none;
          }
          .links {
            width: 100%;
            font-family: 'Didact Gothic', sans-serif;
            font-weight: 100;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            margin-right: 4%;
          }
          .header {
            display: flex;
          }
        }`}</style>
      <div className="header">
        <Link to="/"><img src={logo} alt='logo'/></Link>
      </div>
      <div className="links">
        <div><Link to="/">Home</Link></div>
         <div><Link to="/flashcards">Flashcards</Link></div>  <div><Link to="/tutorial">Tutorial</Link></div>  <div><Link to="/edit">Add/Edit</Link></div>
      </div>
    </div>
  );
}

export default Header;
