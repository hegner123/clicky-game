import React from "react";

function Score(props){
  return(
    <div className="ml-auto">
      <div className="ml-auto">
        <span><strong>Score:</strong>{props.score}</span>
          <span className="ml-5"><strong>TopScore:</strong>{props.topScore}</span>
        </div>
      </div>
  )
};

export default Score;