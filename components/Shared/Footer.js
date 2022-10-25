import { Box, Container, Divider, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Link from 'next/link'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const useStyle = makeStyles((theme) => ({
  divider: {
    background: 'rgba(255, 91, 202, 1)',
    marginTop: '100px',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '30px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      marginTop: '30px',
    },
  },
  footerText: {
    fontSize: '16px',
    lineHeight: '19px',
    textAlign: 'center',
    opacity: '0.4',
    [theme.breakpoints.down('sm')]: {
      margin: 'auto',
      fontSize: '1rem',
    },
  },
  footerIcon: {
    width: '350px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'space-between',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      // width: '100px',
      // display: 'flex',
      margin: 'auto',
      marginBottom: '20px',
    },
  },
  socialIcon: {
    paddingRight: '2px',
    cursor: 'pointer',
    transition: 'transform .5s',
    '& :hover': {
      color: 'rgba(255, 91, 202, 1)',
    },
  },
}))

const Footer = () => {
  const classes = useStyle()
  return (
    <Container sx={{ width: '100%', marginBottom: '30px' }} maxWidth="xl">
      <Divider variant="middle" className={classes.divider} />
      <Box className={classes.footer}>
        <Typography variant="body1" color="rgba(255, 255, 255, 1)" className={classes.footerText}>
          2021 copyright all rights reserved
        </Typography>
        <Box className={classes.footerIcon}>
          Organization number: 559368-7808
          {/* <Link href="#">
            <a className={classes.socialIcon}>
              <InstagramIcon />
            </a>
          </Link>

          <Link href="#">
            <a className={classes.socialIcon}>
              <TwitterIcon />
            </a>
          </Link>

          <Link href="#">
            <a className={classes.socialIcon}>
              <LinkedInIcon />
            </a>
          </Link> */}
        </Box>
      </Box>
    </Container>
  )
}

export default Footer
