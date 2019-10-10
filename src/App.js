import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

// Reorganize characters
function reorganize(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters,
    currentScore: 0,
    topScore: 0,
    winLose: "",
    clicked: []
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.increaseScore();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.resetGame();
    }
  };

  // increase score by 1
  increaseScore = () => {
    var newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      winLose: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    this.shuffle();
  };

  // handle game reset
  resetGame = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      winLose: "Please play again.",
      clicked: []
    });
    this.shuffle();
  }

  // shuffle
  shuffle = () => {
    let reorganizedCharacters = reorganize(characters);
    this.setState({ friends: reorganizedCharacters });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <>
        <Header />
        <Wrapper>
          <NavBar
            score={this.state.currentScore}
            topScore={this.state.topScore}
            winLose={this.state.winLose}
          />

          {this.state.characters.map(character => (
            <CharacterCard
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
              handleClick={this.handleClick}
            />
          ))}
        </Wrapper>
        <Footer />
      </>
    );
  }
}

export default App;
