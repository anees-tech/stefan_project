import React, { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import { GiCircle } from 'react-icons/gi'


function PageHero({ children, background, mobileBackground }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [slide, setSlide] = useState(1);
    const slideTracker = (direction) => {
        if (direction === "forward") {
            if (slide >= 3) {
                setSlide(1)
            } else {
                setSlide(slide + 1)
            }
        } else {
            if (slide <= 1) {
                setSlide(3)
            } else {
                setSlide(slide - 1)
            }
        }
    }
    return (
        <div className='flex flex-col w-full h-full'>
            <div>
                <div className='relative  mb-7 w-full'>
                    <img src={background} className='hidden md:flex w-full' />
                    <img src={mobileBackground} className='md:hidden w-full' />
                    <div className=' flex flex-col items-center  pt-7 top-0 absolute tb:top-[50px] w-full h-full'>

                        {menuOpen && <div className='tb:hidden bg-[#9686DA]  text-[#000] fixed z-20 top-[49px]   flex flex-col items-center justify-start menu h-full w-full'>
                            <div className='flex flex-col justify-center xs:flex-row xs:justify-start items-center bg-[#7F73B1] w-full px-[10px]'>
                                <div className='flex flex-row items-center'>
                                    <img src='/assets/googleSvg.svg' className='h-[50px]' />
                                    <img src='/assets/starsSvg.svg' className='h-[23px] mr-2' />
                                </div>
                                <span className='text-white text-[14px] mt-[7px]  xs:mb-1'>4.5 rating of 25 reviews </span>
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
                                <div className='flex items-center flex-col justify-center xs:flex-row  xs:justify-between bg-[#6C5EA4] text-white text-[12px]  px-4 py-1 my-3 w-full'>
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
                        <div className='w-full flex flex-col items-center justify-center pb-3  px-4 absolute bottom-0'>
                            <div className='flex  flex-row items-center justify-between space-x-2 mt-[10px] md:mt-[100px] tb:mt-[200px] w-full'>
                                {!menuOpen && <a><BsChevronLeft size={25} onClick={() => slideTracker("backward")} href="#carouselExampleControls" data-slide="prev" className='carousel-control-prev border-[1px] rounded-[50%] w-[40px] h-[40px] p-2 cursor-pointer hover:border-[#E8C229] hover:text-[#E8C229] navigationIcons mobile' /></a>}
                                <div className='flex flex-row items-center space-x-3'>
                                    <img src={slide === 1 ? '/assets/selectedEllipse.png' : '/assets/ellipse.png'} className={`border-[1px] border-[#E8C229] ${slide === 1 && `border-solid`} rounded-[50%] p-[2px]`} />
                                    <img src={slide === 2 ? '/assets/selectedEllipse.png' : '/assets/ellipse.png'} className={`border-[1px]  border-[#E8C229] ${slide === 2 && `border-solid`}  rounded-[50%] p-[2px]`} />
                                    <img src={slide === 3 ? '/assets/selectedEllipse.png' : '/assets/ellipse.png'} className={`border-[1px]  border-[#E8C229] ${slide === 3 && `border-solid`} rounded-[50%] p-[2px]`} />
                                </div>
                                {!menuOpen && <a> <BsChevronRight size={25} onClick={() => slideTracker("forward")} href="#carouselExampleControls" data-slide="next" className='carousel-control-next border-[1px] rounded-[50%] w-[40px] h-[40px] p-2 cursor-pointer hover:border-[#E8C229] navigationIcons mobile' /></a>}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PageHero