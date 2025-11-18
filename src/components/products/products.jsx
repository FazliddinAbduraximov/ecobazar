import React from 'react'
import { Bag } from '../../assets/header/icon/bag'

export const Products = ({ id = 1, img, title, price }) => {
    return (
        <>
            <div className='group w-[264px] text-[#1a1a1a] border border-[#e6e6e6] rounded-[5px] hover:border-[#2c742f] hover:shadow-[0_0_12px_0_rgba(32,181,38,0.32)] hover:text-[#2c742f]'>
                <img className=' w-full' src={img} alt="img" />
                <div className='flex justify-between items-center p-3 text-[#4d4d4d]'>
                    <div className=''>
                        <h3 className='group-hover:text-[#2c742f]'>{title}</h3>
                        <p className='font-medium text-[16px] text-[#1a1a1a] inline mr-1'>${price}</p><p className='font-medium text-[16px] text-[#999] inline'><del>${price}</del></p>
                        <div className='mt-1 mb-3 text-[#f4a51c] text-sm group-hover:text-[#2c742f] transition-colors duration-300'>
                            ★★★★☆
                        </div>
                    </div>
                    <div className='p-[11px] rounded-[100%] bg-[#f2f2f2] flex items-center justify-center group-hover:bg-[#2c742f] group-hover:text-white'>
                        <Bag />
                    </div>
                </div>
            </div>
        </>
    )
}
