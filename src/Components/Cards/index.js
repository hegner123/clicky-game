import React from "react";



function Card(props){

  return(

  <div className="col-12 col-md-4 text-center mt-5">
  <img src={props.image} className="img-fluid " alt="..." onClick={() => props.clicked(props.id)}/>
</div>
)
  };


export default Card;


