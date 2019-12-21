import React from 'react';

function Navbar(props){


   
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand">Clicky Game</span>
        {props.children}
      </nav>
  )
    }


export default Navbar
