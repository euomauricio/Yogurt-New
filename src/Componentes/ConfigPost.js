import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function KeepMountedModal({nome, cidade, foto}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
        <div onClick={handleOpen} className="btnConfig"></div>
        <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
        >
            <Box sx={style} className="divConfig componentes">
              <div className='componentes'>
                <input id='foto' type="file" class="fupload" accept='image/*' />

                <input id='nome' type="text" placeholder={nome}  />
                
                <input id='city' type="text" placeholder={cidade}  />
                
                <label for="legenda">Descrição:</label>
                <textarea id='legenda' name="legenda" maxlength="150" rows="3" columns="5" />
              </div>
              

              <input type="submit" value="Salvar" />
            </Box>
        </Modal>
    </div>
  );
}
