import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Container, AppBar, Box, IconButton, Button, Fab } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import { makeStyles } from '@mui/styles'
import imageLoader from '../../helper/imageLoader'
import Sidebar from './Sidebar'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-scroll'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingTop: '10px',
    // minHeight: '120px',
    backgroundColor: 'rgba(24, 22, 32, 0.5)',
    backdropFilter: 'blur(60px)',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoSection: {
    flex: '1',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  logo: {
    cursor: 'pointer',
  },
  links: {
    display: 'flex',
    flexDirection: 'row',
    flex: '2',
    justifyContent: 'space-around',

    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    // [theme.breakpoints.down('md')]: {
    //   width: '60%',
    //   flex: '2',
    // },
  },

  linksButton: {
    minWidth: '100px',
    my: 2,
    color: 'white',
    fontSize: '16px',
    textTransform: 'capitalize',
    transition: 'transform .5s',
    '& :hover': {
      color: 'rgba(255, 91, 202, 1)',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '13px',
    },
  },
  chatSection: {
    flex: '1',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  btnBorder: {
    position: 'relative',
    background: 'linear-gradient(to left, #FF5BCA, #7353E5)',
    borderRadius: '50px',
    padding: '1px',
    boxShadow: '0px 20px 50px rgba(0, 0, 0, 0.5)',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  chatBtn: {
    minWidth: '200px',
    color: '#ffffff',
    textTransform: 'capitalize',
    fontSize: '14.5px',
    padding: '8px 20px',
    borderRadius: '50px',
    background: 'rgba(19, 17, 26, 1)',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  mobileMenu: {
    display: 'none',
    color: 'white',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
    },
  },
  menuIcon: {
    color: 'white',
  },
  floatingBtn: {
    display: 'none',
    position: 'fixed',
    bottom: '50px',
    right: '50px',
    zIndex: '99',
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  },
}))

const Nav = ({ scrollToTop, scrollToServices, scrollToVision, scrollToBanner }) => {
  const classes = useStyles()
  const theme = useTheme()
  const belowMedium = useMediaQuery(theme.breakpoints.down('md'))

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  // AOS initialization
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <Box>
      <AppBar className={classes.appBar} position="fixed">
        <Container className={classes.navContainer} maxWidth="xl">
          <Box className={classes.logoSection}>
            <Link to="landing" smooth={true} offset={-200} duration={50}>
              {belowMedium ? (
                <Image
                  priority
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  loader={imageLoader}
                  src={'./logo.webp'}
                  alt="Logo of Unatitech"
                  width={'85'}
                  height={'75'}
                  className={classes.logo}
                  // onClick={scrollToTop}
                />
              ) : (
                <Image
                  priority
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  loader={imageLoader}
                  src={'./logo.webp'}
                  alt="Logo of Unatitech"
                  width={'107'}
                  height={'98'}
                  className={classes.logo}
                  // onClick={scrollToTop}
                />
              )}
            </Link>
          </Box>

          <Box className={classes.links}>
            <Link to="services" smooth={true} offset={-200} duration={50}>
              <Button
                data-aos="zoom-in"
                data-aos-duration="1500"
                className={classes.linksButton}
                size="large"
                // onClick={scrollToServices}
              >
                Services
              </Button>
            </Link>
            <Link to="reference" smooth={true} offset={-250} duration={50}>
              <Button
                data-aos="zoom-in"
                data-aos-duration="1500"
                className={classes.linksButton}
                size="large"
                // onClick={scrollToBanner}
              >
                Reference
              </Button>
            </Link>
            <Link to="vision" smooth={true} offset={-100} duration={50}>
              <Button
                data-aos="zoom-in"
                data-aos-duration="1500"
                className={classes.linksButton}
                size="large"
                // onClick={scrollToVision}
              >
                Our vision
              </Button>
            </Link>
            {/* <Button
              data-aos="zoom-in"
              data-aos-duration="1500"
              href="/about-us"
              className={classes.linksButton}
              // onClick={scrollToComponent()}
            >
              About us
            </Button> */}
          </Box>
          {/* Chat button start */}
          <Box className={classes.chatSection}>
            {/* <Box className={classes.btnBorder}>
              <Button
                variant="text"
                className={classes.chatBtn}
                startIcon={
                  <Image
                    loader={imageLoader}
                    src={'./chat.png'}
                    alt="Chat Icon"
                    width={'22'}
                    height={'21'}
                    // sx={{ marginRight: '10px' }}
                  />
                }>
                Let’s have a chat
              </Button>
            </Box> */}
          </Box>

          {/* Mobile View */}
          <Box className={classes.mobileMenu}>
            <IconButton aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
              <MenuIcon className={classes.menuIcon} />
            </IconButton>
            <Sidebar
              open={open}
              handleClose={handleClose}
              scrollToServices={scrollToServices}
              scrollToVision={scrollToVision}
              scrollToBanner={scrollToBanner}
            />
          </Box>
          {/* End Mobile View */}
        </Container>
      </AppBar>

      {/* Floating Chat buttoin */}
      {/* <Box className={classes.floatingBtn}>
        <Fab size="large" color="secondary" aria-label="Let’s have a chat">
          <ChatBubbleOutlineIcon />
        </Fab>
      </Box> */}
    </Box>
  )
}

export default Nav
