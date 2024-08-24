import React from 'react'
import { Link } from 'react-router-dom'

const Li = ({className, listItem , to}) => {
    return (
        <div>
            <li>
                <Link to={to} className={`font-semibold text-lg text-white hover:text-[#6cf3fa] duration-300 ${className}`}>
                    {listItem}
                 </Link>
            </li>
        </div>
    )
}

export default Li