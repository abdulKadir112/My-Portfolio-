import React from 'react'
import { FaAngleLeft, FaAngleRight, FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BiLogoGmail } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const ProfileLink = () => {
    return (
        <div className='text-2xl text-slate-900 flex flex-col gap-4'>
            <Link className='bg-slate-500 p-2 rounded-full hover:text-white hover:bg-blue-700 duration-500'><FaFacebookF className='hover:scale-110'/></Link>
            <Link className='bg-slate-500 p-2 rounded-full hover:text-white hover:bg-blue-700 duration-500'><FaLinkedinIn className='hover:scale-110'/></Link>
            <Link className='bg-slate-500 p-2 rounded-full hover:text-[#cd4444] hover:bg-white duration-500'><BiLogoGmail className='hover:scale-110'/></Link>
            <Link className='bg-slate-500 p-2 rounded-full hover:text-white hover:bg-black duration-500'><FaGithub  className='hover:scale-110'/></Link>
        </div>
    )
}

export default ProfileLink