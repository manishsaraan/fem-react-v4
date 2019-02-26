const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", null, props.name),
    React.createElement("h2", null, props.animal),
    React.createElement("h2", null, props.breed)
  ]);
};

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

ReactDOM.render(React.createElement(App), document.querySelector("#root"));
