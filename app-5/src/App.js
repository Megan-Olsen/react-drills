import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./Image";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={"https://npr.brightspotcdn.com/dims4/default/452ab03/2147483647/strip/true/crop/640x336+0+71/resize/1200x630!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fkcur%2Ffiles%2F201611%2F5720304856_1c2a7c2142_z.jpg"} />
      </div>
    );
  }
}

export default App;