import React, { Component } from 'react';
import Score from '../Score'



class Navbar extends Component{

  render() {
   
    return(
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand">Clicky Game</span>
        <Score/>
      </nav>
  )
    }
}

export default Navbar
