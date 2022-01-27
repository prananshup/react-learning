import React from "react";

class ComponentLifeCycle extends React.Component {

    state = {
        count: 0
    };

    componentDidMount() {
        console.log('in mount');
    }

    componentDidUpdate() {
        console.log('in upate');
    }

    render() {
        const { count: cnt } = this.state;
        console.log('in rener');
        return (<div>
            <button onClick={() => this.setState({count: cnt + 1})}>click me</button>
            <p>{ cnt }</p>
        </div>);
    }
}

export default ComponentLifeCycle;

