import { useEffect, useState } from 'react';
import axios from '../services/axios';
import PostStory from './PostStory.js';

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        async function fetchData() {
            const res = await axios.get();
            setPosts(res.data);
            console.log(res.data);
        }

        fetchData();
    },[]);

    const removePost = _id => {
        const removedArr = [...posts].filter(post => post._id !== _id);
        setPosts(removedArr);
        axios.delete(_id);
      };

    return (
        <div>
            <PostStory
                posts={posts}
                removePost={removePost}
            />
        </div>   
    );
}

export default Posts;