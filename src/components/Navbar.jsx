import React from 'react'
import Container from '../layer/Container'
import Li from '../layer/Li'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-slate-500'>
        <Container className='flex items-center justify-between'>
            <ul className='w-full flex gap-10 justify-center py-6'>
                <Li listItem="Home"/>
                <Li to="/about" listItem="About Me"/>
                <Li to="/contact" listItem="Contact Me"/>
                <Li listItem="My Portfolio"/>
                <Li listItem="Blog"/>
            </ul>
             <Link to="/profile">
             <div className='bg-kadir bg-center bg-cover w-16 h-16 bg-white rounded-[50%] border-2 border-[#fffb94f9]'>
              
            </div>
             </Link>
        </Container>
    </div>
  )
}

export default Navbar