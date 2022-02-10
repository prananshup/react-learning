import React from "react";

class CounterToChildren extends React.Component {
  /*
    <CounterToChildren>
      {" "}
      {(counter, incrementCounter) => (
        <ButtonCounter counter={counter} incrementCounter={incrementCounter} />
      )}
    </CounterToChildren>

  */
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div>
        {this.props.children[1](this.state.counter, this.incrementCounter)}
      </div>
    );
  }
}

export default CounterToChildren;
