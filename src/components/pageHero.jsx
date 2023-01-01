import React, { useState } from 'react';
import { FaBars } from "react-icons/fa"
import { TfiClose } from "react-icons/tfi"
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
    const Slide1 = () => (
        <div className='self-center md:self-start md:ml-[40px] px-4' >
            <div className='self-center text-center md:text-start md:self-start  md:pl-20 mt-3 md:mt-7 w-full'>
                <span className='text-white text-[35px] tb:text-[55px] font-bold leading-none'>ALL YOU NEED <br />TO BE EPIC</span>
                <p className='md:max-w-[550px] text-[17px] md:text-[16px] text-white mt-10 px-0 md:px-[0px] md:mt-5'>If your skin has started to show wear and tear from sun, aging, acne or other skin conditions there is much that can be done.</p>
            </div>
            <div className='flex flex-col flex-wrap  items-center'>
                <div className='flex flex-col md:flex-row flex-wrap  items-center w-full justify-center md:justify-start md:pl-20 mt-10 md:mt-10'>
                    <button className='bg-white text-[#796AB8] rounded-lg py-3 px-7 w-[249.61px] border-[1px] md:border-[0] font-bold hover:bg-[#ddd] md:mr-[30px] mb-[30px]'>VIEW TREATMENTS</button>
                    <button className='bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-[#fff] rounded-lg py-3 px-7 w-[249.61px] font-bold hover:bg-gradient-to-l md:mr-[30px] mb-[30px]'>VIEW PRODUCTS</button>
                </div>
            </div>
        </div>
    )

    const Slide2 = () => (
        <div className='self-center md:self-start md:ml-[40px] px-4' >
            <div className='self-center text-center md:text-start md:self-start  md:pl-20 mt-3 md:mt-7 w-full'>
                <span className='text-white text-[35px] tb:text-[55px] font-bold leading-none'>PERFECTION <br />TO BE EPIC</span>
                <p className='md:max-w-[550px] text-[17px] md:text-[16px] text-white mt-10 px-0 md:px-[0px] md:mt-5'>If your skin has started to show wear and tear from sun, aging, acne or other skin conditions there is much that can be done.</p>
            </div>
            <div className='flex flex-col flex-wrap  items-center'>
                <div className='flex flex-col md:flex-row flex-wrap  items-center w-full justify-center md:justify-start md:pl-20 mt-10 md:mt-10'>
                    <button className='bg-white text-[#796AB8] rounded-lg py-3 px-7 w-[249.61px] border-[1px] md:border-[0] font-bold hover:bg-[#ddd] md:mr-[30px] mb-[30px]'>VIEW TREATMENTS</button>
                    <button className='bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-[#fff] rounded-lg py-3 px-7 w-[249.61px] font-bold hover:bg-gradient-to-l md:mr-[30px] mb-[30px]'>VIEW PRODUCTS</button>
                </div>
            </div>
        </div>
    )
    return (
        <div className='flex flex-col w-full h-full'>
            <div>
                <div className='relative  mb-7 w-full'>
                    <img src={background} className='hidden md:flex w-full' />
                    <img src={mobileBackground} className='md:hidden w-full' />
                    <div className=' flex flex-col items-center  pt-7 top-0 absolute tb:top-[50px] w-full h-full'>
                        <div className='flex flex-row items-center justify-between w-[90%] mb-10 md:mb-[0px]'>
                            <div className='flex flex-row items-center space-x-3'>
                                <img src='/assets/logoSvg.svg' className='hidden tb:flex md:ml-[85px] ' />
                                <span className='hidden tb:flex text-white font-medium text-[19px] '>TREATMENTS</span>
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
                                            : <TfiClose size={25} className="cursor-pointer" color='#fff' onClick={() => setMenuOpen(!menuOpen)} />
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
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
                        <div id="carouselExampleControls" className="carousel slide h-full" data-interval="7000" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <Slide1 />
                                </div>
                                <div className="carousel-item">
                                    <Slide2 />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">

                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            </a>
                            <div className='w-full flex flex-col items-center justify-center pb-3 absolute bottom-0 px-4'>
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

                    {/* <div className='w-full flex flex-col items-center justify-center pb-3 absolute bottom-0 px-4'>
                        <div className='flex md:hidden flex-row items-center justify-between space-x-2 mt-[10px] md:mt-[100px] tb:mt-[200px] w-full'>
                            {!menuOpen && <BsChevronLeft size={25} className=' border-[1px] rounded-[50%] w-[40px] h-[40px] p-2 cursor-pointer hover:border-[#E8C229] hover:text-[#E8C229] navigationIcons mobile' />}
                            <div className='flex flex-row items-center space-x-3'>
                                <img src='/assets/selectedEllipse.png' className='border-[1px] border-[#E8C229] rounded-[1000px] p-[3px]' />
                                <img src='/assets/ellipse.png' className='' />
                                <img src='/assets/ellipse.png' className='' />
                            </div>
                            {!menuOpen && <BsChevronRight size={25} className=' border-[1px] rounded-[50%] w-[40px] h-[40px] p-2 cursor-pointer hover:border-[#E8C229] navigationIcons mobile' />}

                        </div>
                    </div> */}
                    <div className='absolute bottom-[50px] w-fit '
                        style={{
                            marginLeft: "auto",
                            marginRight: "auto",
                            left: "0",
                            right: "0",
                            textAlign: "center",
                        }}
                    >
                        {/* <div className='hidden md:flex flex-row items-center space-x-2 absolute bottom-0  w-screen bg-red-100'>
                            {!menuOpen && <a><BsChevronLeft size={25} onClick={() => slideTracker("backward")} href="#carouselExampleControls" data-slide="prev" className='carousel-control-prev border-[1px] rounded-[50%] w-[40px] h-[40px] p-2 cursor-pointer hover:border-[#E8C229] hover:text-[#E8C229] navigationIcons mobile' /></a>}
                            <div className='flex flex-row items-center space-x-3'>
                                <img src={slide === 1 ? '/assets/selectedEllipse.png' : '/assets/ellipse.png'} className={`border-[1px] border-[#E8C229] ${slide === 1 && `border-solid`} rounded-[50%] p-[2px]`} />
                                <img src={slide === 2 ? '/assets/selectedEllipse.png' : '/assets/ellipse.png'} className={`border-[1px]  border-[#E8C229] ${slide === 2 && `border-solid`}  rounded-[50%] p-[2px]`} />
                                <img src={slide === 3 ? '/assets/selectedEllipse.png' : '/assets/ellipse.png'} className={`border-[1px]  border-[#E8C229] ${slide === 3 && `border-solid`} rounded-[50%] p-[2px]`} />
                            </div>
                            {!menuOpen && <a> <BsChevronRight size={25} onClick={() => slideTracker("forward")} href="#carouselExampleControls" data-slide="next" className='carousel-control-next border-[1px] rounded-[50%] w-[40px] h-[40px] p-2 cursor-pointer hover:border-[#E8C229] navigationIcons mobile' /></a>}
                        </div> */}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PageHero