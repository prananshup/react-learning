import axios from "axios";
import { useEffect, useState } from "react";

const FetchDataClick = () => {
    const [posts, setPosts] = useState([]);

    const fetchData = async () => {
        const data = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(data.data)
        setPosts(data.data);
    }

    return (
        <div>
            <button onClick={() => fetchData()}>Ftech Data</button>
            <br />
            <br />
            <ul>
                {posts && posts.map(post => <li>
                    {post.title}
                </li>)}
                </ul>
        </div>
        
    )
}

export default FetchDataClick;


