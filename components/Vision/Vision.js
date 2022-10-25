import { makeStyles } from '@mui/styles'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Button, Divider } from '@mui/material'
import { useState } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import CancelIcon from '@mui/icons-material/Cancel'
import parse from 'html-react-parser'

const useStyles = makeStyles((theme) => ({
  main: {
    width: '100%',
    height: 'auto',
    overflow: 'hidden',
    backgroundImage: `url("/images/vision-section/glow.webp")`,
    backgroundPosition: 'center',
    backgroundSize: 'auto',
    backgroundRepeat: 'no-repeat',
    alignItems: 'center',
    paddingTop: '60px',
    paddingBottom: '60px',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '30px',
      paddingBottom: '30px',
    },
  },
  titleCard: {
    color: 'white',
    height: '300px',
    border: 'none',
    padding: '20px',
  },
  visionTitle: {
    color: '#FFFFFF',
    fontSize: '45px',
    fontWeight: 'bold',
    lineHeight: '55px',
  },
  visionCaption: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: '28px',
    marginTop: '20px',
    width: '75%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  spacing: {
    padding: '20px',
  },
  visionCard: {
    display: 'flex',
    minHeight: '300px',
    borderRadius: '18px',
    border: 'none',
    boxShadow: '0px 17.1429px 42.8571px rgba(0, 0, 0, 0.5)',
    backgroundColor: 'transparent',
    '&:hover': {
      // cursor: 'pointer',
      transform: 'scale(1.05)',
      transition: 'all 900ms cubic-bezier(0.19, 1, 0.22, 1)',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      '&:hover': {
        transform: 'scale(1)',
      },
    },
  },
  cardTitle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: '1.3rem',
    lineHeight: '1.8rem',
    marginLeft: '10px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '5px',
      marginTop: '5px',
    },
  },
  cardCaption: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: '1rem',
    lineHeight: '1.5rem',
    marginTop: '20px',
    marginLeft: '10px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '5px',
      marginTop: '10px',
    },
  },
  cardLeft: {
    width: '50%',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#1D1A27',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  cardRight: {
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  dialog: {
    '& .MuiDialog-paper': {
      background: 'rgba( 0, 0, 0, .8 )',
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
}))

const captions = [
  'We are your technology growth partner, committed to helping you execute growth and providing IT services and solutions that are efficient and economical that will scale in pace with your business.',

  'We believe that by seeking and clarifying purpose in our deliverables, we will provide innovative and robust IT services and solutions that enable our customers to build a purposeful business that creates long-term value within the economy, society and ecosystem.',

  `At Neovotech we take a human-centered, outcomes-led approach in shaping our offering. Only by truly understanding 'needs to be solved' are we able to achieve transformational change and be part of unleashing great potential in people and organizations. <br /> <br /> Our ambition is to: <br /> 1) build exceptional products that improves lives, <br /> 2) create opportunities for businesses to do things better, and to do better things, <br /> 3) commit to being life-long learners in order to navigate and evolving technological environment and generously share our knowledge with colleagues and customers.`,
]

function OurVision() {
  useEffect(() => {
    AOS.init()
  }, [])

  const classes = useStyles()
  // console.log(captions[0])

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

  // State to manage the button ID
  const [buttonId, setButtonId] = useState(null)

  // functionality to generate the caption and title text
  let titleText = ''

  let captionText = ''

  const generateCaptionText = () => {
    if (buttonId === 0) {
      captionText = captions[0]
      titleText = 'Your success is our success'
    }
    if (buttonId === 1) {
      captionText = captions[1]
      titleText = 'Purposeful Action'
    }
    if (buttonId === 2) {
      captionText = captions[2]
      titleText = 'Unleashing Potential with Outstanding Technology'
    }
  }

  generateCaptionText()

  return (
    <Container maxWidth="xl" sx={{ marginTop: '100px' }} id="vision">
      <Grid container className={classes.main}>
        {/* Section Title Card Start*/}
        <Grid item md={6} sm={12} xs={12} className={classes.titleCard}>
          <Box data-aos="zoom-in" data-aos-duration="1000">
            <Typography variant="h5" className={classes.visionTitle}>
              Our vision
            </Typography>
            <Typography variant="body2" className={classes.visionCaption}>
              In our way to become your full cycle technology partner we have some visions that we
              want to achieve.
            </Typography>
          </Box>
        </Grid>
        {/* Section Title Card End*/}

        {/* Dialog goes here */}
        <Dialog
          className={classes.dialog}
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
            <Typography
              sx={{
                textAlign: 'left',
                marginX: '20px',
                marginBottom: '20px',
                paddingBottom: '16px',
                borderBottom: '2px solid  #ff5bca',
              }}
              variant="h6">
              {titleText}
            </Typography>
            {/* <Divider /> */}
            <Typography
              sx={{
                textAlign: 'left',
                margin: '20px',
                lineHeight: '2rem',
                wordSpacing: '0.1rem',
                color: '#c4c4c9',
              }}
              variant="body1">
              {parse(captionText)}
            </Typography>
          </DialogContent>
        </Dialog>

        {/* Vision Card - 1 Start */}
        <Grid item md={6} sm={12} xs={12} data-aos="zoom-in" data-aos-duration="1000">
          <Box className={classes.spacing}>
            <Card className={classes.visionCard}>
              <CardContent className={classes.cardLeft}>
                <Typography variant="h6" className={classes.cardTitle}>
                  Your Success Is Our Success
                </Typography>
                <Typography variant="body2" className={classes.cardCaption}>
                  {parse(captions[0].slice(0, 78))}...
                  <Button
                    onClick={() => {
                      handleClickOpen()
                      setButtonId(0)
                    }}
                    sx={{
                      padding: '0',
                      textTransform: 'none',
                      color: '#fff',
                      fontSize: '0.875rem',
                    }}>
                    Read More
                  </Button>
                </Typography>
              </CardContent>
              <Box className={classes.cardRight}>
                <CardMedia
                  component="img"
                  image="/images/vision-section/Group 86.png"
                  alt="alt"
                  className={classes.cardImage}
                />
              </Box>
            </Card>
          </Box>
        </Grid>
        {/* Vision Card - 1 End */}

        {/* Vision Card - 2 Start */}
        <Grid item md={6} sm={12} xs={12} data-aos="zoom-in" data-aos-duration="1500">
          <Box className={classes.spacing}>
            <Card className={classes.visionCard}>
              <CardContent className={classes.cardLeft}>
                <Typography variant="h6" className={classes.cardTitle}>
                  Purposeful Action
                </Typography>
                <Typography variant="body2" className={classes.cardCaption}>
                  {parse(captions[1].slice(0, 98))}...
                  <Button
                    onClick={() => {
                      handleClickOpen()
                      setButtonId(1)
                    }}
                    sx={{
                      padding: '0',

                      textTransform: 'none',
                      color: '#fff',
                      fontSize: '0.875rem',
                    }}>
                    Read More
                  </Button>
                </Typography>
              </CardContent>
              <Box className={classes.cardRight}>
                <CardMedia
                  component="img"
                  image="/images/vision-section/Group 88.png"
                  alt="alt"
                  className={classes.cardImage}
                />
              </Box>
            </Card>
          </Box>
        </Grid>
        {/* Vision Card - 2 End */}

        {/* Vision Card - 3 Start */}
        <Grid item md={6} sm={12} xs={12} data-aos="zoom-in" data-aos-duration="1000">
          <Box className={classes.spacing}>
            <Card className={classes.visionCard}>
              <CardContent className={classes.cardLeft}>
                <Typography variant="h6" className={classes.cardTitle}>
                  Unleashing Potential With Outstanding Technology
                </Typography>
                <Typography variant="body2" className={classes.cardCaption}>
                  {parse(captions[2].slice(0, 85))}...
                  <Button
                    onClick={() => {
                      setButtonId(2)
                      handleClickOpen()
                    }}
                    sx={{
                      padding: '0',
                      textTransform: 'none',
                      color: '#fff',
                      fontSize: '0.875rem',
                    }}>
                    Read More
                  </Button>
                </Typography>
              </CardContent>
              <Box className={classes.cardRight}>
                <CardMedia
                  component="img"
                  image="/images/vision-section/Group 87.png"
                  alt="alt"
                  className={classes.cardImage}
                />
              </Box>
            </Card>
          </Box>
        </Grid>
        {/* Vision Card - 3 End */}
      </Grid>
    </Container>
  )
}

export default OurVision
