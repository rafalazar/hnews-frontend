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



    return (
        <div>
            {
                posts.map(p => (
                    <PostStory
                        _id={p._id}
                        story_title={p.story_title}
                        title={p.title}
                        author={p.author}
                        created_at={p.created_at}
                    />
                ))
            }
        </div>
    );
}

export default Posts;