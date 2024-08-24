import React from 'react'
import Img from '../layer/Img'
import kadir from '/myPic/kadir2.png'
import Button from '../layer/Button'

const WelcomePage = () => {
    return (
        <div>
            <div className='flex justify-around items-center py-52'>
                {/*job title */}
                <div>
                    <p className='font-semibold text-2xl text-[#6cf3fa]'>Welcome!</p>
                    <h2 className='text-7xl leading-tight font-bold text-slate-50 w-[830px] py-2'>Front-End Development With React</h2>
                    <h1 className='text-xl w-[590px] text-slate-50 pb-24'>Are you looking for a professional front-end developer to bring your website or web application to life? You’re in the right place!</h1>
                    <Button button="Contact Me"/>
                </div>
                {/*job title */}
                {/* my image */}
                <div className=''>
                    <Img src={kadir} className='w-[400px] h-[400px] rounded-[50%] border-x-2 border-[#6cf3fa] border hover:scale-105 duration-500' />
                </div>
                {/* my image */}
            </div>
        </div>
    )
}

export default WelcomePage