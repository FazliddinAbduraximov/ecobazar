import React from 'react'
import { Lupa } from '../assets/header/icon/search'

export const Search = () => {
    return (
        <div className='flex items-center'>
            <div className='flex items-center h-[45px] px-4 border-l border-t border-b border-[#e6e6e6] rounded-l-md'>
                <Lupa color='#ff0000'></Lupa>
                <input className='text-[15px] font-normal w-[400px]' type="text" placeholder='search' />
            </div>
            <button className='h-[45px] px-6 bg-[#00b207] rounded-r-md text-white '>search</button>
        </div>
    )
}
