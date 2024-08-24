import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({className ,button}) => {
  return (
        <Link className={`text-[#6cf3fa] px-5 py-3 bg-transparent rounded-lg border-2 border-[#6cf3fa] hover:bg-[#6cf3fa] hover:text-[#909090] ml-6 duration-300 ${className}`}>
            {button}
        </Link>
  )
}

export default Button