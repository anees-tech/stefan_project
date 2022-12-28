import React from 'react'

const RatingHeader = () => {
    return (
        <div className='flex flex-row items-center justify-between bg-[#3F3F3F42] w-[93%] rounded-lg px-3 absolute'>
            <div className='flex flex-row items-center space-x-2'>
                <img src='/assets/googleIcon.png' />
                <img src='/assets/stars.png' />
                <span className='text-white text-[16px]'>4.5 rating of 25 reviews </span>
            </div>

            <div className='flex flex-row items-center space-x-4'>
                <span className='text-white text-[16px]'>support@aztreatments.com</span>
                <img src='/assets/mailIcon.png' />
                <span className='text-white text-[16px]'>+44 020 7042 1880</span>
                <img src='/assets/telephoneIcon.png' />
                <img src='/assets/line.png' />
                <img src='/assets/shoppingCartIcon.png' />
            </div>
        </div>
    )
}

export default RatingHeader