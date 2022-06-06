import CenterBar from './CenterBar'
import Bio from '../Bio'

export default function Profile() {
    return (
        <div className="profile">
            <Bio />
            <hr/>
            <br/>
            <CenterBar />
        </div>
    )
}