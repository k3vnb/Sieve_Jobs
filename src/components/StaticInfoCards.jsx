import React from 'react';
import PropTypes from 'prop-types';


function StaticInfoCards(props){
  let cardA = null;
  let cardB = null;
  let cardC = null;
  let cardAArr = [];
  let cardBArr = [];
  let cardCArr = [];

    if (props.type === 'a'){
      console.log(props.questionId);
      cardA = <li>{props.question}</li>
    }




  // if (props.type === 'b'){
  //   cardB = <div className="card"><ul>
  //     <li>{props.question}</li>
  //   </ul></div>
  // }
  //
  // if (props.type === 'c'){
  //   cardC = <div className="card"><ul>
  //     <li>{props.question}</li>
  //   </ul></div>
  // }
    return (
      <div className="cardContainer">
        <style jsx>{`
            .cardContainer {
              display: flex;
            }
            .card {
              width: 33%;
              border: 1px solid black;
            }`}</style>

          <div><ul>{cardA}</ul></div>



      </div>
    );
}

StaticInfoCards.propTypes = {
  question: PropTypes.string,
  type: PropTypes.string,
  questionId: PropTypes.string.isRequired
}

export default StaticInfoCards
