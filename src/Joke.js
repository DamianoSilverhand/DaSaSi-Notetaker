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
          <h1>Laugh and Live Longer</h1>
          <button onClick={() => this.generateJoke()}>Generate</button>
        </div>
        <p className="App-intro">
          <DadJoke joke={this.state.joke} />
        </p>
      </div>
    );
  }
}
