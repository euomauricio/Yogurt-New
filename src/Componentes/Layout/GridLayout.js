import LeftBar from './LeftBar'
import CenterBar from './CenterBar'
import RightBar from './RightBar'



export default function Grid() {
    return (
        <div className="grid">
            <LeftBar />
            <CenterBar />
            <RightBar />
            
        </div>
    )
}