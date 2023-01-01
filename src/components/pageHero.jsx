import React, { useState } from 'react';
import { FaBars } from "react-icons/fa"
import { IoMdClose } from "react-icons/io"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"


function PageHero({ children, background }) {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className='flex flex-col w-full'>
            <div>
                <div className='relative  mb-7 w-full'>
                    <img src='/assets/homepageHeroSvg.svg' className='hidden md:flex w-full' />
                    <div className='bg-[#9686DA] md:bg-transparent flex flex-col items-center  pt-7 pb-2 px-4 md:top-0 md:absolute tb:top-[50px] w-full'>
                        <div className='flex flex-row items-center justify-between w-[90%] mb-10 md:mb-[0px]'>
                            <div className='flex flex-row items-center space-x-3'>
                                <img src='/assets/logoSvg.svg' className='hidden tb:flex md:ml-[85px]  xxl:absolute left-[100px]' />
                                <span className='hidden tb:flex text-white font-medium text-[19px]'>TREATMENTS</span>
                            </div>
                            <div className='hidden tb:flex flex-row items-center space-x-4 md:mr-[85px] xxl:absolute right-[100px]'>
                                <span className='text-white text-[16px] font-medium hover:cursor-pointer'>HOME</span>
                                <span className='text-[#FFFFFF80] text-[16px] border-hidden border-b-[3px] border-b-[#fff] hover:border-solid hover:mb-[-3px] cursor-pointer'>TREATMENTS</span>
                                <span className='text-[#FFFFFF80] text-[16px] border-hidden border-b-[3px] border-b-[#fff] hover:border-solid hover:mb-[-3px] cursor-pointer'>PRODUCTS</span>
                                <span className='text-[#FFFFFF80] text-[16px] border-hidden border-b-[3px] border-b-[#fff] hover:border-solid hover:mb-[-3px] cursor-pointer'>CONTACT US</span>
                                <span className='text-[#FFFFFF80] text-[16px] border-hidden border-b-[3px] border-b-[#fff] hover:border-solid hover:mb-[-3px] cursor-pointer'>FAQ</span>
                            </div>
                            <div className='bg-[#9686DA] tb:hidden flex flex-row items-center justify-between fixed top-0 left-0 z-20 pt-5 w-full' >
                                <div className='absolute flex flex-row justify-between top-0 px-4 py-3 bg-[#6C5EA4] w-full'>
                                    <img src='/assets/logoSvg.svg' className=' tb:hidden' />
                                    <div className='tb:hidden flex flex-row items-center space-x-3 ' >
                                        <img src='/assets/ShoppingSvg.svg' />
                                        {!menuOpen ?
                                            <FaBars size={25} className="cursor-pointer" color='#fff' onClick={() => setMenuOpen(!menuOpen)} />
                                            : <IoMdClose size={25} className="cursor-pointer" color='#fff' onClick={() => setMenuOpen(!menuOpen)} />
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        {menuOpen && <div className='md:hidden bg-[#9686DA]  text-[#000] fixed z-20 top-[49px]   flex flex-col items-center justify-start menu h-full w-full'>
                            <div className='flex flex-row items-center bg-[#7F73B1] w-full'>
                                <img src='/assets/googleSvg.svg' className='h-[50px]' />
                                <img src='/assets/starsSvg.svg' className='h-[23px] mr-2' />
                                <span className='text-white text-[13px]'>4.5 rating of 25 reviews </span>
                            </div>
                            <div className='flex flex-col space-y-2 items-center w-full'>
                                <span onClick={() => setMenuOpen(false)} className="text-[#FFF] font-medium text-[18px] mt-3 cursor-pointer border-hidden border-b-[3px] border-b-[#fff] hover:mb-[-3px] p-1 w-fit flex flex-col items-center">HOME</span>
                                <span onClick={() => setMenuOpen(false)} className="text-[#FFFFFF80] text-[18px] mt-3 cursor-pointer border-hidden border-b-[3px] border-b-[#fff] hover:border-solid hover:mb-[-3px] p-1 w-fit flex flex-col items-center">TREATMENTS</span>
                                <span onClick={() => setMenuOpen(false)} className="text-[#FFFFFF80] text-[18px] mt-3  cursor-pointer border-hidden border-b-[3px] border-b-[#fff] hover:border-solid hover:mb-[-3px] p-1 w-fit flex flex-col items-center">PRODUCTS</span>
                                <span onClick={() => setMenuOpen(false)} className="text-[#FFFFFF80] text-[18px] mt-3  cursor-pointer border-hidden border-b-[3px] border-b-[#fff] hover:border-solid hover:mb-[-3px] p-1 w-fit flex flex-col items-center">CONTACT US</span>
                                <span onClick={() => setMenuOpen(false)} className="text-[#FFFFFF80] text-[18px] mt-3  cursor-pointer border-hidden border-b-[3px] border-b-[#fff] hover:border-solid hover:mb-[-3px] p-1 w-fit flex flex-col items-center">FAQ</span>
                            </div>
                            <div className='flex flex-col items-center absolute bottom-3 w-full'>
                                <div className='flex flex-row space-x-4'>
                                    <img src='/assets/instagramSvg.svg' />
                                    <img src='/assets/facebookSvg.svg' />
                                    <img src='/assets/youtubeSvg.svg' />
                                </div>
                                <div className='flex flex-row flex-wrap justify-between items-center bg-[#6C5EA4] text-white text-[12px]  px-4 py-1 my-3 w-full'>
                                    <div className='flex flex-row space-x-3 items-center'>
                                        <img src='/assets/mailSvg.svg' className='hover:cursor-pointer' />
                                        <span className='hover:cursor-pointer' >support@aztreatments.com</span>
                                    </div>
                                    <div className='flex flex-row space-x-3 items-center'>
                                        <span className='hover:cursor-pointer'>+44 020 7042 1880</span>
                                        <img src='/assets/telephoneSvg.svg' className='hover:cursor-pointer' />
                                    </div>
                                </div>
                                <span className='text-white text-[16px] mb-[49px]'>© AZ TREATMENTS 2022</span>
                            </div>
                        </div>}
                        {children}
                        <div className='w-full flex flex-col items-center justify-center pb-5'>
                            <div className='flex md:hidden flex-row items-center justify-between space-x-2 mt-[10px] md:mt-[100px] tb:mt-[200px] w-full'>
                                {!menuOpen && <BsChevronLeft size={25} className='border-[1px] rounded-[50%] w-[40px] h-[40px] p-2 cursor-pointer hover:border-[#E8C229] hover:text-[#E8C229] navigationIcons mobile' />}
                                <div className='flex flex-row items-center space-x-3'>
                                    <img src='/assets/selectedEllipse.png' className='border-[1px] border-[#E8C229] rounded-[1000px] p-[3px]' />
                                    <img src='/assets/ellipse.png' className='' />
                                    <img src='/assets/ellipse.png' className='' />
                                </div>
                                {!menuOpen && <BsChevronRight size={25} className='border-[1px] rounded-[50%] w-[40px] h-[40px] p-2 cursor-pointer hover:border-[#E8C229] navigationIcons mobile' />}

                            </div>
                        </div>
                    </div>
                    <div className='absolute bottom-[50px] w-fit '
                        style={{
                            marginLeft: "auto",
                            marginRight: "auto",
                            left: "0",
                            right: "0",
                            textAlign: "center",
                        }}
                    >
                        <div className='hidden md:flex flex-row items-center space-x-2 mb-[-10px]'>
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