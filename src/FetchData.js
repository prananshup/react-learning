import React from "react";
import axios from "axios";

class FetchData extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    async componentDidMount() {
        const data = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(data.data)
        this.setState({ posts: JSON.stringify(data.data) });
    }

    render() {
        return (
            <div> {this.state.posts} </div>
        )
    }
}

export default FetchData;