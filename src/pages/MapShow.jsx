import React from 'react'
import Container from '../layer/Container'
const MapShow = () => {
    return (
        <div>
            <Container>
                <button to='/home' className='px-5 py-3 bg-[#6cf3fa] rounded-md text-lg text-slate-900 mt-8 mb-6'>Back to Home</button>
                <div className='w-[1320px] h-[720px] mx-auto'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4477307.008120552!2d88.4058436!3d23.8514805!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e1!3m2!1sen!2sbd!4v1724494970883!5m2!1sen!2sbd" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    
                </div>
            </Container>
        </div>
    )
}

export default MapShow