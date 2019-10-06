// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";
import Header from "./components/Header";
import Footer from "./components/Footer";



class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters
  };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <>
        <Header />
          <Wrapper>
          <Title >Harry Potter Characters</Title>
          {this.state.characters.map(character => (
            <CharacterCard
              // removeFriend={this.removeFriend}
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
            />
          ))}
        </Wrapper>
        <Footer />
      </>
    );
  }
}

export default App;
