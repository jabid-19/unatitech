import { useRef, useState } from 'react'
import { Box, Container, Grid, Typography, TextField } from '@mui/material'
import { makeStyles, withStyles } from '@mui/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import CancelIcon from '@mui/icons-material/Cancel'
import customStyles from './Services.module.css'
import emailjs from '@emailjs/browser'
import CustomAlert from '../Elements/Alert'

const useStyles = makeStyles((theme) => ({
  gradientBtn: {
    display: 'flex',
    fontSize: '18px',
    alignItems: 'center',
    width: 'max-content',
    margin: 'auto',
    position: 'relative',
    padding: '20px 60px',
    boxSizing: 'border-box',
    color: '#fff',
    background: '#13121a',
    backgroundClip: 'padding-box',
    border: 'solid 10px transparent',
    borderRadius: '45px',
    textTransform: 'capitalize',
    transitionDuration: '500ms',

    '&::before': {
      content: '""',
      color: '#fff',
      position: 'absolute',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      zIndex: '-1',
      margin: '-2px',
      borderRadius: '45px',
      background: 'linear-gradient(to right, #7353E5, #CE4DA4, #CE4DA4)',
    },
    '&:hover': {
      border: 'solid 10px transparent',
      cursor: 'pointer',
      // boxShadow: '0px 12px 30px 0px rgba(0, 0, 0, 0.7)',
      transform: 'scale(1.05)',
      transition: 'all 800ms cubic-bezier(0.19, 1, 0.22, 1)',
    },
    [theme.breakpoints.down('sm')]: {
      width: 'max-content',
      padding: '10px 25px',
      fontSize: '15px',
    },
  },

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
      borderRadius: '20px',
      border: '1px solid #5942ac',
      color: '#fff',
    },
  },
}))

export default function CreateMeeting() {
  // State and functionality to manage dialog
  const [open, setOpen] = useState(false)

  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  // Withstyles function component for custom textfield
  const WhiteTextField = withStyles({
    root: {
      '& ..MuiInputLabel': {
        color: '#fff', // Text color
      },
      '& .MuiInputBase-input': {
        color: '#fff', // Text color
      },
      '& .MuiInput-underline': {
        borderBottom: '1px solid rgba(255, 91, 202, 1)',
      },
      '&:after': {
        borderBottom: '2px solid rgba(255, 91, 202, 1)',
      },
    },
  })(TextField)

  const { gradientBtn, dialog } = useStyles()

  // Email functionality
  const form = useRef()

  const sendEmail = async (e) => {
    setOpen(false)

    e.preventDefault()

    const res = await fetch(`/api/meetingEmailCredentials`)
    const data = await res.json()

    emailjs.sendForm(data.SERVICE_ID, data.TEMPLATE_ID, form.current, data.USER_ID).then(
      (result) => {
        setSeverity('success')
        setPopupError(true)
        setErrorMessage('You have subscribed successfully')
      },
      (error) => {
        setSeverity('error')
        setPopupError(true)
        setErrorMessage('Something went wrong.')
      }
    )
  }

  // Alert Functionality
  const [popupError, setPopupError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [severity, setSeverity] = useState('')

  return (
    <>
      <Container>
        <Button
          onClick={handleClickOpen}
          disableElevation
          className={gradientBtn}
          variant="outlined">
          Book a free meeting with us
        </Button>
        {/* Dialog goes here */}
        <Dialog
          className={dialog}
          maxWidth="sm"
          fullWidth
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title">
          <DialogContent
            sx={{
              background: '#1D1A27',
              boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
              backdropFilter: 'blur( 8.5px )',
              // borderRadius: '10px',
              border: '1px solid rgba( 255, 255, 255, 0.18 )',
              color: '#fff',
            }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <CancelIcon
                onClick={handleClose}
                sx={{ padding: 'none', '&:hover': { cursor: 'pointer' } }}
              />
            </Box>
            <Typography sx={{ textAlign: 'center', marginBottom: '40px' }} variant="h5">
              Book A Meeting!
            </Typography>
            {/* Form */}
            <Box
              ref={form}
              onSubmit={sendEmail}
              maxWidth="xl"
              component="form"
              sx={{
                '& > :not(style)': { m: 0.5, marginTop: '20px', width: '90%' },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: '#fff',

                [theme.breakpoints.only('xs')]: {
                  width: '100%',
                  fontSize: '0.75rem',
                },
              }}
              // noValidate
              autoComplete="off">
              {/* <FormGroup sx={{ flexDirection: 'row' }}>
                <FormControlLabel
                  control={<Checkbox color="secondary" sx={{ color: '#ff5bca' }} />}
                  label="Remote"
                />
                <FormControlLabel
                  control={<Checkbox color="secondary" sx={{ color: '#ff5bca' }} />}
                  label="On-site"
                />
              </FormGroup> */}
              <WhiteTextField
                required
                InputLabelProps={{
                  style: { color: '#fff' },
                }}
                label="Name"
                name="name"
                // type="text"
                variant="standard"
              />
              <WhiteTextField
                required
                InputLabelProps={{
                  style: { color: '#fff' },
                }}
                label="Email"
                name="email"
                // type="email"
                variant="standard"
              />
              <WhiteTextField
                InputLabelProps={{
                  style: { color: '#fff' },
                }}
                label="Phone"
                name="phone"
                // type="number"
                variant="standard"
              />
              {/* <WhiteTextField
              InputLabelProps={{
                style: { color: '#fff' },
              }}
              label="Country"
              name="country"
              type="text"
              variant="standard"
            /> */}
              <WhiteTextField
                InputLabelProps={{
                  style: { color: '#fff' },
                }}
                label="Reason for Interest"
                name="interest"
                // type="text"
                variant="standard"
                required
                // rows={5}
              />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: '10px',
                }}>
                <Box className={customStyles.btnBorder}>
                  <Button type="submit" className={customStyles.formButton}>
                    Confirm
                  </Button>
                </Box>
              </Box>
            </Box>
          </DialogContent>
        </Dialog>
      </Container>
      <CustomAlert open={popupError} severity={severity} msg={errorMessage} close={setPopupError} />
    </>
  )
}
