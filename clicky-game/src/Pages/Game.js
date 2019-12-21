import {React, Component} from 'react';
import { Col, Row, Container } from "../Components/Grid";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Display from "../Components/Display";

class Game extends Component {
  state = {
    playState:"none",
    score: 0,
    guesses:3,
  };



  render(){
    return(
      <div>
      <Navbar
      score={ this.state.score}
      />
      <Header />
  <Container>
     <Row>
      <Display/>
     </Row>
  </Container>
  </div>
    )
  }
}

export default Game;