import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const ProductCategorys = ({id, img, title }) => {
    const location = useLocation()
    return (
        <>
            <Link to={`/product/${id}`} state={{ background: location }}>
                <div className='w-[200px] text-[#1a1a1a] h-[213px] border border-[#e6e6e6] rounded-[5px] text-center hover:border-[#2c742f] hover:shadow-[0_0_12px_0_rgba(32,181,38,0.32)] hover:text-[#2c742f]'>
                    <img className='w-[190px] h-[130px] my-4 mx-[5px] mr-auto ml-auto rounded-[5px]' src={img} alt="img" />
                    <h3 className='mb-6 w-[200px]'>{title}</h3>
                </div>
            </Link>
        </>
    )
}
