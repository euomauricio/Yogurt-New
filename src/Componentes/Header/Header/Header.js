import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
import Busca from '../Busca/Busca'
import Logo from '../Logo/Logo'
import MiniMenu from '../../Elementos/MiniMenu/MiniMenu'
import Notify from '../../Elementos/Notify/Notify'
export default function Header() {
    return (

        <div className="header">
            <div className="headerLeft">
                <Logo />
            </div>
            <div className="headerRight">

                <IconButton >
                    <ForumIcon fontSize="large" alt="messages" className="SVG" id="messageSVG"></ForumIcon>
                </IconButton>

                <Notify />

                <MiniMenu />

            </div>
        </div>
    );
}