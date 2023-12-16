import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function CustomizedDialogs({ cartItems, clearCart, totalCart, removeFromCart, handleClose }) {
    const [open, setOpen] = React.useState(false);


    return (
        <div>

            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={true}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Cart({totalCart})
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                {cartItems.map((item, index) => (
                  <div key={index} className='modal-container'>
                    
                    <span>{item.name}</span>
                    <span>Price: ${item.price}</span>
                    <div>
                      <div className="input-group">
                        <input type="text" className="item-count form-control" data-name={item.name} value={item.count} />
                        <button className='display-content' onClick={() => removeFromCart(item.id)}>
                          X
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                </DialogContent>
                <DialogActions>
                    <Link to="/timeline">
                        <Button>
                            Order Now
                        </Button>
                    </Link>
                    <Button autoFocus onClick={clearCart}>
                        Clear Cart
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}