import React, { PureComponent } from "react";

class PureC extends PureComponent {
  constructor() {
    super();
    this.state = { name: "David" };
  }

  handleclick = () => {
    this.setState({ name: "John" });
  };

  render() {
    console.log("Rendered");
    return (
      <div>
        <h2>Name : {this.state.name}</h2>
        <button onClick={this.handleclick}>click</button>
      </div>
    );
  }
}

export default PureC;
