import React from 'react'
import Container from '../layer/Container'
import Img from '../layer/Img'
import myPic from '/myPic/kadir.jpg'
import { Link } from 'react-router-dom'
import { VscGithub } from 'react-icons/vsc'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { IoCall } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { IoMdArrowDropup } from 'react-icons/io'
import ProfileCard from '../layer/ProfileCard'
const Profile = () => {
  return (
    <div className='bg-slate-700'>
        <Container className="relative">
          {/* dropup icon */}
          <div className='absolute top-0 right-0 -translate-x-[16px] -translate-y-[15px]'>
            <IoMdArrowDropup className='text-2xl text-slate-700'/>
            </div>
          {/* dropup icon */}
       <div className='flex justify-between items-center py-6'>
          <ProfileCard/>
        {/* Summary */}
        <div className='max-w-[600px]'>
          <div>
          <h2 className='font-semibold text-2xl text-[#fffb94f9]'>Professional Summary</h2>
          <p className='text-lg text-slate-200'>Front-end developer with 2 years of experience in designing and developing user-friendly, responsive websites and web applications. Proficient in HTML, CSS, JavaScript, and popular frameworks like React and Angular. Passionate about creating seamless user experiences and bringing creative designs to life.</p>
          </div>
          <div className='pt-6'>
            <h3 className='font-semibold text-2xl text-[#fffb94f9]'>Education</h3>
            <p className='text-lg text-slate-200'>Bachelor of Science in Computer Science</p>
            <p className='text-lg text-slate-200'>Magura polytechnic institute||18-19||</p>
          </div>
        </div>
        {/* Summary */}
        {/* Skills */}
        <div>
          <h1 className='font-semibold text-2xl text-[#fffb94f9]'>Technical Skills</h1>
          <div>
            <p className='font-bold text-lg text-[#fffb94f9] pt-3 underline-offset-8'>Languages: <span className='text-lg text-slate-200 font-normal'> HTML-5, CSS-3, JavaScript, TypeScrip</span></p>
            <p className='font-bold text-lg text-[#fffb94f9] pt-3'>Frameworks/Libraries:<span className='text-lg text-slate-200 font-normal'>React.js, Angular, Vue.js, jQuery</span></p>
            <p className='font-bold text-lg text-[#fffb94f9] pt-3'>CSS Preprocessors:<span className='text-lg text-slate-200 font-normal'>SASS, LESS</span></p>
            <p className='font-bold text-lg text-[#fffb94f9] pt-3'>Version Control:<span className='text-lg text-slate-200 font-normal'>Git, GitHub, GitLab</span></p>
            <p className='font-bold text-lg text-[#fffb94f9] pt-3'>Build Tools:<span className='text-lg text-slate-200 font-normal'>Webpack, Gulp, NPM</span></p>
            <p className='font-bold text-lg text-[#fffb94f9] pt-3'>Design Tools:<span className='text-lg text-slate-200 font-normal'>Figma, Adobe XD, Sketch</span></p>
            <p className='font-bold text-lg text-[#fffb94f9] pt-3'>Responsive Design:<span className='text-lg text-slate-200 font-normal'>Bootstrap, Materialize, Tailwind CSS</span></p>
            <p className='font-bold text-lg text-[#fffb94f9] pt-3'>Testing:<span className='text-lg text-slate-200 font-normal'>Jest, Mocha, Cypress</span></p>
          </div>
        </div>
        {/* Skills */}
       </div>
        </Container>
    </div>
  )
}

export default Profile