import React, { useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function EditModal({ onSubmit, editedStudent }) {
  const [name, setName] = useState(editedStudent ? editedStudent.name : "");
  const [email, setEmail] = useState(editedStudent ? editedStudent.email : "");
  const [age, setAge] = useState(editedStudent ? editedStudent.age : "");
  const [activeTab, setActiveTab] = useState(false);

  
  const handleClose = () => {
    setActiveTab(true);
    console.log("activeTab",activeTab)
  }; 

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, age });
    setName("");
    setEmail("");
    setAge("");
  };

  return (
    <div>
      <BootstrapDialog
        onClick={handleClose}
        aria-labelledby="customized-dialog-title"
        open={true}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Edit
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon  />
        </IconButton>
        <DialogContent dividers>
          <>
            <h3>Enter Details</h3>
            <form onSubmit={handleSubmit} className="edit-container">
              Name:
              <input
                type="text"
                placeholder="Enter the name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-container"
              />
              Email ID:
              <input
                type="email"
                placeholder="Enter the email id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-container"
              />
              Age :
              <input
                type="number"
                placeholder="Enter the age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="input-container"
              />
              <button type="submit" className="button-style">
            {editedStudent ? "Save Changes" : "Add Student"}
          </button>
            </form>
          </>
        </DialogContent>
        <DialogActions>
          
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
