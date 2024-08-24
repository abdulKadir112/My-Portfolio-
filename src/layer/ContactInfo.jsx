import React, { Children } from 'react'
import { IoCall } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'

const ContactInfo = ({className}) => {
  return (
    <div className={`flex gap-8 ${className}`}>
      <div className='flex flex-col gap-3'>
        <div>
          <div className='flex '>
            <div className='w-5 h-5 bg-red-800 rounded-full border-[5px] border-green-800'>
            </div>
            <p className='font-bold text-sm text-white pt-1 text-start pl-2'>Bangladesh</p>
          </div>
        </div>
        <div className='flex items-center text-xl'>
          <MdEmail className='text-[#fffb94f9]' />
          <p className='font-bold text-sm text-white pt-1 text-start pl-2'>
            <Link>abdulkadir112k@gmail.com</Link>
          </p>
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <div className='flex items-center text-xl'>
          <IoCall className='text-[#fffb94f9]' />
          <p className='font-bold text-sm text-white pt-1 text-start pl-2'>
            <Link>+88 01729628402</Link>
          </p>
        </div>
        <div className='flex items-center text-xl'>
          <IoCall className='text-[#fffb94f9]' />
          <p className='font-bold text-sm text-white pt-1 text-start pl-2'>
            <Link>+88 01332303772</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo