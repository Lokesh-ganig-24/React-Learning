import React, { Component } from "react";

class ImageChange extends Component {
  constructor() {
    super();
    this.state = {
      img: "https://img.freepik.com/free-photo/lavender-field-sunset_23-2151952590.jpg?semt=ais_rp_50_assets&w=740&q=80"
    };
  }

  handleclick = () => {
    this.setState({
      img: "https://img.freepik.com/free-photo/lavender-field-sunset-near-valensole_268835-3910.jpg?semt=ais_hybrid&w=740&q=80"
    });
  };

  render() {
    return (
      <div>
        <h2>Image Change Example</h2>
        <img src={this.state.img} alt="demo" width="200" />
        <br /><br />
        <button onClick={this.handleclick}>Submit</button>
      </div>
    );
  }
}

export default ImageChange;