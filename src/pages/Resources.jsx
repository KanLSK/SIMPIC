import React from 'react';
import Sample from '../images/sample.svg';

const Resources = () => {
  return (
    <div className='mt-[10em] w-screen h-screen flex justify-center font-inter'>
        <div className='w-[73vw] h-full'>
            <section>
                <p className='text-7xl font-bold'>Resources</p>
                <div className='w-[1208px] h-[504px] bg-[rgba(230,230,230,1)] mt-[4em] rounded-lg flex justify-between items-center shadow-lg p-4'>
                    <div className='flex flex-col gap-4'>
                        <p className='text-4xl font-bold'>Guidebook is available now</p>
                        <p className='text-2xl font-light'>the ultimate guide to survive in Bangkok</p>
                        <button className='bg-black text-white px-4 py-2 w-fit text-xl rounded-lg'>Read Now</button>
                    </div>
                    <div>
                        <img src={Sample} alt="sample" className=''/>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Resources