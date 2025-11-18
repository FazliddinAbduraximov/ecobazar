import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import bottomStrelke from '../../assets/header/bottom.svg'
import logo from '../../assets/header/logo.svg'
import { Search } from '../search'
import { Like } from '../../assets/header/icon/like'
import { Bag } from '../../assets/header/icon/bag'
import joyleshuv from '../../assets/header/joylashuv.svg'
import { Newbar } from './newbar'

const Header = () => {

  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate('/')
  }



  return (
    <>
      <div className='border-b border-[#e6e6e6]'>
        <div className='container'>
          <div className='flex justify-between text-[#666] items-center py-3'>
            <p className='flex gap-2'> <img src={joyleshuv} alt="" /> Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
            <div className='flex'>
              <div className='flex mr-5 items-center'>
                <p className='flex gap-1.5 items-center mr-5'>Eng <img src={bottomStrelke} alt="" /></p>
                <p className='flex gap-1.5 items-center mr-5'>USD <img src={bottomStrelke} alt="" /></p>
                <span className='h-6 border hover:text-red-500'></span>
              </div>
              <div>
                <span className='flex gap-1 text-[#666]'>
                  <p>Sign In</p>
                  /
                  <p>Sign up</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='container'>
          <div className='flex justify-between py-6'>
            <div>
              <Link to={`/`}>
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div>
              <Search />
            </div>
            <div className='flex items-center gap-4'>
              <span className='bg-transparent hover:text-red-500'><Like /></span>
              <span className='h-6 border hover:text-red-500'></span>
              <span className='bg-transparent hover:text-red-500'><Bag /></span>
              <div>
                <p className='text-[#4d4d4d]'>Shopping cart:</p>
                <p>$57.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Newbar />
    </>
  )
}

export default Header