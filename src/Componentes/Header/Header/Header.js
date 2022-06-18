import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
import Busca from '../Busca/Busca'
import Logo from '../Logo/Logo'
import MiniMenu from '../../Elementos/MiniMenu/MiniMenu'
import Notify from '../../Elementos/Notify/Notify'
export default function Header() {
    return (
        <div className="header d_flex justify_content_end">
            <div className="headerLeft d_flex">
                <Logo />
            </div>
            <div className="headerRight d_flex d_align_center">

                <IconButton >
                    <ForumIcon fontSize="large" alt="messages" className="SVG" id="messageSVG"></ForumIcon>
                </IconButton>

                <Notify />

                <MiniMenu />

            </div>
        </div>
    );
}