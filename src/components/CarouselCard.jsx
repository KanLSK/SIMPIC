import React from 'react'

const CarouselCard = ({ title, description, bg }) => {

    console.log(`bg-${bg}`)
  return (
    <div className={`w-[535px] h-[462px] bg-[${bg}] border-2 border-black`}>
        <p>{title}</p>
        <p>{description}</p>
    </div>
  )
}

export default CarouselCard