import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import './PostAPost.css';

export default function Post() {
    return (

        <Box className="post d_flex justify_content_center"
            sx={{
                width: "100%"
            }}
        >
            <div className="userBlockCOLLUM d_flex f_column justify_content_center">
                <div className="userBlockROW d_flex f_row align_items_center">
                    <AccountCircle />
                </div>
                <div className="conteudoDaPostagem d_flex f_column justify_content_center align_items_center">
                    <TextField
                        label="Publique o que quiser"
                        multiline
                        rows={4}
                        fullWidth
                    />
                </div>
                <div className="buttonPost d_flex justify_content_end">
                    <Button variant="contained">
                        Publicar
                    </Button>
                </div>
            </div>
        </Box>
    )
}