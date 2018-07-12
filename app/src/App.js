import React, { Component } from "react";
import JojoCard from "./components/JojoCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import faces from "./faces.json";
import "./App.css";

class App extends Component {
  // setting this.state.faces to the faces json array
  state = {
    count: 0,
    clicked: [],
    faces: faces,
  };

  checkCard = id => {
    console.log("I've been clicked!");

    // update count state
    this.setState({ count: this.state.count + 1 });
  };  

  // removeCharacter = id => {
  //   // filter this.state.faces for faces with an id not equal to the id being removed
  //   const faces = this.state.faces.filter(face => face.id !== id);
  //   // set this.state.faces equal to the new face array
  //   this.setState({ faces });
  // };

  // map over this.state.faces and render a JojoCard component for each face object
  render() {
    return (
      <Wrapper>
        <Title>Click Score: {this.state.count}</Title>
        <button onClick={this.checkCard}>Click me</button>
        {this.state.faces.map(face => (
          <JojoCard
            id={face.id}
            key={face.id}
            name={face.name}
            image={face.image}
            checkCard={this.checkCard}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
