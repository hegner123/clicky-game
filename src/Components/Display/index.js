import React from 'react';

function Display(props){
  return(
    <div className="row">
      {props.children}
    </div>
  )
}


export default Display