import React, { useEffect } from 'react'
import { Box, Container, Typography, Grid, Badge, Avatar, Link, Tooltip } from '@mui/material'
import { makeStyles } from '@mui/styles'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import AOS from 'aos'
import 'aos/dist/aos.css'

const useStyles = makeStyles((theme) => ({
  card: {
    position: 'relative',
    // margin: '95px 100px 150px 85px',
    // background: 'rgba(24, 22, 32, 0.6)',
    border: '1px solid rgba(255, 255, 255, 0.07)',
    boxShadow: '10px 10px 50px rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(100px)',
    borderRadius: '30px',
    backgroundColor: 'rgba(24, 22, 32, 1)',
    backgroundImage: "url('/images/vision-section/glow.webp')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',

    // [theme.breakpoints.down('xl')]: {
    //   margin: '95px 30px 30px 30px',
    // },
    [theme.breakpoints.down('sm')]: {
      margin: '0',
    },
  },
  main: {
    height: 'auto',
    padding: '0 0 100px 0',
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
    },
  },
  profileGrid: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
    padding: '20px',
    marginTop: '60px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      padding: '0 0',
    },
    [theme.breakpoints.down('md')]: {
      justifyContent: 'flex-start',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '50px',
    },
  },
  avatar: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    border: '2px solid white',
    [theme.breakpoints.down('md')]: {
      width: '120px',
      height: '120px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '150px',
      height: '150px',
    },
  },
  infoBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    // marginLeft: '15px',
    marginTop: '15px',
    color: 'white',
    [theme.breakpoints.down('xs')]: {
      marginTop: '30px',
      marginLeft: '0px',
      textAlign: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      marginTop: '30px',
      marginLeft: '0px',
    },
  },

  name: {
    fontSize: '1.1rem',
    fontWeight: '400',
  },
  title: {
    fontSize: '1rem',
    // fontStyle: 'italic',
    fontWeight: '300',
    margin: '10px 0 7px 0',
  },
  info: {
    fontSize: '0.9rem',
    fontStyle: 'italic',
    fontWeight: '300',
    margin: '0 0 7px 0',
    // height: '0.9rem',
  },
  email: {
    fontSize: '1rem',
    fontWeight: '200',
    color: '#eeeeef !important',
  },
  information: {
    marginTop: '15px',
    // width: '16vw',
    fontWeight: '300',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
    [theme.breakpoints.down('md')]: {
      width: 'auto',
    },
  },
}))

const EmployeeSection = () => {
  const classes = useStyles()

  useEffect(() => {
    //initialize aos
    AOS.init()
  }, [])

  const employees = [
    // {
    //   id: 1,
    //   name: 'Saleh Rakib Md',
    //   position: 'CTO',
    //   email: 'rsa@eucaps.com',
    //   info: '',
    //   avatar: '/images/aboutPage/employees/rakib.jfif',
    //   linkedIn: 'https://www.linkedin.com/in/saleh-rakib-md-72283782/',
    // },
    {
      id: 1,
      name: 'Noreen Fuad',
      position: 'CEO',
      email: 'noreen@neovotech.se',
      info: '',
      avatar: '/images/aboutPage/employees/noreen.jpg',
      linkedIn: 'https://www.linkedin.com/in/noreen-f-23674a/',
    },

    {
      id: 2,
      name: 'Md. Mahmudul Haque',
      position: 'CTO (ML Team)',
      email: 'arfan@neovotech.se',
      info: '',
      avatar: '/images/aboutPage/employees/arfan.jpg',
      linkedIn: 'https://www.linkedin.com/in/md-mahmudul-haque-8a5484b2',
    },

    {
      id: 3,
      name: 'Mir Tanvir Islam',
      position: 'CTO (Web Team)',
      email: 'tanvir@neovotech.se',
      info: '',
      avatar: '/images/aboutPage/employees/tanvir.jpg',
      linkedIn: 'https://www.linkedin.com/in/mir-tanvir-islam/',
    },

    {
      id: 4,
      name: 'Umar Faruq Chowdhury ',
      position: 'Tech Lead (Backend)',
      email: 'umar@neovotech.se',
      info: '',
      avatar: '/images/aboutPage/employees/umar.jpg',
      linkedIn: 'https://www.linkedin.com/in/umarfchy/',
    },
    {
      id: 5,
      name: 'Jabid Hasan',
      position: 'Tech Lead (Frontend)',
      email: 'jabid@neovotech.se',
      info: '',
      avatar: '/images/aboutPage/employees/jabid.jpg',
      linkedIn: 'https://www.linkedin.com/in/jabid-hasan/',
    },
    {
      id: 6,
      name: 'Md. Hasnat Alam',
      position: 'Tech Lead (Full Stack)',
      email: 'hasnat@neovotech.com',
      info: '',
      avatar: '/images/aboutPage/employees/hasanat.jpg',
      linkedIn: 'https://www.linkedin.com/in/hasnat-fahim-77b5371a8/',
    },

    {
      id: 8,
      name: 'Shafar Ahmed',
      position: 'Managing Director',
      email: 'shafar@neovotech.se',
      info: '',
      avatar: '/images/aboutPage/employees/shafar.png',
      linkedIn: 'https://www.linkedin.com/in/safer-ahmed-momin',
    },
    {
      id: 9,
      name: 'Niloy Saha Roy',
      position: 'Data Scientist',
      email: 'niloy@neovotech.se',
      info: '',
      avatar: '/images/aboutPage/employees/niloy.jpg',
      linkedIn: 'https://www.linkedin.com/in/niloysaharoy/',
    },
    {
      id: 10,
      name: 'MD Raisul Islam',
      position: 'Frontend Developer',
      email: 'raisul@neovotech.se',
      info: '',
      avatar: '/images/aboutPage/employees/raisul.jpg',
      linkedIn: 'https://www.linkedin.com/in/mdraisulislam24/',
    },
    {
      id: 11,
      name: 'MD. Minjurul Haque',
      position: 'Full Stack Developer',
      email: 'minju@neovotech.se',
      info: '',
      avatar: '/images/aboutPage/employees/minjurul.jpg',
      linkedIn: 'https://www.linkedin.com/in/minjurul-rahmam/',
    },
    {
      id: 12,
      name: 'Sudipta Mandal',
      position: 'Full Stack Developer',
      email: 'sudipta@neovotech.se',
      info: '',
      avatar: '/images/aboutPage/employees/sudipta.jpg',
      linkedIn: 'https://www.linkedin.com/in/mrmandal/',
    },
    {
      id: 13,
      name: ' Azizul Hakim Tareq',
      position: 'Full Stack Developer',
      email: 'tareq@neovotech.se',
      info: '',
      avatar: '/images/aboutPage/employees/azizul.jpg',
      linkedIn: 'https://www.linkedin.com/in/azizultareq/',
    },
    {
      id: 14,
      name: 'Jawadur Rahim',
      position: 'Backend Developer',
      email: 'jawad@neovotech.se',
      info: '',
      avatar: '/images/aboutPage/employees/jawadur.jpg',
      linkedIn: 'https://www.linkedin.com/in/jawadur-rahim-658a071b6/',
    },
    {
      id: 15,
      name: 'Sayef Eshan',
      position: 'Full Stack Developer',
      email: 'sayef@neovotech.se',
      info: '',
      avatar: '/images/aboutPage/employees/sayef.jpg',
      linkedIn: 'https://www.linkedin.com/in/sayef-sarkar-eashan-ab0762128/',
    },
    {
      id: 16,
      name: 'Fahim Uddin',
      position: 'Frontend Developer',
      email: 'fahim@neovotech.se',
      info: '',
      avatar: '/images/aboutPage/employees/fahim.jpg',
      linkedIn: 'https://www.linkedin.com/in/fahimu10',
    },

    {
      id: 17,
      name: 'Md. Ekramul Haque Jiad',
      position: 'Frontend Developer',
      email: 'jiad@neovotech.se',
      info: '',
      avatar: '/images/aboutPage/employees/jiad.jpg',
      linkedIn: 'https://www.linkedin.com/in/calmjiad',
    },
    {
      id: 18,
      name: 'Tansib Al Muhaimin',
      position: 'Frontend Developer',
      email: 'tansib@neovotech.se',
      info: '',
      avatar: '/images/aboutPage/employees/tansib.jpg',
      linkedIn: 'https://www.linkedin.com/in/tansib-al-muhaimin/',
    },
  ]

  return (
    <Box data-aos="zoom-in" data-aos-duration="100">
      {/* <Card variant="outlined" > */}
      <Container maxWidth="xl" className={classes.card}>
        <Box
          data-aos="fade-up"
          data-aos-duration="900"
          sx={{
            color: '#fff',
            textAlign: 'center',
            marginTop: '50px',
          }}>
          <Typography variant="h3">Our Team</Typography>
        </Box>

        <Grid container className={classes.main}>
          {employees.map((employee) => {
            return (
              <Grid item md={4} sm={6} xs={12} className={classes.profileGrid} key={employee.id}>
                <Box
                  data-aos="fade-up"
                  data-aos-duration="900"
                  sx={{
                    minHeight: '320px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '20px',
                  }}>
                  <Avatar src={employee.avatar} className={classes.avatar}></Avatar>
                  <Box className={classes.infoBox}>
                    <Typography className={classes.name}>{employee.name}</Typography>
                    <Typography className={classes.title}>{employee.position}</Typography>
                    <Typography className={classes.info}>
                      {employee.info.length !== 0 ? `" ${employee.info} "` : ''}
                    </Typography>

                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        marginTop: '8px',
                        justifyContent: 'center',
                      }}>
                      {employee.linkedIn.length !== 0 ? (
                        <a target="_blank" rel="noopener noreferrer" href={employee.linkedIn}>
                          <LinkedInIcon sx={{ marginLeft: '-1px', marginRight: '10px' }} />
                        </a>
                      ) : (
                        ''
                      )}

                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`mailto: ${employee.email}`}>
                        <Tooltip title={employee.email} placement="right">
                          <MailOutlineIcon />
                        </Tooltip>
                      </a>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            )
          })}
        </Grid>
      </Container>
      {/* </Card> */}
    </Box>
  )
}

export default EmployeeSection
