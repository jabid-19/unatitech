import React from 'react'
import { useRouter } from 'next/router'
import { makeStyles } from '@mui/styles'
import {
  Box,
  Divider,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
} from '@mui/material'
import DesignServicesIcon from '@mui/icons-material/DesignServices'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import InfoIcon from '@mui/icons-material/Info'
import imageLoader from '../../helper/imageLoader'

const useStyles = makeStyles((theme) => ({
  menuBody: {
    height: '100vh',
    zIndex: '2000 !important',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    '& .MuiPaper-root': {
      width: '200px',
      borderRadius: '30px 0 0 30px',
      background: 'rgba(24, 22, 32, 0.6)',
      backdropFilter: 'blur(70px)',
      // opacity: '0.98',
    },
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '100%',
    maxWidth: 360,
    height: '100%',
    padding: '0px',
    color: '#fff',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  navIcon: {
    color: '#c84da8',
  },

  subLinkItem: {
    color: '#FFFFFF',
  },
}))

const Sidebar = ({ open, handleClose, scrollToServices, scrollToVision, scrollToBanner }) => {
  const router = useRouter()
  const classes = useStyles()

  return (
    <SwipeableDrawer
      disableBackdropTransition={true}
      className={classes.menuBody}
      id="fade-menu"
      anchor="right"
      keepMounted
      open={open}
      onOpen={() => ''}
      onClose={handleClose}>
      <Box mb={2}> </Box>

      <List component="nav" aria-labelledby="nested-list-subheader" className={classes.root}>
        <Box>
          <ListItem
            button
            onClick={() => {
              scrollToServices()
              // handleClose()
            }}>
            <ListItemIcon>
              <DesignServicesIcon className={classes.navIcon} />
            </ListItemIcon>
            <ListItemText primary="Services" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              scrollToBanner()
              // handleClose()
            }}>
            <ListItemIcon>
              <CheckCircleIcon className={classes.navIcon} />
            </ListItemIcon>
            <ListItemText primary="Reference" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              scrollToVision()
              // handleClose()
            }}>
            <ListItemIcon>
              <RemoveRedEyeIcon className={classes.navIcon} />
            </ListItemIcon>
            <ListItemText primary="Our vision" />
          </ListItem>
          <Link className={classes.subLinkItem} href="/about-us">
            <ListItem
              button
              onClick={() => {
                handleClose()
              }}>
              <ListItemIcon>
                <InfoIcon className={classes.navIcon} />
              </ListItemIcon>
              <ListItemText primary="About us" />
            </ListItem>
          </Link>
        </Box>
      </List>
      <Box mb={2}> </Box>
    </SwipeableDrawer>
  )
}

export default Sidebar
