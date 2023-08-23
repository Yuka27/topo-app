import React from 'react';
import useIosInstallPrompt from '../useIosInstallPrompt';
import useWebInstallPrompt from '../useWebInstallPrompt';
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

export const InstallPWA = () => {
  const [iosInstallPrompt, handleIOSInstallDeclined] = useIosInstallPrompt();
  const [webInstallPrompt, handleWebInstallDeclined, handleWebInstallAccepted] = useWebInstallPrompt();
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  if (!iosInstallPrompt && !webInstallPrompt) {
    return null;
  }
  return (
    <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      {"Chcesz zapisać apkę na telefonie?"}
    </DialogTitle>
    <DialogContent>
    {iosInstallPrompt && (
            <>
              <DialogContentText className="text-center">
                Tap
                <img
                  src="content/images/Navigation_Action_2x.png"
                  style={{ margin: 'auto 8px 8px' }}
                  className=""
                  alt="Add to homescreen"
                  width="20"
                />
                then &quot;Add to Home Screen&quot;
              </DialogContentText>
              <div className="d-flex justify-content-center">
                <Button onClick={handleIOSInstallDeclined}>Close</Button>
              </div>
            </>
          )}
          {webInstallPrompt && (
            <div className="d-flex justify-content-around">
              <Button color="primary" onClick={handleWebInstallAccepted}>
                Install
              </Button>
              <Button onClick={handleWebInstallDeclined}>Close</Button>
            </div>
          )}
    </DialogContent>
  </Dialog>
  );
};