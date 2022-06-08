import React, { useEffect, useState } from 'react';
import Post from '../PostAPost'
import PostFeed from '../Post/Feed/Feed'
import Stories from '../Stories'
import axios from 'axios';




export default function CenterBar() {

    const [publications, setPublications] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/publications').then((response) => {
            setPublications(response.data);
        });
    }, []);
    return (
        <div className="centerBar">
            <Post />
            {publications.map((publication) => (
                <PostFeed publication={publication} />


            ))}
        </div>
    )
}

