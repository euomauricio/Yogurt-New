import React from 'react';
import Post from '../Elementos/PostAPost/PostAPost';
import PostFeed from '../Post/Feed/Feed';
import useApi from '../../Hooks/useApi';


export default function CenterBar() {
    const { data: publications } = useApi('http://localhost:5000/publications')
    return (
        <div className="d_flex f_column justify_content_center">
            <Post />
            {publications?.map(publication => (
                <PostFeed publication={publication} />
            ))}
        </div>
    )
}

