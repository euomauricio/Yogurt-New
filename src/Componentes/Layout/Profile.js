import Post from '../PostAPost'
import PostFeed from '../PostFeed'
import Bio from '../Bio'

export default function Profile() {
    return (
        <div className="profile">
            <Bio />
            <hr/>
            <br/>
            <Post />
            <PostFeed />
        </div>
    )
}