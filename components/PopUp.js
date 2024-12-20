"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import PostUser from "./PostUser";

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  return (
    <div>
      <div className="btnRRRRR">
        <Button sx={{ color: "white" }} onClick={handleOpen}>
          +
        </Button>
      </div>
      <Modal open={open} onClose={handleClose}>
        <div style={style}>
          <PostUser setOpen={setOpen} />
        </div>
      </Modal>
    </div>
  );
}
const style = {
  position: 'absolute',
  top: '50%',
  left: '40%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};