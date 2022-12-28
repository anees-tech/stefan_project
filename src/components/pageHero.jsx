import React from 'react'

function PageHero({ title, description, background }) {
    return (
        <div
            style={{
                backgroundImage: "url('/assets/homepageBackground.png')",
                backgroundRepeat: "no-repeat",
                paddingTop: "78px",
                height: "720px",
                width: "1440px"
            }}>
            <div className='flex flex-col items-center'>
                <div className='flex flex-row items-center justify-between w-[90%]'>
                    <div className='flex flex-row space-x-2'>
                        <img src='/assets/logo.png' />
                        <span className='text-white text-[16px]'>TREATMENTS</span>
                    </div>

                    <div className='flex flex-row items-center space-x-4'>
                        <span className='text-white text-[16px]'>HOME</span>
                        <span className='text-[#FFFFFF80] text-[16px]'>TREATMENTS</span>
                        <span className='text-[#FFFFFF80] text-[16px]'>PRODUCTS</span>
                        <span className='text-[#FFFFFF80] text-[16px]'>CONTACT US</span>
                        <span className='text-[#FFFFFF80] text-[16px]'>FAQ</span>
                    </div>
                </div>
                <div className='self-start pl-20 mt-7 '>
                    <span className='text-white text-[75px] font-bold leading-none'>ALL YOU NEED <br />TO BE EPIC</span>
                    <p className='max-w-[550px] text-[16px] text-white mt-5'>If your skin has started to show wear and tear from sun, aging, acne or other skin conditions there is much that can be done.</p>
                </div>
                <div className='flex flex-row items-center space-x-4 self-start pl-20 mt-20'>
                    <button className='bg-white text-[#796AB8] rounded-lg py-3 px-7 w-[249.61px] font-bold'>VIEW TREATMENTS</button>
                    <button className='bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-[#fff] rounded-lg py-3 px-7 w-[249.61px] font-bold'>VIEW PRODUCTS</button>
                </div>

                <div className='flex flex-row items-center space-x-2 absolute bottom-[70px]'>
                    <img src='/assets/selectedEllipse.png' className='border-[1px] border-[#E8C229] rounded-[1000px] p-[2px]' />
                    <img src='/assets/ellipse.png' />
                    <img src='/assets/ellipse.png' />
                </div>
                <div className='flex flex-row items-center justify-between w-[60%] absolute bottom-[-70px]'>
                    <img src='/assets/backIcon.png' />
                    <img src='/assets/forwardIcon.png' />
                </div>
            </div>
        </div>
    )
}

export default PageHero