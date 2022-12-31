import { useState } from "react";
import {
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

function SQLButton({ sqlQuery }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" size="small" onClick={handleClickOpen}>
        <Typography sx={{ fontSize: 10 }} color={"textPrimary"}>
          SQL
        </Typography>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={"paper"}
        maxWidth={"md"}
      >
        <DialogTitle id="sql-title" color={"textPrimary"}>
          {"SQL Query"}
        </DialogTitle>
        <DialogContent>
            <Typography color={"textPrimary"}  style={{whiteSpace: 'break-spaces', }}>
                {sqlQuery}
            </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleClose();
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default SQLButton;
