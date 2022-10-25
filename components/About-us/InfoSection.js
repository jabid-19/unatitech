import React, { useEffect } from 'react'
import { Container, Box, Typography, IconButton, Link } from '@mui/material'
import { makeStyles } from '@mui/styles'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import AOS from 'aos'
import 'aos/dist/aos.css'

const useStyles = makeStyles((theme) => ({
  infoSection: {
    // marginTop: '100px',
    padding: '100px',
    color: '#fff',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      margin: '50px 0',
      padding: '10px',
    },
  },

  firstHeading: {
    // fontFamily: 'Verdana',
    fontSize: '70px',
    fontWeight: '700',
    background: '-webkit-linear-gradient(0deg,#CE4DA4, #7353E5)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '50px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '10px',
      fontSize: '2rem',
    },
  },
  headingText: {
    // fontFamily: 'Verdana',
    fontSize: '25px',
    fontWeight: '400',
    lineHeight: '39px',
    color: 'rgba(229, 229, 229, 0.5)',
    letterSpacing: '1px',
    [theme.breakpoints.down('xl')]: {
      width: '100%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      lineHeight: '25px',
      fontSize: '1rem',
    },
  },
}))

const InfoSection = () => {
  const classes = useStyles()

  useEffect(() => {
    //initialize aos
    AOS.init()
  }, [])

  return (
    <Container
      data-aos="zoom-out"
      data-aos-duration="900"
      maxWidth="xl"
      className={classes.infoSection}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
        }}>
        <Link href="/">
          <IconButton
            size="large"
            sx={{
              border: '2px solid #9f50c5',
              // background: '-webkit-linear-gradient(0deg,#CE4DA4, #7353E5)',
            }}>
            <ArrowBackIcon
              fontSize="lg"
              sx={{
                color: '#9f50c5',
              }}
            />
          </IconButton>
        </Link>
      </Box>
      <Typography variant="h2" className={classes.firstHeading}>
        About Us
      </Typography>
      <Typography variant="h5" className={classes.headingText}>
        We are here to use our enthusiasm for technology to bring success and happiness to our
        clients and staff while also providing high-growth opportunities for rewarding employment
        and thereby benefitting humanity.
      </Typography>
    </Container>
  )
}

export default InfoSection
