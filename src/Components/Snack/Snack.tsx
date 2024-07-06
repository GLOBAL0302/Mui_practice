import {Alert, Snackbar} from "@mui/material";

function Snack({isOpen, handleClose}){
    return(
        <Snackbar
            open={isOpen}
            onClose={handleClose}
            autoHideDuration={3000}
        >
            <Alert
                severity="success"
            >
                Added to Basket
            </Alert>
        </Snackbar>
    )
}

export default Snack