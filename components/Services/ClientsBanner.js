import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Image from 'next/image'
import imageLoader from '../../helper/imageLoader'
import clientIcon1 from '../../public/images/customer-section/image 1.png'
import clientIcon2 from '../../public/images/customer-section/image 2.png'
import clientIcon3 from '../../public/images/customer-section/image 3.png'
import clientIcon4 from '../../public/images/customer-section/image 4.png'
import clientIcon5 from '../../public/images/customer-section/image 5 (Traced).png'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const useStyle = makeStyles((theme) => ({
  gradientBannerBox: {
    padding: '1px',
    // maxWidth: '95%',
    background: 'linear-gradient(to left, #FF5BCA, #7353E5)',
    borderRadius: '21px',
    marginTop: '100px',
    [theme.breakpoints.down('sm')]: {
      width: '85%',
    },
  },
  gradientBanner: {
    background: '#13121a',
    borderRadius: '21px',
    padding: '50px 70px',
    [theme.breakpoints.down('sm')]: {
      padding: '5px',
    },
  },
  gradientText: {
    textAlign: 'center',
    fontSize: '3rem',
    marginBottom: '10px',
    background: '-webkit-linear-gradient(-6deg, #FF5BCA, #7353E5)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    [theme.breakpoints.down('md')]: {
      fontSize: '2rem',
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: 0,
      fontSize: '1.6rem',
    },
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '60px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '20px',
    },
  },
}))

export default function ClientsBanner() {
  const { gradientBanner, gradientBannerBox, gradientText, iconContainer } = useStyle()

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <Container
        id="reference"
        maxWidth="xl"
        data-aos="fade-up"
        data-aos-duration="1000"
        className={gradientBannerBox}>
        <Card sx={{ boxShadow: 5 }} className={gradientBanner}>
          <CardContent>
            <Typography className={gradientText} variant="h6">
              A Selection Of Valued Customers
            </Typography>
            <Grid rowSpacing={5} textAlign="center" className={iconContainer} container>
              <Grid item lg={2} md={4} xs={6}>
                <Image
                  alt="client icon"
                  loader={imageLoader}
                  src={clientIcon1}
                  width={'100'}
                  height={'110'}
                />
              </Grid>
              <Grid item lg={2} md={4} xs={6}>
                <Image
                  alt="client icon"
                  loader={imageLoader}
                  src={clientIcon2}
                  width={'96'}
                  height={'120'}
                />
              </Grid>
              <Grid item lg={2} md={4} xs={6}>
                <Image
                  alt="client icon"
                  loader={imageLoader}
                  src={clientIcon3}
                  width={'96'}
                  height={'100'}
                />
              </Grid>
              <Grid item lg={2} md={4} xs={6}>
                <Image
                  alt="client icon"
                  loader={imageLoader}
                  src={clientIcon4}
                  width={'130'}
                  height={'100'}
                />
              </Grid>
              <Grid item lg={2} md={4} xs={6}>
                <Image
                  alt="client icon"
                  loader={imageLoader}
                  src={clientIcon5}
                  width={'80'}
                  height={'92'}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </>
  )
}
