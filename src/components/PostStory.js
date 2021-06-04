import React from 'react';
import './PostStory.css';
import axios from '../services/axios';

const PostStory = ({_id, story_title, title, author, created_at}) => {

    const deletePost = () => {
        axios.delete(_id).then(res => {
            console.log(res);
        });
    }

    return (
        <div className='postStory'>
            <div className='postStory__info'>
                <p>{story_title}</p>
                <p>{author}</p>
                <p>{created_at}</p>
            </div>
            <div className='postStory__option'>
                <button onClick={deletePost} className='postStory__option_btn'>
                    <img src="https://i.ibb.co/9vRBtML/trash.png" alt="Trash" />
                </button>
            </div>
        </div>
    );
}

export default PostStory;
