import React from 'react';
import Post from '../Elementos/PostAPost/PostAPost';
import PostFeed from '../Post/Feed/Feed';
import useApi from '../../Hooks/useApi';


export default function CenterBar() {
    const { data: publications } = useApi('http://localhost:5000/publications')
    return (
        <div className="centerBar">
            <Post />
            {publications?.map(publication => (
                <PostFeed publication={publication} />
            ))}
        </div>
    )
}

