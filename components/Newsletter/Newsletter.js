import React, { useState, useEffect, useRef } from 'react'
import { Block } from '@mui/icons-material'
import { Container, Box, Grid, Typography, TextField, Button } from '@mui/material'
import { createStyles, makeStyles, withStyles } from '@mui/styles'
import AOS from 'aos'
import 'aos/dist/aos.css'
import emailjs from '@emailjs/browser'
import CustomAlert from '../Elements/Alert'

const useStyle = makeStyles((theme) => ({
  mainBox: {
    background: '#1D1A27',
    border: '1px solid rgba(255, 255, 255, 0.07)',
    borderRadius: '30px',
    boxShadow: '10px 10px 50px rgba(0, 0, 0, 0.5)',
    margin: '0 20px',
    maxHeight: '580px',
    backdropFilter: 'blur(100px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      justifyContent: 'left',
      // paddingBottom: '50px',
    },
  },
  newsletterTitle: {
    fontWeight: 'bold',
    fontSize: '45px',
    lineHeight: '55px',
    marginBottom: '20px',
    [theme.breakpoints.down('lg')]: {
      fontSize: '2.3rem',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '2.5rem',
      marginTop: '20px',
      marginLeft: '20px',
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      fontSize: '1.8rem',
      marginLeft: '0px',
      marginBottom: '15px',
    },
  },
  newsletterSubTitle: {
    fontWeight: 'normal',
    fontSize: '20px',
    lineHeight: '33px',
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem',
      marginLeft: '20px',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0 10px',
      textAlign: 'center',
      lineHeight: '25px',
    },
  },
  subBox: {
    width: '50%',
    padding: '80px',
    display: 'flex',
    flexDirection: 'column',
    // fontFamily: 'Verdana',
    fontStyle: 'normal',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      padding: '0px',
    },
  },
  rightElements: {
    margin: '20px 0px',
    [theme.breakpoints.down('md')]: {
      margin: '0',
      width: '90%',
      marginLeft: '20px',
      marginBottom: '20px',
    },
    // [theme.breakpoints.only('xs')]: {
    //   width: '80%',
    // },
  },

  button: {
    display: 'flex',
    fontSize: '18px',
    alignItems: 'center',
    width: '40%',
    margin: 'auto',
    marginTop: '20px',
    position: 'relative',
    padding: '10px 80px',
    boxSizing: 'border-box',
    color: '#fff',
    textTransform: 'none',
    background: '#13121a',
    transitionDuration: '500ms',
    // backgroundClip: 'padding-box',
    border: 'solid 3px transparent',
    borderRadius: '45px',
    '&::before': {
      content: '""',
      color: '#fff',
      position: 'absolute',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      zIndex: '-1',
      margin: '-5px',
      borderRadius: '45px',
      background: 'linear-gradient(to right, #7353E5, #CE4DA4, #CE4DA4)',
    },
    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(1.05)',
      transition: 'all 800ms cubic-bezier(0.19, 1, 0.22, 1)',
    },
    [theme.breakpoints.down('lg')]: {
      padding: '7px 100px',
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '20px',
      // padding: '7px 0px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      padding: '10px 12px',
      fontSize: '16px',
    },
  },
}))

const Newsletter = () => {
  const classes = useStyle()
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
        // borderBottom: `2px solid ${theme.palette.secondary.main}`
      },
      // '&:hover:not($disabled):not($focused):not($error):before': {
      //   borderBottom: '2px solid rgba(255, 91, 202, 1)',
      // },
    },
  })(TextField)

  // AOS initialization
  useEffect(() => {
    AOS.init()
  }, [])

  // Email functionality
  const form = useRef()

  const sendEmail = async (e) => {
    e.preventDefault()

    const res = await fetch(`/api/newsletterEmailCredentials`)
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
      <Container maxWidth="xl" data-aos="fade-up" data-aos-duration="900">
        <Box className={classes.mainBox}>
          <Box data-aos="zoom-in" data-aos-duration="1000" className={classes.subBox}>
            <Typography variant="h5" color="white" className={classes.newsletterTitle}>
              Get Our Newsletter
            </Typography>
            <Typography
              variant="subtitle1"
              color="#FFFFFF80"
              className={classes.newsletterSubTitle}>
              Keep up with our latest news and events. Subscribe to our newsletter.
            </Typography>
          </Box>
          <Box className={classes.subBox}>
            <form ref={form} onSubmit={sendEmail}>
              <WhiteTextField
                required
                fullWidth
                variant="standard"
                label="Name"
                name="name"
                className={classes.rightElements}
                InputLabelProps={{
                  style: { color: '#fff' },
                }}
              />
              <WhiteTextField
                required
                fullWidth
                variant="standard"
                label="Email"
                name="email"
                className={classes.rightElements}
                InputLabelProps={{
                  style: { color: '#fff' },
                }}
              />
              <Button type="submit" className={(classes.rightElements, classes.button)}>
                Subscribe
              </Button>
            </form>
          </Box>
        </Box>
      </Container>
      <CustomAlert open={popupError} severity={severity} msg={errorMessage} close={setPopupError} />
    </>
  )
}

export default Newsletter
