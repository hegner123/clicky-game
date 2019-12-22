import React, { Component} from 'react';
import {Col, Row, Container } from "../Components/Grid";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Display from "../Components/Display";
import Cards from "../Components/Cards";
import friends from "../friends.json";
import Score from "../Components/Score";
class Game extends Component {
  state = {
    friends: friends,
    playState:"none",
    score: 0,
    topScore: 0,
    guesses:3,
    clicked: []
  };

  clicked = id => {
    let { clicked } = this.state;
    let { score } = this.state;
    let { topScore } = this.state;
   if (clicked.includes(id)){
     console.log(clicked);
     console.log("fuck");
     if (score > topScore){
      this.setState({topScore: score})
      this.setState({score:0})
      this.setState({clicked: []})
     } else {
      this.setState({score:0})
      this.setState({clicked: []})
     }
   } else {
     this.setState({score: score +1})
     if (score > topScore){
      this.setState({topScore: score})
      
     };
     console.log(score)
     console.log(topScore)
    clicked.push(id);
   };
   this.shuffle();
  }

  shuffle = () => this.state.friends.sort((a, b) => 0.5 - Math.random());

  render(){
    return(
      <div>
      <Navbar>
        <Score
          score={this.state.score}
          topScore ={this.state.topScore}
        />
      </Navbar>
      <Header />
      <Container>
      <Row>
        <Col size="12">
        <Display>
        {this.state.friends.map(friends => (
          <Cards
            clicked={this.clicked}
            id={friends.id}
            key={friends.id}
            image={friends.image}
          />
        ))}
        </Display>
        </Col>
      </Row>
  </Container>
  </div>
    )
  }
}

export default Game;