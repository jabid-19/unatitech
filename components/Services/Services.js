import { Box, Container, Grid, Typography, TextField, Tooltip } from '@mui/material'
import { makeStyles, withStyles } from '@mui/styles'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly'
import LanguageIcon from '@mui/icons-material/Language'
import ModelTrainingIcon from '@mui/icons-material/ModelTraining'
import SearchIcon from '@mui/icons-material/Search'
import VerticalSplitIcon from '@mui/icons-material/VerticalSplit'
import CodeIcon from '@mui/icons-material/Code'
import GroupsIcon from '@mui/icons-material/Groups'
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects'
import FactCheckIcon from '@mui/icons-material/FactCheck'
import HailIcon from '@mui/icons-material/Hail'
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices'
import AddTaskIcon from '@mui/icons-material/AddTask'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import CreateMeeting from './CreateMeeting'
import ServiceDetails from './ServiceDetails'
import {
  card1Details,
  card2Details,
  card3Details,
  card4Details,
  card5Details,
  card6Details,
  card7Details,
} from './ServiceDetailsData'

// const servicesData = [
//   {
//     id: '1',
//     icon: <MobileFriendlyIcon fontSize="large" />,
//     title: 'Mobile App Development',
//     summary:
//       'We offer everything from concept development to design, development and launch. Our team consists of experienced developers, designers and project managers who specialize in app development.',
//   },
//   {
//     id: '2',
//     icon: <LanguageIcon fontSize="large" />,
//     title: 'Web Development',
//     summary:
//       'We build our web apps using the latest technology available on the market, such as React JS, Gatsby JS or Next JS. We are specialists in frontend development. We build all kinds of projects, from simple to advanced websites.',
//   },
//   {
//     id: '3',
//     icon: <ModelTrainingIcon fontSize="large" />,
//     title: 'DevOps',
//     summary:
//       'Our DevOps developer helps you with mission critical software development, ie an application or a series of related applications that must work continuously for a company or a segment of a company to succeed.',
//   },
//   {
//     id: '4',
//     icon: <SearchIcon fontSize="large" />,
//     title: 'Search Engine Optimization',
//     summary:
//       'We help you with SEO that includes on-page, off-page and technical SEO, these plans give you an all-in-one solution so you can focus on what is more important.',
//   },
//   {
//     id: '5',
//     icon: <VerticalSplitIcon fontSize="large" />,
//     title: 'UX Design',
//     summary:
//       'We work closely with our customers to define, design and develop transformative user experiences on all platforms.',
//   },
//   {
//     id: '6',
//     icon: <CodeIcon fontSize="large" />,
//     title: 'ML/AI',
//     summary:
//       'We have a bunch of experts in AI / ML and an R&D team that works continuously in various NLP, Computer Vision, Neural network models.',
//   },
// ]

const servicesData = [
  {
    id: '1',
    icon: <GroupsIcon fontSize="large" />,
    title: 'Dedicated Development Team',
    summary:
      'Augment your team with our experts in data engineering, data science, devops , web and mobile app development in weeks.',
    details: card1Details,
  },
  {
    id: '2',
    icon: <EmojiObjectsIcon fontSize="large" />,
    title: 'Urgent Resolution of IT Issues',
    summary: 'We will provide you with our top talents to help resolve your pressing IT issues.',
    details: card2Details,
  },
  {
    id: '3',
    icon: <FactCheckIcon fontSize="large" />,
    title: 'IT Project Completion',
    summary: 'Execution of IT project within a fixed budget and timeline.',
    details: card3Details,
  },
  {
    id: '4',
    icon: <HailIcon fontSize="large" />,
    title: 'Technical Debt Reduction',
    summary:
      'Reduce risk in your project by paying back technical debt without interrupting current project development.',
    details: card4Details,
  },
  {
    id: '5',
    icon: <MiscellaneousServicesIcon fontSize="large" />,
    title: 'MVP Development with Predetermined Budget',
    summary: 'We can help develop your Minimum Viable Product.',
    details: card5Details,
  },
  // {
  //   id: '6',
  //   icon: <AddTaskIcon fontSize="large" />,
  //   title: 'Proof of Concept',
  //   summary: 'Developing and assessing new innovation.',
  // },
  {
    id: '7',
    icon: <ShoppingCartIcon fontSize="large" />,
    title: 'E-Commerce Web and App Development',
    summary: 'Full-package Development services specific for E-Commerce.',
    details: card7Details,
  },
]

const useStyles = makeStyles((theme) => ({
  cardStyle: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'space-around',
    minHeight: '365px',
    borderRadius: '25px',
    background: '#1D1A27',
    color: '#fff',
  },
  cardItems: {
    marginTop: '25px',
    marginLeft: '20px',
    marginRight: '20px',
  },
  captionText: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: '.95rem',
    lineHeight: '1.5rem',
  },
  iconBox: {
    marginLeft: '35px',
    marginTop: '50px',
    background: '#7353E5B2',
    width: '70px',
    height: '70px',
    borderRadius: '14px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnBox: {
    marginTop: '55px',
    marginBottom: '55px',
    textAlign: 'center',
  },
  hoverBox: {
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1.06)',
      transition: 'all 800ms cubic-bezier(0.19, 1, 0.22, 1)',
    },
  },
  tabBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  singleTab: {
    color: '#fff',
    '&:focus': { color: '#fff' },
    '&:not(:focus)': { color: '#fff' },
  },
}))

export default function Services({ serviceRef }) {
  // State and Functionality to manage the tabs
  function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}>
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    )
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    }
  }

  const [value, setValue] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  const [selectedService, setSelectedService] = useState({})

  // handler functions
  const serviceClickHandler = (service) => {
    setSelectedService(service)
    setOpenModal(true)
  }

  const modalCloseHandler = () => {
    setOpenModal(false)
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  // AOS initialization
  useEffect(() => {
    AOS.init()
  }, [])

  // console.log(scrollRef.current)
  const { cardStyle, cardItems, captionText, iconBox, btnBox, hoverBox, tabBox, singleTab } =
    useStyles()

  return (
    <Container id="services" maxWidth="xl" sx={{ marginTop: '100px' }} ref={serviceRef}>
      {/* Card section */}
      <Box sx={{ width: '100%' }} data-aos="fade-up" data-aos-duration="900">
        {/* Tab table */}
        {/* <Box className={tabBox}>
          <Tabs
            indicatorColor="secondary"
            sx={{
              marginBottom: '30px',
            }}
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example">
            <Tab className={singleTab} label="Development" {...a11yProps(0)} />
            <Tab className={singleTab} label="IT Consulting" {...a11yProps(1)} />
            <Tab className={singleTab} label="Out Of The Box" {...a11yProps(2)} />
          </Tabs>
        </Box> */}
        {/* <TabPanel value={value} index={0}> */}
        <Grid container spacing={4}>
          {servicesData.map((service) => (
            <Grid key={service.id} item sm={6} xs={12} md={4}>
              <Box
                className={hoverBox}
                onClick={(e) => {
                  serviceClickHandler(service)
                }}>
                {/* <Tooltip title="Click for details" placement="right"> */}
                <Card
                  data-aos="fade-up"
                  data-aos-duration="900"
                  sx={{ boxShadow: 5 }}
                  className={cardStyle}>
                  <Box className={iconBox}>{service.icon}</Box>
                  <CardContent className={cardItems}>
                    <Typography sx={{ marginBottom: '10px' }} variant="h5">
                      {service.title}
                    </Typography>
                    <Typography variant="body2" className={captionText}>
                      {service.summary}
                    </Typography>
                    <Typography sx={{ marginTop: '10px', color: '#7a67bc' }} variant="body2">
                      Click for more details
                    </Typography>
                  </CardContent>
                </Card>
                {/* </Tooltip> */}
              </Box>
            </Grid>
          ))}
        </Grid>
        {/* </TabPanel> */}
        {/* <TabPanel value={value} index={1}>
          <Grid container spacing={4}>
            {servicesData.map((service) => (
              <Grid key={service.id} item sm={6} xs={12} md={4}>
                <Box className={hoverBox}>
                  <Card
                    data-aos="fade-up"
                    data-aos-duration="900"
                    sx={{ boxShadow: 5 }}
                    className={cardStyle}>
                    <Box className={iconBox}>{service.icon}</Box>
                    <CardContent className={cardItems}>
                      <Typography sx={{ marginBottom: '10px' }} variant="h5">
                        {service.title}
                      </Typography>
                      <Typography variant="body2" className={captionText}>
                        {service.summary}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            ))}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Grid container spacing={4}>
            {servicesData.map((service) => (
              <Grid key={service.id} item sm={6} xs={12} md={4}>
                <Box className={hoverBox}>
                  <Card
                    data-aos="fade-up"
                    data-aos-duration="900"
                    sx={{ boxShadow: 5 }}
                    className={cardStyle}>
                    <Box className={iconBox}>{service.icon}</Box>
                    <CardContent className={cardItems}>
                      <Typography sx={{ marginBottom: '10px' }} variant="h5">
                        {service.title}
                      </Typography>
                      <Typography variant="body2" className={captionText}>
                        {service.summary}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            ))}
          </Grid>
        </TabPanel> */}
      </Box>

      <Box className={btnBox}>
        <CreateMeeting />
      </Box>
      {/* service details modal */}
      <ServiceDetails
        openModal={openModal}
        closeModal={modalCloseHandler}
        selectedService={selectedService}
      />
    </Container>
  )
}
