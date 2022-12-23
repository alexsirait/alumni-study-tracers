import React from 'react'

export default function DialogModal({ children, content, svg }) {
  return (
    <div className="bg-transparent bg-gray-800 bg-opacity-25 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0 animate-fade">
        <div data-aos='zoom-in' data-aos-duration='800' data-aos-delay='400'>
            <div className="bg-white px-6 md:px-20 lg:px-56 shadow-2xl py-14 rounded-3xl text-center">
                <div className='w-full grid justify-center mb-4 text-gray-800'>
                    {svg}
                </div>
                <span className='block mb-3 text-sm md:text-base tracking-tight font-sans font-semibold'>{ content }</span>
                {children}
            </div>
        </div>
    </div>
  )
}
