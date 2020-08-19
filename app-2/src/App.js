import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      songs: ["Girl Code", "Country Girls", "Smile", "Joke's on You", "Everything She's Not", "Tornados at Midnight"]
    };
  }

  render() {
    let songsToDisplay = this.state.songs.map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });

    return <div className="App">{songsToDisplay}</div>;
  }
}

export default App;