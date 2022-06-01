import Post from '../PostAPost'
import PostFeed from '../PostFeed'
import Stories from '../Stories'

export default function CenterBar() {
    return (
        <div className="centerBar">
            <Stories />
            <Post />
            <PostFeed />
        </div>
    )
}

