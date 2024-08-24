import React from 'react'
import Container from '../layer/Container'
import ContactInfo from '../layer/ContactInfo'

const Contact = () => {
  return (
    <div className="bg-[#808080]">
      <Container>
        <h1 className='font-sans text-center text-6xl font-bold text-[#6cf3fa] pt-20'>Contact Info</h1>
        <div className='font-sans pt-16 flex justify-around py-24 items-center'>
          <p className='text-slate-50 text-6xl max-w-[690px]'>You Want to professional responsive, interactive, and user-friendly? Send me a message with your project details.</p>
          <div className='w-[500px] border border-[#6cf3fa] rounded-xl'>
            <h2 className='text-5xl font-sans font-semibold text-[#6cf3fa] text-center pt-6'>Get in Touch</h2>
            <ContactInfo className="justify-center pt-5" />
            <div className='flex flex-col px-3 py-8'>
              <label className='text-[#6cf3fa] font-sans' htmlFor="">Email Address</label>
              <input type="email" placeholder='Enter your email' className='p-3 outline-none rounded-md bg-[#909090] text-slate-50 placeholder:text-[#5d5d5d]' />
              <div className='flex flex-col my-3'>
                <label className='text-[#6cf3fa] font-sans' htmlFor="">Sand Massage</label>
                <textarea className='p-3 outline-none rounded-md bg-[#909090] text-[#434242] placeholder:text-[#5d5d5d]' name="" id="" placeholder='sand massage'></textarea>
              </div>
              <button className='px-4 py-2 bg-[#6cf3fa] border-none rounded-md'>Send</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Contact