import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
import Busca from './Busca'
import Logo from './Logo'
import MiniMenu from '../../Componentes/MiniMenu'
import Notify from '../Notify'
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

                <Notify />

                <MiniMenu />

            </div>
        </div>
    );
}