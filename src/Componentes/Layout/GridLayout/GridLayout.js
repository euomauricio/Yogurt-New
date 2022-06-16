import LeftBar from '../LeftBar/LeftBar'
import CenterBar from '../CenterBar'
import RightBar from '../RightBar/RightBar'
import './GridLayout.css'


export default function Grid() {
    return (
        <div className="grid">
            <LeftBar />
            <CenterBar />
            <RightBar />
        </div>
    )
}