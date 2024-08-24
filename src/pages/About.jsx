import React from 'react'
import Container from '../layer/Container'
import { FaBootstrap, FaCss3Alt, FaReact, FaUniversity } from 'react-icons/fa'
import { TiHtml5 } from 'react-icons/ti'
import { RiTailwindCssFill } from 'react-icons/ri'
const About = () => {
  return (
    <div className='bg-[#808080]'>
      <Container>
        <div className='flex justify-between items-center py-28'>
          <div>
            <h1 className='font-sans font-bold text-2xl text-[#6cf3fa]'>MD Abdul Kadir</h1>
            <p className='font-sans text-lg text-slate-50 w-[780px] pt-1'>a frontend developer based in Dhaka, Bangladesh, currently working at Creative IT Institute. You specialize in creating dynamic, scalable web applications, with a strong focus on React.js. You have a deep understanding of JavaScript, HTML, and CSS, and are proficient in using state management libraries like Redux. You are also experienced with modern development tools such as Webpack and Babel.</p>
            <p className='font-sans text-lg text-slate-50 w-[780px] pt-2'>Your approach to development emphasizes balancing functionality with aesthetics, and you are passionate about delivering user-centric solutions. You continuously seek to stay updated with the latest frontend best practices. You enjoy tackling complex challenges, particularly in single-page applications, UI/UX design, and performance optimization.</p>
            <div className='flex items-center gap-2 pt-4'>
            <FaUniversity className='text-2xl text-[#6cf3fa]' />
            <h2 className='font-sans font-bold text-2xl text-[#6cf3fa]'>Educatio</h2>
            </div>
            <p className='font-sans text-lg text-slate-50 w-[780px] pt-1'>I hold a degree in Mechatronics Engineering from Magura Polytechnic Institute, where you studied from June 2018 to August 2023.</p>
          </div>
          <div className='w-72 h-96 bg-gradient-to-t from-indigo-300 border-2 border-[#6cf3fa] rounded-xl drop-shadow-2xl'>
            <div className='bg-kadir2 bg-no-repeat bg-center bg-cover w-full h-full'></div>

          </div>
        </div>
        {/* my sckils */}
        <div className='flex justify-between pb-7'>
          <div className='flex flex-col items-center border-8 w-48 h-48 justify-center rounded-full border-[#6cf3fa]'>
          <TiHtml5 className='text-8xl text-orange-400'/> 
          <h1 className='text-xl text-slate-300'>HTML-5</h1>
          </div>
          <div className='flex flex-col items-center border-8 w-48 h-48 justify-center rounded-full border-[#6cf3fa]'>
          <FaCss3Alt className='text-8xl text-blue-400'/>
          <h1 className='text-xl text-slate-300'>CSS-3</h1>
          </div>
          <div className='flex flex-col items-center border-8 w-48 h-48 justify-center rounded-full border-[#6cf3fa]'>
          <FaBootstrap className='text-8xl text-slate-50'/>
          <h1 className='text-xl text-slate-300'>Bootstrap-5</h1>
          </div>
          <div className='flex flex-col items-center border-8 w-48 h-48 justify-center rounded-full border-[#6cf3fa]'>
          <RiTailwindCssFill className='text-8xl text-blue-500 '/>
          <h1 className='text-xl text-slate-300'>Tailwind CSS</h1>
          </div>
          <div className='flex flex-col items-center border-8 w-48 h-48 justify-center rounded-full border-[#6cf3fa]'>
          <FaReact className='text-8xl text-blue-500'/>
          <h1 className='text-xl text-slate-300'>React JS</h1>
          </div>
        </div>
        {/* my sckils */}
      </Container>
    </div>
  )
}

export default About