import React, { useState } from 'react';
import { FaBars } from "react-icons/fa"
import { IoMdClose } from "react-icons/io"


function PageHero({ title, description, background }) {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div
            className='pt-5 tb:pt-[78px]'
            style={{
                backgroundImage: "url('/assets/homepageBackground.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "800px",
                width: "105%",
            }}>
            <div className='flex flex-col items-center'>
                <div className='flex flex-row items-center justify-between w-[90%]'>
                    <div className='flex flex-row space-x-2'>
                        <img src='/assets/logo.png' />
                        <span className='text-white text-[16px]'>TREATMENTS</span>
                    </div>

                    <div className='hidden md:flex flex-row items-center space-x-4'>
                        <span className='text-white text-[16px] hover:cursor-pointer'>HOME</span>
                        <span className='text-[#FFFFFF80] text-[16px] hover:text-white hover:cursor-pointer'>TREATMENTS</span>
                        <span className='text-[#FFFFFF80] text-[16px] hover:text-white hover:cursor-pointer'>PRODUCTS</span>
                        <span className='text-[#FFFFFF80] text-[16px] hover:text-white hover:cursor-pointer'>CONTACT US</span>
                        <span className='text-[#FFFFFF80] text-[16px] hover:text-white hover:cursor-pointer'>FAQ</span>
                    </div>
                    <div className='md:hidden mr-10' >
                        {!menuOpen ?
                            <FaBars size={20} className="cursor-pointer" color='#fff' onClick={() => setMenuOpen(!menuOpen)} />
                            : <IoMdClose size={30} className="cursor-pointer" color='#fff' onClick={() => setMenuOpen(!menuOpen)} />
                        }
                    </div>
                    {menuOpen && <div className='md:hidden bg-white text-[#000] absolute flex flex-col items-center justify-start top-[100px] right-[30px] px-20 menu w-[90%] '>
                        <span onClick={() => setMenuOpen(false)} className="mt-3 cursor-pointer hover:bg-primary hover:text-[#E8C229] p-1 w-full flex flex-col items-center">HOME</span>
                        <span onClick={() => setMenuOpen(false)} className="mt-3 cursor-pointer hover:bg-primary hover:text-[#E8C229] p-1 w-full flex flex-col items-center">TREATMENTS</span>
                        <span onClick={() => setMenuOpen(false)} className="mt-3  cursor-pointer hover:bg-primary hover:text-[#E8C229] p-1 w-full flex flex-col items-center">PRODUCTS</span>
                        <span onClick={() => setMenuOpen(false)} className="mt-3  cursor-pointer hover:bg-primary hover:text-[#E8C229] p-1 w-full flex flex-col items-center">CONTACT US</span>
                        <span onClick={() => setMenuOpen(false)} className="mt-3  cursor-pointer hover:bg-primary hover:text-[#E8C229] p-1 w-full flex flex-col items-center">FAQ</span>
                        {/* <span>WASHNORM</span> */}
                    </div>}
                </div>
                <div className='self-start pl-20 mt-7 '>
                    <span className='text-white text-[75px] font-bold leading-none'>ALL YOU NEED <br />TO BE EPIC</span>
                    <p className='max-w-[550px] text-[16px] text-white mt-5'>If your skin has started to show wear and tear from sun, aging, acne or other skin conditions there is much that can be done.</p>
                </div>
                <div className='flex flex-row flex-wrap items-center self-start pl-20 mt-20'>
                    <button className='bg-white text-[#796AB8] rounded-lg py-3 px-7 w-[249.61px] font-bold hover:bg-[#ddd] mr-[30px] mb-[30px]'>VIEW TREATMENTS</button>
                    <button className='bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-[#fff] rounded-lg py-3 px-7 w-[249.61px] font-bold hover:bg-gradient-to-l mb-[30px]'>VIEW PRODUCTS</button>
                </div>

                <div className='flex flex-row items-center space-x-2 absolute bottom-[70px]'>
                    <img src='/assets/selectedEllipse.png' className='border-[1px] border-[#E8C229] rounded-[1000px] p-[2px]' />
                    <img src='/assets/ellipse.png' />
                    <img src='/assets/ellipse.png' />
                </div>
                <div className='flex flex-row items-center justify-between w-[60%] absolute bottom-[-90px]'>
                    <img src='/assets/backIcon.png' className='hover:cursor-pointer hover:scale-75' />
                    <img src='/assets/forwardIcon.png' className='hover:cursor-pointer hover:scale-75' />
                </div>
            </div>
        </div>
    )
}

export default PageHero