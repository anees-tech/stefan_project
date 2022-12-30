import React, { useState } from 'react';
import { FaBars } from "react-icons/fa"
import { IoMdClose } from "react-icons/io"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"


function PageHero({ children, background }) {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className='flex flex-col items-center w-full'>
            <div>
                <div className='relative w-full mb-[230px] md:mb-[0px]'>
                    <img src='/assets/homepageHeroSvg.svg' className='hidden md:flex w-screen' />
                    <img src='/assets/homepageHeroMobileSvg.svg' className='flex md:hidden w-screen' />
                    <div className='flex flex-col items-center absolute top-7 tb:top-20 w-full'>
                        <div className='flex flex-row items-center justify-between w-[90%]'>
                            <img src='/assets/logoSvg.svg' className=' md:ml-[85px]  xxl:absolute left-[100px]' />

                            <div className='hidden tb:flex flex-row items-center space-x-4 md:mr-[85px] xxl:absolute right-[100px]'>
                                <span className='text-white text-[16px] font-medium hover:cursor-pointer'>HOME</span>
                                <span className='text-[#FFFFFF80] text-[16px] border-hidden border-b-[3px] border-b-[#fff] hover:border-solid hover:mb-[-3px] cursor-pointer'>TREATMENTS</span>
                                <span className='text-[#FFFFFF80] text-[16px] border-hidden border-b-[3px] border-b-[#fff] hover:border-solid hover:mb-[-3px] cursor-pointer'>PRODUCTS</span>
                                <span className='text-[#FFFFFF80] text-[16px] border-hidden border-b-[3px] border-b-[#fff] hover:border-solid hover:mb-[-3px] cursor-pointer'>CONTACT US</span>
                                <span className='text-[#FFFFFF80] text-[16px] border-hidden border-b-[3px] border-b-[#fff] hover:border-solid hover:mb-[-3px] cursor-pointer'>FAQ</span>
                            </div>
                            <div className='tb:hidden mr-5 flex flex-row items-center space-x-5' >
                                <img src='/assets/shoppingCartSvg.svg' />
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
                        {children}
                    </div>
                    <div className='absolute bottom-[50px] w-full ml-[45%]'>
                        <div className='hidden md:flex flex-row items-center space-x-2 mt-[-20px]'>
                            <img src='/assets/selectedEllipse.png' className='border-[1px] border-[#E8C229] rounded-[1000px] p-[2px]' />
                            <img src='/assets/ellipse.png' className='border-[1px] border-[#ddd] rounded-[1000px] md:border-[0px]' />
                            <img src='/assets/ellipse.png' className='border-[1px] border-[#ddd] rounded-[1000px] md:border-[0px]' />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PageHero