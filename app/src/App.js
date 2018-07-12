import React, { Component } from "react";
import JojoCard from "./components/JojoCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import faces from "./faces.json";
import "./App.css";

class App extends Component {
  // setting this.state.faces to the faces json array
  state = {
    faces
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
        <Title>Clicky!</Title>
        {this.state.faces.map(face => (
          <JojoCard
            id={face.id}
            key={face.id}
            name={face.name}
            image={face.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
