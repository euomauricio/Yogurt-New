import DarkMode from '../DarkMode.tsx'
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Busca from './Busca'
import Logo from './Logo'

export default function Header() {
    return (

        <div className="header">
            <div className="headerLeft">
                <Logo />
            </div>

            <div className="headerRight">

                <Busca />

                <IconButton href="#link">
                    <ForumIcon fontSize="large" alt="messages" className="SVG" id="messageSVG"></ForumIcon>
                </IconButton>

                <IconButton href="#link">
                    <NotificationsActiveIcon fontSize="large" alt="notifications" className="SVG" id="notifySVG"></NotificationsActiveIcon>
                </IconButton>

                <IconButton href="#link">
                    <AccountCircleSharpIcon fontSize="large" alt="profile" className="SVG" id="userSVG"></AccountCircleSharpIcon>
                </IconButton>

                <IconButton href="#link">
                    <MoreHorizIcon fontSize="large" alt="more" className="SVG" id="moreSVG"></MoreHorizIcon>
                </IconButton>

                <DarkMode />

            </div>
        </div>
    );
}