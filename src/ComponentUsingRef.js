import React from "react";

class ComponentUsingRef extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.className = "class1 class2";
  }

  render() {
    return (
      <div>
        <input type={"text"} ref={this.inputRef} />
      </div>
    );
  }
}

export default ComponentUsingRef;
