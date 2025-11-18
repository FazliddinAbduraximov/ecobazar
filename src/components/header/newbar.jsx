import React from 'react'
import { Link } from 'react-router-dom'
import { Down } from '../../assets/header/icon/down'
import { Phone } from '../../assets/header/icon/phone'

export const Newbar = () => {
    return (
        <div className='bg-[#333] py-5'>
            <div className="container">
                <div className='flex justify-between'>
                    <ul className='flex gap-8'>
                        <Link><li className='text-[#999] flex gap-1 items-center hover:text-white'>Home <span><Down /></span></li></Link>
                        <Link><li className='text-[#999] flex gap-1 items-center hover:text-white'>Shop <span><Down /></span></li></Link>
                        <Link><li className='text-[#999] flex gap-1 items-center hover:text-white'>Pages <span><Down /></span></li></Link>
                        <Link><li className='text-[#999] flex gap-1 items-center hover:text-white'>Blog <span><Down /></span></li></Link>
                        <Link><li className='text-[#999] flex gap-1 items-center hover:text-white'>About Us <span><Down /></span></li></Link>
                        <Link><li className='text-[#999] flex gap-1 items-center hover:text-white'>Contact Us <span><Down /></span></li></Link>
                    </ul>
                    <div className='text-white flex gap-3 items-center'>
                        <Phone />
                        <p>(219) 555-0114</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
