import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Busca from './Busca'
import Logo from './Logo'
import MiniMenu from '../../Componentes/MiniMenu'

export default function Header() {
    return (

        <div className="header">
            <div className="headerLeft">
                <Logo />
            </div>

            <div className="headerRight">

                <IconButton href="#link">
                    <ForumIcon fontSize="large" alt="messages" className="SVG" id="messageSVG"></ForumIcon>
                </IconButton>

                <IconButton href="#link">
                    <NotificationsActiveIcon fontSize="large" alt="notifications" className="SVG" id="notifySVG"></NotificationsActiveIcon>
                </IconButton>
                
                <MiniMenu />

            </div>
        </div>
    );
}