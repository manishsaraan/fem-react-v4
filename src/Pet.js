import React from "react";

const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", null, props.name),
    React.createElement("h2", null, props.animal),
    React.createElement("h2", null, props.breed)
  ]);
};

export default Pet;
