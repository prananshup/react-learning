import React from "react";

class HoverCounter extends React.Component {
  render() {
    return (
      <>
        <br />
        <h3 onMouseOver={this.props.incrementCounter}>
          +{` ${this.props.counter}`}
        </h3>
      </>
    );
  }
}

export default HoverCounter;
