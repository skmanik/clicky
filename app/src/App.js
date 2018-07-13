import React, { Component } from "react";
import JojoCard from "./components/JojoCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import faces from "./faces.json";
import "./App.css";

// idk why i'm doing this out here
// i keep reading sketchy info about pushing into state arrays
// so whatever
let clicked = [];

class App extends Component {
  // setting this.state.faces to the faces json array
  state = {
    count: 0,
    faces: faces,
  };

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // eslint-disable-line no-param-reassign
    }
  };

  checkCard = id => {
    console.log("I've been clicked!");

    // check clicked array for this card's id
    const included = clicked.find((n) => n === id);

    // if it exists inside the array, reset the game
    // if not, push the card id into the array and update the counter
    if (included) {
      console.log("Muda muda muda!");

      this.setState({ count: 0 });
      clicked = [];
    } else {
      console.log("GUUREATO!");

      if (clicked.length < 12) {
        clicked.push(id);
        console.log(clicked);
        this.setState({ count: this.state.count + 1 });

        // win state
        if (clicked.length === 12) {
          alert("You've won!");

          this.setState({ count: 0 });
          clicked = [];
        }
      }
    }

    // shuffle cards
    this.shuffleArray(faces);
  };  

  // map over this.state.faces and render a JojoCard component for each face object
  render() {
    return (
      <Wrapper>
        <Title>Click Score: {this.state.count}</Title>
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
