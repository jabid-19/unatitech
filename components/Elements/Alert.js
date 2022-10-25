import React from 'react'
import { Snackbar } from '@mui/material'
import MuiAlert from '@mui/material/Alert'

// function SnackbarAlert(props) {
//   return <Alert elevation={6} variant="filled" {...props} />
// }

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const CustomAlert = ({ open, severity, msg, close }) => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    close(false)
  }

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity}>
        {msg}
      </Alert>
    </Snackbar>
  )
}

export default CustomAlert
