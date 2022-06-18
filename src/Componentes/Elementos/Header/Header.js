import DarkMode from '../DarkMode.tsx'
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Busca from './Busca'
import Logo from './Logo'
import './Header.css'

export default function Header() {
    return (
        <div className="header d_flex justify_content_end">
            <div className="headerLeft d_flex">
                <Logo />
            </div>

            <div className="headerRight d_flex d_align_center">

                <Busca />

                <IconButton href="#link">
                    <ForumIcon fontSize="large" alt="messages" className="SVG" id="messageSVG"></ForumIcon>
                </IconButton>

                <IconButton href="#link">
                    <NotificationsActiveIcon fontSize="large" alt="notifications" className="SVG" id="notifySVG"></NotificationsActiveIcon>
                </IconButton>

                <IconButton href="./Profile.js">
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