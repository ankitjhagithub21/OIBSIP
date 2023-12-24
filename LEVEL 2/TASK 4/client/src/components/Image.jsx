import React from 'react'

const Image = () => {
    return (
        <div className="lg:w-1/2 md:w-1/2 flex flex-col items-center justify-center md:ml-auto w-full md:py-8 md:mt-0 p-2">
            <img src="/image.avif" alt="" className='rounded-md shadow' />

        </div>
    )
}

export default Image