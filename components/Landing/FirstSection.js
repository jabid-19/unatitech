import React, { useEffect } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Grid } from '@mui/material'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import Divider from '@mui/material/Divider'
import { makeStyles } from '@mui/styles'
import AOS from 'aos'
import 'aos/dist/aos.css'

const useStyles = makeStyles((theme) => ({
  root: {
    // minHeight: '100vh',
    marginTop: '170px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '145px',
    },
  },
  card: {
    position: 'relative',
    // margin: '95px 100px 150px 85px',
    // backgroundColor: 'rgba(24, 22, 32, 1)',
    backgroundColor: 'rgba(24, 22, 32, 1)',
    backgroundImage: "url('/images/landing-section/landing-ellipse.webp')",
    backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'right',
    backgroundSize: '100% auto',
    backgroundAttachment: 'fixed',
    border: '1px solid rgba(255, 255, 255, 0.07)',
    boxShadow: '10px 10px 50px rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(100px)',
    borderRadius: '30px',
    // '&.MuiCard-root:before': {
    //   content: '" "',
    //   display: 'block',
    //   position: 'absolute',
    //   left: '30%',
    //   top: '8%',
    //   width: '60%',
    //   height: '100%',
    //   opacity: '0.3',
    //   backgroundColor: 'rgba(24, 22, 32, 1)',
    //   backgroundImage: "url('/images/landing-section/landing-ellipse.png')",
    //   backgroundRepeat: 'no-repeat',
    //   backgroundPosition: 'right',
    //   backgroundSize: 'cover',

    //   [theme.breakpoints.up('lg')]: {
    //     top: '0',
    //   },
    //   [theme.breakpoints.down('lg')]: {
    //     top: '0',
    //     left: '0',
    //   },
    // },
    [theme.breakpoints.down('xl')]: {
      margin: '95px 30px 30px 30px',
    },
    [theme.breakpoints.down('md')]: {
      backgroundColor: 'rgba(24, 22, 32, 1)',
      backgroundImage: "url('/images/landing-section/landing-ellipse.png')",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right',
      backgroundSize: 'cover',
      margin: '0',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0',
    },
  },
  cardContent: {
    padding: '88px 84px 100px 52px',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      padding: '50px 40px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '40px 20px',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '30px 15px 20px 15px',
    },
  },
  firstHeading: {
    // fontFamily: 'Verdana',
    fontSize: '70px',
    fontWeight: '700',
    background: '-webkit-linear-gradient(0deg,#CE4DA4, #7353E5)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '20px',

    [theme.breakpoints.down('sm')]: {
      marginBottom: '10px',
      fontSize: '2rem',
    },
  },
  secondHeading: {
    // fontFamily: 'Verdana',
    // fontSize: '60px',
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 1)',
    [theme.breakpoints.down('sm')]: {
      fontSize: '25px',
    },
  },
  headingText: {
    // fontFamily: 'Verdana',
    fontSize: '22px',
    fontWeight: '400',
    width: '818.23px',
    lineHeight: '35px',
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
  expYears: {
    // fontFamily: 'Verdana',
    fontWeight: '400px',
    fontSize: '50px',
    lineHeight: '61px',
    background: '-webkit-linear-gradient(0deg,#CE4DA4, #7353E5)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      fontSize: '1.8rem',
    },
  },
  expAddIconContainer: {
    paddingTop: '10px',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '16px',
    },
  },
  expAddIcon: {
    fontWeight: '500',
    fontSize: '30px',
    color: 'rgba(255, 255, 255, 0.5)',
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
    },
  },
  expDesc: {
    // fontFamily: 'Verdana',
    fontWeight: '400',
    fontSize: '17px',
    lineHeight: '21px',
    color: 'rgba(255, 255, 255, 0.5)',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      fontSize: '1rem',
    },
  },
  expDesc: {
    // fontFamily: 'Verdana',
    fontWeight: '400',
    fontSize: '17px',
    lineHeight: '21px',
    color: 'rgba(255, 255, 255, 0.5)',
  },
  dividerLineContainer: {
    position: 'relative',
    margin: 'auto',
    animation: 'rotateLine 1.5s',
    [theme.breakpoints.down('lg')]: {
      display: 'none',
    },
  },
  dividerLine: {
    width: '351px',
    height: '1.5px',
    background: '-webkit-linear-gradient(180deg,#FF5BCA, #7353E5)',
    WebkitTextFillColor: 'transparent',
    transform: 'rotate(-58.32deg)',
    marginBottom: '81px',
  },
  lowerSection: {
    paddingTop: '104px',
    paddingBottom: '73px',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '50px',
      paddingBottom: '50px',
    },
  },
}))

const FirstSection = () => {
  // style hook
  const classes = useStyles()

  useEffect(() => {
    //initialize aos
    AOS.init()
  }, [])

  return (
    <Container maxWidth="xl" className={classes.root} id="landing">
      <Box className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Grid container>
            <Grid item lg={8} xl={9} xs={12}>
              <Box>
                {/* <Typography
                  variant="h3"
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  className={classes.secondHeading}>
                  Your Full Cycle
                </Typography> */}
                <Typography
                  variant="h2"
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  gutterBottom
                  className={classes.firstHeading}>
                  Unatitech Ltd.
                </Typography>

                <Typography
                  variant="body1"
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  className={classes.headingText}>
                  Unatitech provides Product/Software Development-as-a-Service which empowers your
                  business to capture digital opportunities that provide value to your business and
                  end-users.
                  {/* Our commitment is to deliver innovative IT services and solutions that
                  will enable you to focus on achieving growth with the confidence that your IT
                  strategy is aligned with your ambitions. */}
                </Typography>
              </Box>
              <Box className={classes.lowerSection}>
                <Grid container>
                  <Grid item data-aos="zoom-in" data-aos-duration="1500" sx={{ width: '198px' }}>
                    <Box>
                      <Grid container>
                        <Grid item>
                          <Typography variant="h3" className={classes.expYears}>
                            70
                          </Typography>
                        </Grid>
                        <Grid item className={classes.expAddIconContainer}>
                          <AddOutlinedIcon className={classes.expAddIcon} />
                        </Grid>
                      </Grid>
                      <Typography vairent="body2" className={classes.expDesc}>
                        Years of combined experience!
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item data-aos="zoom-in" data-aos-duration="1500" sx={{ width: '198px' }}>
                    <Box>
                      <Grid container>
                        <Grid item>
                          <Typography variant="h3" className={classes.expYears}>
                            15
                          </Typography>
                        </Grid>
                        <Grid item className={classes.expAddIconContainer}>
                          <AddOutlinedIcon className={classes.expAddIcon} />
                        </Grid>
                      </Grid>
                      <Typography vairent="body2" className={classes.expDesc}>
                        completed and delivered projects!
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item data-aos="zoom-in" data-aos-duration="1500" sx={{ width: '198px' }}>
                    <Box>
                      <Grid container>
                        <Grid item>
                          <Typography variant="h3" className={classes.expYears}>
                            10
                          </Typography>
                        </Grid>
                        <Grid item className={classes.expAddIconContainer}>
                          <AddOutlinedIcon className={classes.expAddIcon} />
                        </Grid>
                        <Typography vairent="body2" className={classes.expDesc}>
                          super satisfied customers!
                        </Typography>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid
              data-aos="fade-down-left"
              data-aos-duration="1100"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              item
              className={classes.dividerLineContainer}
              lg={4}
              xl={3}>
              <div className={classes.dividerLine}></div>
              <div className={classes.dividerLine}></div>
              <div className={classes.dividerLine}></div>

              {/* <Divider className={classes.dividerLine} />
              <Divider className={classes.dividerLine} />
              <Divider className={classes.dividerLine} /> */}
            </Grid>
          </Grid>
        </CardContent>
      </Box>
    </Container>
  )
}

export default FirstSection
