import Head from 'next/head'
import { useRef } from 'react'
import Image from 'next/image'
import { Box } from '@mui/material'
import Newsletter from '../components/Newsletter/Newsletter'
import FirstSection from '../components/Landing/FirstSection'
import Nav from '../components/Shared/Nav'
import Services from '../components/Services/Services'
import ClientsBanner from '../components/Services/ClientsBanner'
import Vision from '../components/Vision/Vision'
import VerticalTabs from '../components/Technology/Technology'

export default function Home() {
  const topRef = useRef(null)
  const serviceRef = useRef(null)
  const clientRef = useRef(null)
  const visionRef = useRef(null)
  const navRef = useRef(null)

  const scrollToTop = () => {
    topRef.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'end' })
  }

  const scrollToServices = () => {
    serviceRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })
  }
  const scrollToBanner = () => {
    clientRef.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'end' })
  }
  const scrollToVision = () => {
    visionRef.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'end' })
  }

  return (
    <Box sx={{ marginBottom: '50px' }}>
      <Nav
        scrollToServices={scrollToServices}
        scrollToBanner={scrollToBanner}
        scrollToVision={scrollToVision}
        scrollToTop={scrollToTop}
      />
      <Box ref={topRef}>
        <FirstSection />
      </Box>
      {/* <Box>
        <VerticalTabs />
      </Box> */}
      <Box ref={serviceRef}>
        <Services />
      </Box>
      <Box ref={clientRef}>
        <ClientsBanner />
      </Box>
      <Box ref={visionRef}>
        <Vision />
      </Box>

      {/* <Newsletter /> */}
    </Box>
  )
}
