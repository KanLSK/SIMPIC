import React from 'react'
import pic from '../images/pic.jpg';
import bird from '../images/bird.jpeg';
import square from '../images/square.svg';
import arrow from '../images/arrow.svg';
import merchandise from '../images/merchandise.svg';
import { NavLink } from 'react-router-dom';

const Home = ({ user }) => {

  return (
    <div className='min-w-screen min-h-screen bg-[rgba(255,255,255,1)] flex flex-col'>
        <div className='relative bg-cover w-screen h-[750px] flex justify-center items'>
            <img src={pic} alt="microbio" className='h-[750px] w-screen opacity-40 bg-fixed'/>
            {/** when login */}
            <div className='absolute text-center flex flex-col gap-3'>
              <div className='relative w-screen h-[750px] flex flex-col justify-center items-center gap-4'>
                <p className='text-[64px] text-black font-extrabold'>SIMPIC 2025</p>
                <p className='text-[24px]'>
                  The 14th Siriraj International Medical Microbiology, Parasitology, and <br/>Immunology Competition
                </p>
                <NavLink to="/form" className='transition-all ease-in-out duration-300 delay-150 hover:-traanslate-y-1 hover:scale-110 bg-black hover:bg-gray-800 text-white w-fit px-4 py-3 rounded-lg'>Register Now</NavLink>
              </div>
            </div>
        </div>
        {/** first section */}
        <section className='flex flex-wrap w-full justify-between items-center h-[500px] px-10 md:px-20'>
           <div className='flex flex-col gap-5'>
                <p className='font-bold text-4xl'>The new style competition</p>
                <p className='font-light text-gray-500'>The new style of competition never seen before!</p>
                <button className='bg-black text-white px-4 py-3 rounded-lg w-fit'>Learn more</button>
           </div>
           <div>
                <img src={bird} alt="bird" className='w-[500px]'/>
           </div>
        </section>
        {/** second section */}
        <section className='flex flex-wrap w-full h-fit justify-between items-center px-10 md:px-20'>
          <div>
            <img src={square} alt="scare" />
          </div>
          <div className='flex flex-col justify-around'>
            <div className='flex gap-4 mb-10'>
              <p className='text-4xl font-bold'>Merchandise</p>
              <NavLink to="/merchandise">
                <img src={arrow} alt="arrow" className='w-[40px] h-[40px]'/>
              </NavLink>
            </div>
            <div className='flex gap-3'>
              <div className='flex flex-col gap-2'>
                <img src={merchandise} alt="merchandise" />
                <div className='mt-2'>
                  <p>SIMPIC Shirt</p>
                  <p className='text-[rgba(130,130,130,1)] font-light'>Description of product</p>
                  <p>$599</p>
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <img src={merchandise} alt="merchandise" />
                <div className='mt-2'>
                  <p>Tote Bag</p>
                  <p className='text-[rgba(130,130,130,1)] font-light'>Description of product</p>
                  <p>$299</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/** third section */}
        <section className='flex flex-col w-full h-fit justify-between items-center bg-[rgba(217,217,217,1)] mt-[6em]'>
          
        </section>
    </div>
  )
}

export default Home