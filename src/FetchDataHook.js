import { useEffect, useState } from "react";
import axios from "axios";

const FetchDataHook = () => {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        async function fetchData() {
            const data = await axios.get('https://jsonplaceholder.typicode.com/posts');
            console.log(data.data)
            setPosts(JSON.stringify(data.data));
        }
        fetchData()
    }, []);

    return (
        <div>
            {posts}    
        </div>
    )
}

export default FetchDataHook;