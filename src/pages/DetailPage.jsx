import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Bag } from '../assets/header/icon/bag'

export const DetailPage = ({isModal}) => {
  const [product, setProduct] = useState({})
  const { id } = useParams()

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/recipes/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err, 'error'))
  }, [id])

  if(isModal){
    return (
    <div className='flex gap-10 p-10'>
      <div className='flex flex-col gap-3'>
        <img className='w-20 h-20 border border-[#e6e6e6] rounded-md cursor-pointer' src={product.image} alt='small' />
        <img className='w-20 h-20 border border-[#e6e6e6] rounded-md cursor-pointer' src={product.image} alt='small' />
        <img className='w-20 h-20 border border-[#e6e6e6] rounded-md cursor-pointer' src={product.image} alt='small' />
      </div>

      <div className='border-2 border-[#c1bdfd] rounded-md p-4'>
        <img className='w-[400px] h-[400px] object-contain' src={product.image} alt='main' />
      </div>

      <div className='flex flex-col gap-4 w-[400px]'>
        <h2 className='text-[28px] font-semibold'>{product.name}</h2>

        <div className='flex items-center gap-3'>
          <span className='text-[#f4a51c] text-[18px]'>★★★★☆</span>
          <span className='text-gray-500 text-sm'>4 Review</span>
          <span className='text-gray-400 text-sm'>| SKU: {product.id}</span>
          <span className='bg-[#e7f6e7] text-[#2c742f] text-xs px-2 py-1 rounded'>In Stock</span>
        </div>

        <div className='flex items-center gap-4'>
          <p className='text-[#999] text-[18px] line-through'>${(product.rating * 5)?.toFixed(2)}</p>
          <p className='text-[#2c742f] text-[28px] font-bold'>${product.rating}</p>
          <p className='text-white bg-[#ff4c4c] text-sm px-2 py-1 rounded'>64% Off</p>
        </div>

        <div className='text-gray-500 leading-6'>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.
        </div>

        <div className='flex items-center gap-3'>
          <button className='w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100'>-</button>
          <span className='text-lg'>5</span>
          <button className='w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100'>+</button>

          <button className='flex items-center gap-2 bg-[#2c742f] text-white px-6 py-3 rounded-full hover:bg-[#256d28]'>
            <Bag /> Add to Cart
          </button>
        </div>

        <div className='text-sm text-gray-500'>
          <p><b>Category:</b> Vegetables</p>
          <p><b>Tag:</b> Healthy, Chinese, Green Cabbage</p>
        </div>
      </div>
    </div>
  )
  }

  return (
    <div className='flex gap-10 p-10'>
      <div className='flex flex-col gap-3'>
        <img className='w-20 h-20 border border-[#e6e6e6] rounded-md cursor-pointer' src={product.image} alt='small' />
        <img className='w-20 h-20 border border-[#e6e6e6] rounded-md cursor-pointer' src={product.image} alt='small' />
        <img className='w-20 h-20 border border-[#e6e6e6] rounded-md cursor-pointer' src={product.image} alt='small' />
      </div>

      <div className='border-2 border-[#c1bdfd] rounded-md p-4'>
        <img className='w-[400px] h-[400px] object-contain' src={product.image} alt='main' />
      </div>

      <div className='flex flex-col gap-4 w-[400px]'>
        <h2 className='text-[28px] font-semibold'>{product.name}</h2>

        <div className='flex items-center gap-3'>
          <span className='text-[#f4a51c] text-[18px]'>★★★★☆</span>
          <span className='text-gray-500 text-sm'>4 Review</span>
          <span className='text-gray-400 text-sm'>| SKU: {product.id}</span>
          <span className='bg-[#e7f6e7] text-[#2c742f] text-xs px-2 py-1 rounded'>In Stock</span>
        </div>

        <div className='flex items-center gap-4'>
          <p className='text-[#999] text-[18px] line-through'>${(product.rating * 5)?.toFixed(2)}</p>
          <p className='text-[#2c742f] text-[28px] font-bold'>${product.rating}</p>
          <p className='text-white bg-[#ff4c4c] text-sm px-2 py-1 rounded'>64% Off</p>
        </div>

        <div className='text-gray-500 leading-6'>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.
        </div>

        <div className='flex items-center gap-3'>
          <button className='w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100'>-</button>
          <span className='text-lg'>5</span>
          <button className='w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100'>+</button>

          <button className='flex items-center gap-2 bg-[#2c742f] text-white px-6 py-3 rounded-full hover:bg-[#256d28]'>
            <Bag /> Add to Cart
          </button>
        </div>

        <div className='text-sm text-gray-500'>
          <p><b>Category:</b> Vegetables</p>
          <p><b>Tag:</b> Healthy, Chinese, Green Cabbage</p>
        </div>
      </div>
    </div>
  )
}
