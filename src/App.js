import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Adopt me!</h1>
        <Pet name="Pepper" animal="bird" breed="cocktail" />
        <Pet name="luna" animal="Dog" breed="Havanese" />
        <Pet name="Doink" animal="Cat" breed="mix" />
      </div>
    );
  }
}

render(<App />, document.querySelector("#root"));
