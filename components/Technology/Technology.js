import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { makeStyles } from '@mui/styles'
import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import TechItems from './TechItem'
import { useTheme } from '@emotion/react'
import useMediaQuery from '@mui/material/useMediaQuery'
import javascriptImage from '../../public/images/technology-section/js.webp'
import reactImage from '../../public/images/technology-section/react.webp'
import nextJSImage from '../../public/images/technology-section/next-js.webp'
import nodeJSImage from '../../public/images/technology-section/node.webp'
import mongoImage from '../../public/images/technology-section/mongo.webp'
import muiImage from '../../public/images/technology-section/mui.webp'
import bootstrapImage from '../../public/images/technology-section/bootstrap.webp'
import cypressImage from '../../public/images/technology-section/cypress.webp'
import figmaImage from '../../public/images/technology-section/figma.webp'
import herokuImage from '../../public/images/technology-section/heroku.webp'
import sassImage from '../../public/images/technology-section/sass.png'
import wordpressImage from '../../public/images/technology-section/wordpress.webp'
import pythonImage from '../../public/images/technology-section/python.svg'
import phpImage from '../../public/images/technology-section/php.svg'
import expressImage from '../../public/images/technology-section/express.png'
import laravelImage from '../../public/images/technology-section/laravel.png'
import mysqlImage from '../../public/images/technology-section/MySQL.png'
import graphqlImage from '../../public/images/technology-section/graphql.svg'
import firebaseImage from '../../public/images/technology-section/firebase2.svg'
import dynamodbImage from '../../public/images/technology-section/aws-dynamodb.svg'
import postgresqlImage from '../../public/images/technology-section/postgresql.svg'
import awsImage from '../../public/images/technology-section/aws.svg'
import awsAmplifyImage from '../../public/images/technology-section/aws-amplify.svg'
import awsAppsyncImage from '../../public/images/technology-section/aws-appsync.svg'
import awsCognitoImage from '../../public/images/technology-section/aws-cognito.svg'
import awsLambdaImage from '../../public/images/technology-section/aws-lambda.svg'
import awsS3Image from '../../public/images/technology-section/aws-s3-logo-vector.svg'
import numpyImage from '../../public/images/technology-section/numpy.svg'
import gitImage from '../../public/images/technology-section/Git.png'
import dockerImage from '../../public/images/technology-section/docker.svg'
import aiImage from '../../public/images/technology-section/ai.webp'
import xdImage from '../../public/images/technology-section/xd.webp'
import codeigniterImage from '../../public/images/technology-section/codeigniter.svg'
import cPlusImage from '../../public/images/technology-section/c-logo.png'
import PhotoshopImage from '../../public/images/technology-section/Adobe-Photoshop.svg'
import pytorchImage from '../../public/images/technology-section/pytorch-icon.svg'
import tensorflowImage from '../../public/images/technology-section/tensorflow.svg'
import rImage from '../../public/images/technology-section/r.svg'
import bashImage from '../../public/images/technology-section/bash.svg'
import javaImage from '../../public/images/technology-section/java.svg'

const useStyle = makeStyles((theme) => ({
  gradientBannerBox: {
    padding: '1px',
    background: 'linear-gradient(to left, #FF5BCA, #7353E5)',
    borderRadius: '21px',
    marginTop: '100px',
    // marginBottom: '100px',
    // [theme.breakpoints.down('sm')]: {
    //   width: '85%',
    // },
  },
  gradientBanner: {
    background: '#13121a',
    borderRadius: '21px',
    padding: '10px',
    // [theme.breakpoints.down('sm')]: {
    //   padding: '5px',
    // },
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
  tabBox: {
    flexGrow: 1,
    display: 'flex',
    height: 320,
    color: 'white',
  },
}))

const allTechItems = [
  { title: 'JavaScript', source: javascriptImage },
  { title: 'Python', source: pythonImage },
  { title: 'PHP', source: phpImage },
  { title: 'C++', source: cPlusImage },
  { title: 'Java', source: javaImage },
  { title: 'R', source: rImage },
  { title: 'ReactJS', source: reactImage },
  { title: 'NextJS', source: nextJSImage },
  { title: 'NodeJS', source: nodeJSImage },
  { title: 'ExpressJS', source: expressImage },
  { title: 'Laravel', source: laravelImage },
  { title: 'Codeigniter', source: codeigniterImage },
  { title: 'MongoDB', source: mongoImage },
  { title: 'Material UI', source: muiImage },
  { title: 'Bootstrap', source: bootstrapImage },
  { title: 'Wordpress', source: wordpressImage },
  { title: 'MySql', source: mysqlImage },
  { title: 'GraphQL', source: graphqlImage },
  { title: 'Firebase', source: firebaseImage },
  { title: 'DynamoDB', source: dynamodbImage },
  { title: 'PostgreSQL', source: postgresqlImage },
  { title: 'AWS', source: awsImage },
  { title: 'AWS Amplify', source: awsAmplifyImage },
  { title: 'AWS Appsync', source: awsAppsyncImage },
  { title: 'AWS Cognito', source: awsCognitoImage },
  { title: 'AWS Lambda', source: awsLambdaImage },
  { title: 'AWS S3', source: awsS3Image },
  { title: 'Numpy', source: numpyImage },
  { title: 'Docker', source: dockerImage },
  { title: 'PyTorch', source: pytorchImage },
  { title: 'TensorFlow', source: tensorflowImage },
  { title: 'Figma', source: figmaImage },
  { title: 'Illustrator', source: aiImage },
  { title: 'Adobe XD', source: xdImage },
  { title: 'Photoshop', source: PhotoshopImage },
  { title: 'Git', source: gitImage },
  { title: 'Bash', source: bashImage },
  { title: 'Sass', source: sassImage },
  { title: 'Cypress', source: cypressImage },
  { title: 'Heroku', source: herokuImage },
]

const allBackendItems = [
  { title: 'JavaScript', source: javascriptImage },
  { title: 'Python', source: pythonImage },
  { title: 'PHP', source: phpImage },
  { title: 'C++', source: cPlusImage },
  { title: 'Java', source: javaImage },
  { title: 'R', source: rImage },
  { title: 'NodeJS', source: nodeJSImage },
  { title: 'ExpressJS', source: expressImage },
  { title: 'Laravel', source: laravelImage },
  { title: 'Codeigniter', source: codeigniterImage },
  { title: 'MongoDB', source: mongoImage },
  { title: 'MySql', source: mysqlImage },
  { title: 'GraphQL', source: graphqlImage },
  { title: 'Firebase', source: firebaseImage },
  { title: 'DynamoDB', source: dynamodbImage },
  { title: 'PostgreSQL', source: postgresqlImage },
  { title: 'AWS', source: awsImage },
  { title: 'AWS Amplify', source: awsAmplifyImage },
  { title: 'AWS Appsync', source: awsAppsyncImage },
  { title: 'AWS Cognito', source: awsCognitoImage },
  { title: 'AWS Lambda', source: awsLambdaImage },
  { title: 'AWS S3', source: awsS3Image },
]

const allFrontEndItems = [
  { title: 'JavaScript', source: javascriptImage },
  { title: 'ReactJS', source: reactImage },
  { title: 'NextJS', source: nextJSImage },
  { title: 'Material UI', source: muiImage },
  { title: 'Bootstrap', source: bootstrapImage },
  { title: 'Sass', source: sassImage },
  { title: 'Wordpress', source: wordpressImage },
]

const allAiItems = [
  { title: 'Python', source: pythonImage },
  { title: 'Numpy', source: numpyImage },
  { title: 'Docker', source: dockerImage },
  { title: 'PyTorch', source: pytorchImage },
  { title: 'TensorFlow', source: tensorflowImage },
]

const allUiItems = [
  { title: 'Figma', source: figmaImage },
  { title: 'Illustrator', source: aiImage },
  { title: 'Adobe XD', source: xdImage },
  { title: 'Photoshop', source: PhotoshopImage },
]

const allOtherItems = [
  { title: 'Git', source: gitImage },
  { title: 'Bash', source: bashImage },
  { title: 'Sass', source: sassImage },
  { title: 'Cypress', source: cypressImage },
  { title: 'Heroku', source: herokuImage },
]
function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <Box
      sx={{ width: '100%' }}
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </Box>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    AOS.init()
  }, [])

  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.up('md'))

  const { gradientBanner, gradientBannerBox, gradientText, tabBox } = useStyle()

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
              Our Tech Skills
            </Typography>
            <Box className={tabBox}>
              {fullScreen && (
                <Tabs
                  orientation="vertical"
                  variant="scrollable"
                  value={value}
                  onChange={handleChange}
                  aria-label="Vertical tabs example"
                  textColor="inherit"
                  sx={{ borderRight: 1, borderColor: 'white', pr: 2, minWidth: '100px' }}>
                  <Tab label="All" {...a11yProps(0)} />
                  <Tab label="Backend" {...a11yProps(1)} />
                  <Tab label="Frontend" {...a11yProps(2)} />
                  <Tab label="AI/ML" {...a11yProps(3)} />
                  <Tab label="UI/UX" {...a11yProps(4)} />
                  <Tab label="Others" {...a11yProps(5)} />
                </Tabs>
              )}

              <Box sx={{ width: '100%', overflow: 'auto' }}>
                <TabPanel value={value} index={0}>
                  <TechItems techItems={allTechItems} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <TechItems techItems={allBackendItems} />
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <TechItems techItems={allFrontEndItems} />
                </TabPanel>
                <TabPanel value={value} index={3}>
                  <TechItems techItems={allAiItems} />
                </TabPanel>
                <TabPanel value={value} index={4}>
                  <TechItems techItems={allUiItems} />
                </TabPanel>
                <TabPanel value={value} index={5}>
                  <TechItems techItems={allOtherItems} />
                </TabPanel>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  )
}
