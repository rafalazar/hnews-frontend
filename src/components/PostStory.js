import React from 'react';
import './PostStory.css';
import { DateTime } from 'luxon';

const PostStory = ({posts, removePost}) => {

    const cTime = new Date();

    function proccessDate(date) {
        let apiDate = new Date(date);

        if(apiDate.getDay() === cTime.getDay() && apiDate.getMonth() === cTime.getMonth()) {

            return DateTime.fromJSDate((apiDate)).setLocale('en').toLocaleString(DateTime.TIME_SIMPLE);
        }
        else if(apiDate.getMonth() === cTime.getMonth() && apiDate.getDay() < cTime.getDay()) {
            return 'Yesterday';
        }

        return DateTime.fromJSDate((apiDate)).setLocale('en').toLocaleString({month: 'short', day: 'numeric'});
    }

    function validateTitle(sTitle, title, id) {

        if(sTitle === null) {
            return title;
        }

        if(title === null) {
            return sTitle;
        }

        if(sTitle === null && title === null) {
            removePost(id);
        }

    }

    function validateURL(sURL, url) {
        if(sURL === null) {
            return url;
        }

        return sURL;
    }

    return posts.map((p, index) => (

            <div className='postStory'>
                <a href={validateURL(p.story_url, p.url)} target='_blank' rel='noreferrer' className='postStory__link'>
                    <div className='postStory__info' key={index}>
                        <p className='postStory__title'>{validateTitle(p.story_title, p.title, p._id)}</p>
                        <p className='postStory__author'>- {p.author} -</p>
                    </div>
                </a>
                <div>
                    <p>
                        {proccessDate(p.created_at).toString()}
                    </p>
                </div>
                <button className='postStory__option_btn' onClick={() => removePost(p._id)}>
                    <img src="https://i.ibb.co/9vRBtML/trash.png" alt="Trash" />
                </button>
            </div>
    ));
}

export default PostStory;
