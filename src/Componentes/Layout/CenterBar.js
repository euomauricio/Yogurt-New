import Post from '../PostAPost'
import PostFeed from '../PostFeed'
import Stories from '../Stories'

export default function CenterBar() {
    return (
        <div className="centerBar">
            <Post />
            <PostFeed />
            <PostFeed />
            <PostFeed />
            <Stories />
            <PostFeed />
            <PostFeed />
        </div>
    )
}

