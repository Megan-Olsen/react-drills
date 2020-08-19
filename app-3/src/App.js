import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      filterString: "",
      songs: ["Girl Code", "Country Girls", "Smile", "Joke's on You", "Everything She's Not", "Tornados at Midnight"]
    };
  }

  handleChange(filter) {
    this.setState({ filterString: filter });
  }

  render() {
    let songsToDisplay = this.state.songs
      .filter((element, index) => {
        return element.includes(this.state.filterString);
      })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>;
      });

    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text" />
        {songsToDisplay}
      </div>
    );
  }
}

export default App;