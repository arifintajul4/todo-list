import React, { Component } from "react";
import "./counter.css";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      angka: 5,
    };
  }

  handlePlus = () => {
    this.setState({
      angka: this.state.angka + 1,
    });
  };

  handleMinus = () => {
    this.setState({
      angka: this.state.angka - 1,
    });
  };

  render() {
    return (
      <div className="wrap">
        <button onClick={this.handleMinus}>-</button>
        <span>{this.state.angka}</span>
        <button onClick={this.handlePlus}>+</button>
      </div>
    );
  }
}

export default Counter;
