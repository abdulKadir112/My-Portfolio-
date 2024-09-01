import React, { useState } from 'react'
import Container from '../layer/Container'
import ProfileLink from '../layer/ProfileLink'
import WelcomePage from '../components/WelcomePage'
import Contact from './Contact'
import About from './About'

const Home = () => {
  
  return (
    <div className='bg-[#909090]'>
      <Container className="">
        <WelcomePage/>
        {/* pop link */}
        <div className='px-2 py-3 bg-[#6cf3fa] rounded-md absolute right-0 top-1/2 -translate-y-1/2 -translate-x-3 opacity-30 hover:opacity-100 transition-all duration-300'>
          <ProfileLink/>
        </div>
        {/* pop link */}
      </Container>
      <About/>
      <Contact/>
    </div>
  )
}

export default Home