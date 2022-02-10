import React from "react";

class ButtonCounter extends React.Component {
  render() {
    return (
      <>
        <button onClick={this.props.incrementCounter}>
          +{` ${this.props.counter}`}
        </button>
      </>
    );
  }
}

export default ButtonCounter;
