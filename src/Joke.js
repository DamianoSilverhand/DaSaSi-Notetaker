import React, { Component } from 'react';
import './Joke.css';
import { jokes } from './dadJokes.json';
import DadJoke from './components/DadJoke.jsx';

export class Jokes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: "Click the button to generate a joke!"
    }
  }

  generateJoke() {
    let joke = jokes[Math.floor(Math.random()*jokes.length)];
    this.setState({joke: joke});
  }

  render() {
    return (
      <div className="App">
        <div className="">
          <h1>Damiano $ Sam $ Sithembinkhosi Joke Generator</h1>
          <button onClick={() => this.generateJoke()}>Generate</button>
        </div>
        <p className="App-intro">
          <DadJoke joke={this.state.joke} />
        </p>
        <small className="github-link">
          Made with <i className="fa fa-heart fa-2x"></i> by&nbsp;
          <a href="https://github.com/sithembinkhosi-atanase" target="_blank" rel="noopener noreferrer">Sithembinkhosi Siwo Atanase</a>, <a href="https://github.com/SamuelEli" target="_blank" rel="noopener noreferrer">Samuel Eli</a> and <a href="https://github.com/DamianoSilverhand" target="_blank" rel="noopener noreferrer">Damiano Chintala</a>
        </small>
      </div>
    );
  }
}
