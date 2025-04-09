import { useState } from 'react';
import { Snackbar, Alert, AlertColor } from '@mui/material';

export function useSnackbar() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState<AlertColor | undefined>(undefined);

  const openSnackbar = (newMessage: string, newType: AlertColor) => {
    setMessage(newMessage);
    setType(newType);
    setOpen(true);
  };

  const closeSnackbar = () => {
    setOpen(false);
    setMessage('');
    setType(undefined);
  };

  const SnackbarComponent = () => (
    <Snackbar open={open && Boolean(message)} autoHideDuration={6000} onClose={closeSnackbar}>
      {type && (
        <Alert onClose={closeSnackbar} severity={type} sx={{ width: '100%' }}>
          {message}
        </Alert>
      )}
    </Snackbar>
  );

  return { openSnackbar, closeSnackbar, SnackbarComponent };
}
