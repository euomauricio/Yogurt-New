import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import DarkMode from '../DarkMode.tsx'
import FormControlLabel from '@mui/material/FormControlLabel';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';


export default function MiniMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>
            <Box sx={{ zIndex: '9999', display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Notificações">
                    <IconButton
                        onClick={handleClick}
                        size="medium"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'notifications' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <NotificationsActiveIcon fontSize="large" alt="profile" className="SVG" id="userSVG"></NotificationsActiveIcon>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="notifications"
                open={open}
                onClose={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 2,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >

                <MenuItem>
                    <Avatar fontSize="small" /> Joãozinho curtiu sua publicação
                </MenuItem>
                <Divider />
                <MenuItem>
                    <Avatar fontSize="small" /> Joãozinho curtiu sua publicação
                </MenuItem>
                <Divider />
                <MenuItem>
                    <Avatar fontSize="small" /> Joãozinho curtiu sua publicação
                </MenuItem>
                <Divider />
                <MenuItem>
                    <Avatar fontSize="small" /> Andrezinho curtiu sua publicação
                </MenuItem>
                <Divider />
                <MenuItem>
                    <Avatar fontSize="small" /> Marcelinho curtiu sua publicação
                </MenuItem>
                <Divider />
                <MenuItem>
                    <Avatar fontSize="small" /> Cristininha curtiu sua publicação
                </MenuItem>
               
            </Menu>
        </React.Fragment>
    );
}