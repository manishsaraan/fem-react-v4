import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  handleTitleClick() {
    alert("you have clicked!");
  }

  render() {
    return React.createElement("div", {}, [
      React.createElement(
        "h1",
        { onClick: this.handleTitleClick },
        "Adopt me!"
      ),
      React.createElement(Pet, {
        name: "Pepper",
        animal: "bird",
        breed: "cocktail"
      }),
      React.createElement(Pet, {
        name: "luna",
        animal: "Dog",
        breed: "Havanese"
      }),
      React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "mix" })
    ]);
  }
}

render(React.createElement(App), document.querySelector("#root"));
