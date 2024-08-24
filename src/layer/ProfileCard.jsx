import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { VscGithub } from 'react-icons/vsc'
import { Link } from 'react-router-dom'

const ProfileCard = () => {
  return (
    <div>
 {/* ---------Profile card-------- */}
    <div className='bg-slate-400 w-80 text-center rounded-md'>
         <div className='flex justify-center pt-6'>
            <div className='bg-kadir bg-center bg-cover w-72 h-72 bg-white rounded-[50%] border-4 border-[#fffb94f9]'></div>
            </div>
          <div className='items-center'>
          <p className='font-bold text-4xl text-[#fffb94f9] pt-4'>Abduk Kadir</p>
          <p className='w-72 mx-auto font-bold text-lg text-slate-100 pt-2 text-start font-sans'>|| Student of Creative It Institute || Front-End Web Development With React</p>
          {/* cntract info */}
          </div>
          {/* icon  */}
          <div className='flex gap-4 py-5 justify-center'>
              <Link to="https://www.facebook.com/mdkadir1118/"><FaFacebookF /></Link>
              <Link to="https://www.facebook.com/mdkadir1118/"><FaInstagram /></Link>
              <Link to="https://www.linkedin.com/feed/"><FaLinkedinIn /></Link>
              <Link to="https://github.com/Abdul-Kadir-Ti?tab=repositories"><VscGithub /></Link>
          </div>
          {/* contract info */}
    </div>
{/* ---------Profile card-------- */}
    </div>
  )
}

export default ProfileCard