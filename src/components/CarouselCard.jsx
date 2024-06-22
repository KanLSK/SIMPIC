import React from 'react'

const CarouselCard = ({ slide }) => {

  const { title, description, bg } = slide
    
    console.log(bg)

  return (
    <div className={`w-[500px] h-[462px] bg-[${bg}] rounded-lg flex items-end justify-start`}>
      <div className='p-10'>
        <p className='text-2xl font-semibold'>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default CarouselCard