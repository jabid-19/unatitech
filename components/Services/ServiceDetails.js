import React, { useState, useRef, useEffect } from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import CancelIcon from '@mui/icons-material/Cancel'
import { makeStyles } from '@mui/styles'
import parse from 'html-react-parser'
import { Grid, Typography, Divider } from '@mui/material'
import { useTheme } from '@emotion/react'
import useMediaQuery from '@mui/material/useMediaQuery'

const useStyles = makeStyles((theme) => ({
  dialog: {
    '& .MuiDialog-paper': {
      background: 'rgba( 0, 0, 0, .6 )',
      // boxShadow: '0 1px 5px 0 #5942ac',
      backdropFilter: 'blur( 15px )',
      borderRadius: '20px',
      border: '1px solid #5942ac',
      color: '#fff',
    },
    '& .MuiDialogContent-root': {
      borderRadius: '0 0 20px 20px',
    },
    '& .MuiTypography-root': {
      borderRadius: '20px 20px 0 0',
    },
  },

  dialogTitle: {
    fontWeight: 'bold',
    background: '-webkit-linear-gradient(0deg,#CE4DA4, #7353E5)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  dialogContent: {
    // background: 'rgba( 0, 0, 0, 0.9 )',
    background: '#1D1A27',
    // boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    // backdropFilter: 'blur( 8.5px )',
    // borderRadius: '0 0 0px 0px',

    // border: '1px solid rgba( 255, 255, 255, 0.18 )',
    color: '#fff',
  },
}))

const ServiceDetails = ({ openModal, closeModal, selectedService }) => {
  // style hook
  const classes = useStyles()
  // local states
  const [scroll, setScroll] = useState('paper')
  const [service, setService] = useState(selectedService)

  //useref
  const descriptionElementRef = useRef(null)

  //Responsive dailog
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  // useeffect
  useEffect(() => {
    setService(selectedService)
  }, [selectedService])

  useEffect(() => {
    if (openModal) {
      const { current: descriptionElement } = descriptionElementRef
      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
  }, [openModal])

  //handler functions
  // const handleClickOpen = (scrollType) => () => {
  //   setOpen(true)
  //   setScroll(scrollType)
  // }

  const handleClose = () => {
    closeModal()
  }

  return (
    <>
      <Dialog
        className={classes.dialog}
        maxWidth="md"
        fullWidth
        fullScreen={fullScreen}
        open={openModal}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description">
        <DialogTitle
          sx={{
            // background: 'rgba( 0, 0, 0, 0.9 )',
            background: '#1D1A27',
          }}>
          <Box id="scroll-dialog-title" className={classes.dialogTitle}>
            <Box sx={{ display: 'flex', justifyContent: 'end' }}>
              <CancelIcon
                onClick={handleClose}
                sx={{ color: 'white', padding: 'none', '&:hover': { cursor: 'pointer' } }}
              />
            </Box>
            <Typography variant="h4">{service.title}</Typography>
          </Box>
        </DialogTitle>
        <Divider variant="fullwidth" sx={{ background: 'rgba(255, 91, 202, 1)' }} />
        <DialogContent dividers={scroll === 'paper'} className={classes.dialogContent}>
          {/* <Box id="scroll-dialog-title" className={classes.dialogTitle}>
            <Box sx={{ display: 'flex', justifyContent: 'end' }}>
              <CancelIcon
                onClick={handleClose}
                sx={{ padding: 'none', '&:hover': { cursor: 'pointer' } }}
              />
            </Box>
            <Typography variant="h4">{service.title}</Typography>
          </Box> */}
          {Object.keys(service).length !== 0 && service.details ? parse(service.details) : ''}
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ServiceDetails
