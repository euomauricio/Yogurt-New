import React, { useEffect, useState } from 'react';
import Post from '../PostAPost'
import PostFeed from '../Post/Feed/Feed'
import Stories from '../Stories'
import axios from 'axios';




export default function CenterBar() {

    const [publications, setPublications] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/publications?_embed=arquivos').then((response) => {
            setPublications(response.data);
        });
    }, []);

    return (
        <div className="centerBar">
            <Stories />
            <Post />
            {publications.map((publication) => (
            <PostFeed publication={publication} />
            ))}

        </div>
    )
}

