import React, { Component } from "react";
import { Col, Row, Container } from "./Components/Grid";
import Header from "./Components/Header";

import Navbar from "./Components/Navbar"
import friends from "./friends.json"
import Display from "./Components/Display"

class App extends Component {
  render() {
    return(
    <div className="App">
      <Navbar/>
      <Header/>


    <Container>
        <Row>
          <Display
          />
          
         
          
        </Row>
    </Container>

    </div>
    )
  };
}

export default App;