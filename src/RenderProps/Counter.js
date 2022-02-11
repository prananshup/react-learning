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
    this.setState((prevState, props) => ({
      counter: prevState.counter + props.incrementBy,
    }));
  };

  render() {
    return (
      <div>{this.props.render(this.state.counter, this.incrementCounter)}</div>
    );
  }
}

Counter.defaultProps = {
  incrementBy: 3,
};

export default Counter;
