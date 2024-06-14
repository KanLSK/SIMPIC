import React from 'react'
import pic from '../images/pic.jpg';
import bird from '../images/bird.jpeg';

const Home = ({ user }) => {
  return (
    <div className='min-w-screen min-h-screen bg-gray-400 flex flex-col'>
        <div className='relative top-0 left-0 z-[0] opacity-30 bg-cover w-screen h-[750px]'>
            <img src={pic} alt="microbio" className='h-[750px] w-screen'/>
            {/** when login */}
        </div>
        {/** first section */}
        <div className='flex flex-wrap w-full justify-around items-center border-black h-[500px]'>
           <div className='flex flex-col gap-5'>
                <p className='font-bold text-4xl'>The new style competition</p>
                <p className='font-light text-gray-500'>The new style of competition never seen before!</p>
                <button className='bg-black text-white px-4 py-3 rounded-lg w-fit'>Learn more</button>
           </div>
           <div>
                <img src={bird} alt="bird" className='border-2 border-black'/>
           </div>
        </div>
    </div>
  )
}

export default Home