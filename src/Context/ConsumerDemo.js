import React from "react";
import { UserConsumer } from "./userContext";

class ConsumerDemo extends React.Component {
  render() {
    return (
      <UserConsumer>
        {(value) => `${this.props.children} ${value}`}
      </UserConsumer>
    );
  }
}

export default ConsumerDemo;
