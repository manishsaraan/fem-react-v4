import React from "react";
import { render } from "react-dom";
import pf from "petfinder-client";
import Pet from "./Pet";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: []
    };
  }

  componentDidMount() {
    petfinder.pet
      .find({ output: "full", location: "Seattle, WA" })
      .then(data => {
        console.log(data);
        let pets;
        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else {
            pets = [data.petfinder.pets.pet];
          }
        }
        this.setState({ pets });
      });
  }
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
