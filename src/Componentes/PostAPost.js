import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle'
import Button from '@mui/material/Button';


export default function Post() {
    return (

        <Box className="post"
            sx={{
                width: "100%"
            }}
        >

            <div className="userBlockCOLLUM">
                <div className="userBlockROW">
                    <AccountCircle />
                </div>
                <div className="conteudoDaPostagem">
                    <TextField
                        label="Publique o que quiser"
                        multiline
                        rows={4}
                        fullWidth
                    />
                </div>
                <div className="buttonPost">
                    <Button variant="contained">
                        Publicar
                    </Button>
                </div>
            </div>
        </Box>
    )
}