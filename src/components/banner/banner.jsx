import React from 'react'
import img1 from '../../assets/banner/image1.png'
import img2 from '../../assets/banner/image2.png'
import img3 from '../../assets/banner/image3.png'
import { StrelkaRight } from '../../assets/header/icon/strelkaRight'
import { Support } from '../../assets/banner/support'
import { Dastavka } from '../../assets/banner/dastavka'
import { Bag } from '../../assets/banner/bag'
import { Mony } from '../../assets/banner/mony'

export const Banner = () => {
    return (
        <div className='py-6'>
            <div className="container">

                <div className='flex gap-[25px]'>
                    <div className='w-[872px] h-[600px] bg-center bg-no-repeat bg-cover text-white' style={{ backgroundImage: `url(${img1})` }}>
                        <div className='my-[155px] ml-[60px]'>
                            <h1 className='text-[48px] font-semibold'>Fresh & Healthy<br />Organic Food</h1>
                            <div className='my-7 border-l-2 border-[#84d187] pl-2'>
                                <p className='text-[20px] font-medium mb-2'>Sale up to <span className='inline-block py-1 px-3 ml-2 rounded-[5px] text-[20px] font-semibold bg-[#ff8a00]'>30% OFF</span></p>
                                <p className='text-[14px] font-normal'>Free shipping on all your order.</p>
                            </div>

                            <button className=' flex items-center gap-4 py-4 px-10 text-[16px] font-semibold bg-white rounded-[53px] text-[#00b207]'>
                                Shop now <StrelkaRight />
                            </button>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 gap-6'>
                        <div className='w-[423px] h-72 pt-8 pl-8 bg-center bg-no-repeat bg-cover ' style={{ backgroundImage: `url(${img2})` }}>
                            <p className='text-[14px] font-medium text-[#1a1a1a]'>Summer Sale</p>
                            <h3 className='text-[32px] font-semibold text-[#1a1a1a]'>75% OFF</h3>
                            <p className='text-[14px] font-normal text-[#1a1a1a]'>Only Fruit & Vegetable</p>
                            <button className=' flex items-center gap-4 py-4  text-[16px] font-semibold rounded-[53px] text-[#00b207]'>
                                Shop now <StrelkaRight />
                            </button>
                        </div>

                        <div className='w-[423px] text-white h-72 flex flex-col justify-center items-center bg-center bg-no-repeat bg-cover' style={{backgroundImage:`url(${img3})`}}>
                            <p className='font-medium text-[14px]'>Best Deal</p>
                            <h3 className='text-[32px] font-semibold text-white'>Special Products <br /> Deal of the Month</h3>
                            <button className=' flex items-center gap-4 pt-8 text-[16px] font-semibold rounded-[53px] text-[#00b207]'>
                                Shop now <StrelkaRight />
                            </button>
                        </div>
                    </div>
                </div>

                <ul className='grid grid-cols-4 p-10 bg-white mt-6 mb-[60px] shadow-[0_8px_40px_0_rgba(0,38,3,0.08)] text-[16px] font-semibold'>
                    <li className='flex gap-4 items-center'>
                        <Dastavka />
                        <div>
                            <h3>Free Shipping</h3>
                            <p className='text-[14px] font-normal text[#999] pt-2' >Free shipping on all your order</p>
                        </div>
                    </li>
                    <li className='flex gap-4 items-center '>
                        <Support />
                        <div>
                            <h3>Customer Support 24/7</h3>
                            <p className='text-[14px] font-normal text[#999] pt-2' >Instant access to Support</p>
                        </div>
                    </li>
                    <li className='flex gap-4 items-center'>
                        <Bag />
                        <div>
                            <h3>100% Secure Payment</h3>
                            <p className='text-[14px] font-normal text[#999] pt-2' >We ensure your money is save</p>
                        </div>
                    </li>
                    <li className='flex gap-4 items-center'>
                        <Mony />
                        <div>
                            <h3>Money-Back Guarantee</h3>
                            <p className='text-[14px] font-normal text[#999] pt-2' >30 Days Money-Back Guarantee</p>
                        </div>
                    </li>
                </ul>

            </div>
        </div>
    )
}
