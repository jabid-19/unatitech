import React from 'react'
import Head from 'next/head'
import InfoSection from '../../components/About-us/InfoSection'
import EmployeeSection from '../../components/About-us/EmployeeSection'

const index = () => {
  return (
    <div>
      <Head>
        <title>About Us - Unatitech</title>
      </Head>
      <InfoSection />
      <EmployeeSection />
    </div>
  )
}

export default index
