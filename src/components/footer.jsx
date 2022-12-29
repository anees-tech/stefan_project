import React from 'react'
import { BiChevronRight } from "react-icons/bi"

const Footer = () => {
    return (
        <div
            className='flex flex-col pl-4 md:pl-[0px]'
            style={{
                backgroundImage: "url('/assets/footerBackground.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                paddingTop: "78px",
                height: "100%px",
                width: "105%"
            }}>
            <div className='flex flex-row flex-wrap items-start ft:justify-between justify-center'>
                <div className='flex flex-col items-start mt-[300px] md:mt-[200px] mb-[20px] pl-[60px]'>
                    <p className='text-white max-w-[522px] mb-10'>You will be charged if you don't arrive in time or cancel your appointment within 24 h prior to your booking.</p>
                    <div className='flex flex-row items-center justify-between bg-[#FFFFFF0F] p-3 w-[300px] cursor-pointer'>
                        <div className='flex flex-col items-center justify-center'>
                            <span className='text-[16px] text-[#E8C229]'>Talk To Our Support</span>
                            <span className='text-white'>+44 7711111111</span>
                        </div>
                        <img src='/assets/callCenterIconSvg.svg' />
                    </div>
                </div>

                <div className='pr-[100px] flex flex-row flex-wrap justify-center space-x-20'>
                    <div className='flex flex-col items-start text-start'>
                        <div className='mb-7'>
                            <h1 className='text-white font-semibold text-[17px]'>CUSTOMER CARE</h1>
                            <hr className='w-[75px] h-[3px] mt-1 bg-[#E8C229]' />
                        </div>
                        <div className='text-white text-[15px] flex flex-col items-start space-y-3 ml-[-8px]'>
                            <div className='flex flex-row items-center space-x-1 cursor-pointer hover:text-[#E8C229]'>
                                <BiChevronRight size={20} color="#fff" />
                                <span>Contact us</span>
                            </div>
                            <div className='flex flex-row items-center space-x-1 cursor-pointer hover:text-[#E8C229]'>
                                <BiChevronRight size={20} color="#fff" />
                                <span>How to order</span>
                            </div>
                            <div className='flex flex-row items-center space-x-1 cursor-pointer hover:text-[#E8C229]'>
                                <BiChevronRight size={20} color="#fff" />
                                <span>FAQ</span>
                            </div>
                            <div className='flex flex-row items-center space-x-1 cursor-pointer hover:text-[#E8C229]'>
                                <BiChevronRight size={20} color="#fff" />
                                <span>Discounts</span>
                            </div>
                            <div className='flex flex-row items-center space-x-1 cursor-pointer hover:text-[#E8C229]'>
                                <BiChevronRight size={20} color="#fff" />
                                <span>Terms of service</span>
                            </div>
                            <div className='flex flex-row items-center space-x-1 cursor-pointer hover:text-[#E8C229]'>
                                <BiChevronRight size={20} color="#fff" />
                                <span>Privacy policy</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-start text-start'>
                        <div className='mb-7'>
                            <h1 className='text-white font-semibold text-[17px]'>ABOUT US</h1>
                            <hr className='w-[75px] h-[3px] mt-1 bg-[#E8C229]' />
                        </div>
                        <div className='text-white text-[15px] flex flex-col items-start space-y-3 ml-[-8px]'>
                            <div className='flex flex-row items-center space-x-1 cursor-pointer hover:text-[#E8C229]'>
                                <BiChevronRight size={20} color="#fff" />
                                <span>About us</span>
                            </div>
                            <div className='flex flex-row items-center space-x-1 cursor-pointer hover:text-[#E8C229]'>
                                <BiChevronRight size={20} color="#fff" />
                                <span>Partners</span>
                            </div>
                            <div className='flex flex-row items-center space-x-1 cursor-pointer hover:text-[#E8C229]'>
                                <BiChevronRight size={20} color="#fff" />
                                <span>Career</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-start text-start'>
                        <div className='mb-7'>
                            <h1 className='text-white font-semibold text-[17px]'>MY ACCOUNT</h1>
                            <hr className='w-[75px] h-[3px] mt-1 bg-[#E8C229]' />
                        </div>
                        <div className='text-white text-[15px] flex flex-col items-start space-y-3 ml-[-8px]'>
                            <div className='flex flex-row items-center space-x-1 cursor-pointer hover:text-[#E8C229]'>
                                <BiChevronRight size={20} color="#fff" />
                                <span>Track order</span>
                            </div>
                            <div className='flex flex-row items-center space-x-1 cursor-pointer hover:text-[#E8C229]'>
                                <BiChevronRight size={20} color="#fff" />
                                <span>Change appointment</span>
                            </div>
                            <div className='flex flex-row items-center space-x-1 cursor-pointer hover:text-[#E8C229]'>
                                <BiChevronRight size={20} color="#fff" />
                                <span>Subscribe for news</span>
                            </div>
                            <div className='flex flex-row items-center space-x-1 cursor-pointer hover:text-[#E8C229]'>
                                <BiChevronRight size={20} color="#fff" />
                                <span>Login</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className='self-end ft:mr-[100px] pr-[100px]'
                style={{
                    backgroundImage: "url('/assets/copyrightBackgroundSvg.svg')",
                    backgroundRepeat: "no-repeat",
                    // paddingTop: "51px",
                    height: "51px",
                    width: "720px"
                }}>
            </div>
        </div>
    )
}

export default Footer