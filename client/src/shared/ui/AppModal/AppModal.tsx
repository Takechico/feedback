import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import {Box, Modal, IconButton, Typography} from '@mui/material';

interface Props {
    open: boolean;
    title: string;
    handleClose: () => void;
    children: React.ReactNode;
}

/**
 * Main Modal component
 * @param open
 * @param handleClose
 * @param title
 * @param children
 * @constructor
 */
export const AppModal: React.FC<Props> = ({
open,
handleClose,
title,
children,
}) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box sx={style}>
                <Box sx={headerStyle}>
                    <Typography id="modal-title" variant="h6" component="h2">
                        {title}
                    </Typography>
                    <IconButton aria-label="close" onClick={handleClose} size="small">
                        <CloseIcon/>
                    </IconButton>
                </Box>

                <Box id="modal-description" sx={{mt: 2}}>
                    {children}
                </Box>
            </Box>
        </Modal>
    );
};


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 2,
    p: 4,
};

const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mb: 2
};
