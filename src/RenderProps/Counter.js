import React from "react";

class Counter extends React.Component {
  /*
        <Counter
      render={(counter, incrementCounter) => (
        <ButtonCounter counter={counter} incrementCounter={incrementCounter} />
      )}
    />
    <Counter
      render={(counter, incrementCounter) => (
        <HoverCounter counter={counter} incrementCounter={incrementCounter} />
      )}
    />
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
      <div>{this.props.render(this.state.counter, this.incrementCounter)}</div>
    );
  }
}

export default Counter;
