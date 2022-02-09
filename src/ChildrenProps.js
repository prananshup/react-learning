import React from "react";

class ChildrenProps extends React.Component {
    /*
        <ChildrenProps>
            <div>
                <div>hi1</div>
                <div>hello1</div>
                <div>worlD1</div>
            </div>
            <div>
                <div>hi2</div>
                <div>hello2</div>
                <div>worl2</div>
            </div>
        </ChildrenProps>
    */

    render() {
        console.log( this.props.children );
        return (
          <>
            {this.props.children.map((c) => (
              <ul>
                {" "}
                {c.props.children.map((i) => (
                  <li> {i} </li>
                ))}{" "}
              </ul>
            ))}
          </>
        );
    }

}

export default ChildrenProps;