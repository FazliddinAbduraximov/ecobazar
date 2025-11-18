import React, { useEffect, useState } from 'react'
import { Banner } from '../components/banner/Banner';
import { StrelkaRight } from '../assets/header/icon/strelkaRight';
import { ProductCategorys } from '../components/products/product-categorys';
import { Products } from '../components/products/products';
import axios from 'axios';
import banner2_1 from '../assets/banner/baner2_1.png';
import banner2_2 from '../assets/banner/baner2_2.png';
import banner2_3 from '../assets/banner/baner2_3.png';
import { Countdown } from '../components/banner/timer';


const Home = () => {
  const [datas, useDatas] = useState([]);
  const [datas1, useData] = useState([])
  const [deals, useDeals] = useState([])
  const [loading, useLoding] = useState(false)

  useEffect(() => {
    useLoding(true)
    axios
      .get(`https://dummyjson.com/recipes?limit=12`)
      .then((res) => useDatas(res.data.recipes))
      .catch(err => console.log(err, 'error'))
      .finally(() => useLoding(false))

  }, [])
  useEffect(() => {
    useLoding(true)
    axios
      .get(`https://dummyjson.com/recipes?limit=10`)
      .then((res) => useData(res.data.recipes))
      .catch(err => console.log(err, 'error'))
      .finally(() => useLoding(false))

  }, [])

  useEffect(() => {
    useLoding(true)
    axios
      .get(`https://dummyjson.com/recipes?limit=12`)
      .then((res) => useDeals(res.data.recipes))
      .catch(err => console.log(err, 'error'))
      .finally(() => useLoding(false))

  }, [])

  return (
    <main className="">
      <section>
        <Banner />
      </section>

      <section>
        <div className="container">
          <div className='flex justify-between pb-8 items-center'>
            <h2 className='font-semibold text-[32px]'>Popular Categories</h2>
            <button className=' flex items-center gap-4 text-[16px] font-semibold rounded-[53px] text-[#00b207]'>
              View All <StrelkaRight />
            </button>
          </div>
          <div className='pb-[60px] grid grid-cols-6 gap-6'>
            {
              datas?.map(e => (
                <ProductCategorys key={e.id} id={e.id} img={e.image} title={e.name} />
              ))
            }
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className='flex justify-between items-center pb-8'>
            <h2 className='font-semibold text-[32px]'>Popular Products View All</h2>
            <button className=' flex items-center gap-4 text-[16px] font-semibold rounded-[53px] text-[#00b207]'>
              View All <StrelkaRight />
            </button>
          </div>
          <div className='pb-[60px] grid grid-cols-5'>
            {
              datas1.map(e => (
                <Products key={e.id} id={e.id} img={e.image} title={e.name} price={2000} />
              ))
            }
          </div>
        </div>

        <div className="container">
          <div className='grid grid-cols-3 mb-[60px] text-white'>
            <div className='text-center w-[424px] h-[526px] bg-center bg-no-repeat bg-cover rounded-lg' style={{ backgroundImage: `url(${banner2_1})` }}>
              <Countdown />
            </div>
            <div className='w-[424px] h-[526px] text-center bg-center bg-no-repeat bg-cover rounded-lg' style={{ backgroundImage: `url(${banner2_2})` }}>
              <p className='mt-[35px] mb-4 text-[14px] font-medium'>85% Fat Free</p>
              <h3 className='mb-2 text-[40px] font-semibold'>Low-Fat Meat</h3>
              <p className='text-[20px] pt-[13px] pb-7 font-normal'>Started at <span className='text-[20px] font-semibold text-[#ff8a00]'>$79.99</span></p>
              <button className=' flex items-center mr-auto ml-auto gap-4 py-4 px-10 text-[16px] font-semibold bg-white rounded-[53px] text-[#00b207]'>
                Shop now <StrelkaRight />
              </button>
            </div>
            <div className='text-center w-[424px] h-[526px] bg-center bg-no-repeat bg-cover rounded-lg' style={{ backgroundImage: `url(${banner2_3})` }}>
              <p className='mt-[35px] mb-4 text-[14px] font-medium'>Summer Sale</p>
              <h3 className='mb-2 text-[40px] font-semibold'>100% Fresh Fruit</h3>
              <p className='text-[18px] pt-[13px] pb-7 font-normal mr-3 text-white'>Up to <span className='text-[18px] px-3 py-2 bg-[#1a1a1a] font-semibold rounded-[5px] text-[#fcc900]'>64% OFF</span></p>
              <button className=' flex items-center mr-auto ml-auto gap-4 py-4 px-10 text-[16px] font-semibold bg-white rounded-[53px] text-[#00b207]'>
                Shop now <StrelkaRight />
              </button>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="container">
          <div className='flex justify-between items-center pb-8'>
            <h2 className='font-semibold text-[32px]'>Hot Deals</h2>
            <button className=' flex items-center gap-4 text-[16px] font-semibold rounded-[53px] text-[#00b207]'>
              View All <StrelkaRight />
            </button>
          </div>
          <div className='pb-[60px] grid grid-cols-6 gap-6'>
            {
              deals?.map(e => (
                <ProductCategorys key={e.id} id={e.id} img={e.image} title={e.name} />
              ))
            }
          </div>
        </div>
      </section>




    </main>
  );
}

export default Home