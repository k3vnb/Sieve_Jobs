import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import StaticInfoCards from './StaticInfoCards';

function TutorialStaticInfoCards(props){
  const page = {
    marginBottom: 65
  }
  return(
    <div style={page}>
      <style jsx>{`
          .card {
            width: 30%;
            padding: 2%;
            background-color: lightpink;
            margin: 1px;
            margin-top: 5vw;
            position: relative;
          }
          .card-container {
            display: flex;
          }
          .btn {
            position: absolute;
            bottom: 5px;
            right: 5px;
          }
          .header {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
      `}</style>
      <div className="header">
        <h2>Question Archetypes Tutorial</h2>
        <h4>Most interview questions can be broken down into one of the following archetypes</h4>
      </div>
      <div className="card-container">
        <div className="card">
          <h2>Your Work History</h2>
          <h3>Typical Questions:</h3>
          <ol id="aTypeList">
            <li>Tell me about yourself</li>
            <li>Tell me about your work history</li>
            <li>What career accomplishments are you most proud of?</li>
            <li>What's the biggest mistake you made in your career and what did you learn from it?</li>
            <li>Why do you have an employment gap?</li>
          </ol>
          <Link to='/tutorial/A'><button className="btn">Explore this topic!</button></Link>
        </div>
        <div className="card">
          <h2>Your Skills</h2>
          <h3>Typical Questions:</h3>
          <ol>
            <li>What experience do you have doing (a specific skill mentioned in job post)</li>
            <li>What is your biggest weakness?</li>
            <li>What is your biggest strength?</li>
            <li>Tell me about a problem you had in a previous job and how you solved it</li>
            <li>What issues do you forsee facing this position?</li>
          </ol>
          <Link to='/tutorial/B'><button className="btn">Explore this topic!</button></Link>
        </div>
        <div className="card">
          <h2>Our Company & Your Possible Fit Here</h2>
          <h3>Typical Questions:</h3>
          <ol>
            <li>Why are you interested in a job at our company?</li>
            <li>How did you find out about our company?</li>
            <li>What can you tell me about our company?</li>
            <li>Why should we hire you?</li>
          </ol>
          <Link to='/tutorial/C'><button className="btn">Explore this topic!</button></Link>
        </div>
      </div>
    </div>
  );
}

TutorialStaticInfoCards.propTypes = {
  questionList: PropTypes.object,
  infoCard: PropTypes.object
};

export default TutorialStaticInfoCards;
