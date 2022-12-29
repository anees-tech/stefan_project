import React, { useState } from 'react';
import { FaBars } from "react-icons/fa"
import { IoMdClose } from "react-icons/io"


function PageHero({ children, background }) {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className='flex flex-col items-center w-full'>
            <div
                className='pt-5 tb:pt-[78px]'
                style={{
                    backgroundImage: background,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "800px",
                    width: "105%",
                }}>
                <div className='flex flex-col items-center'>
                    <div className='flex flex-row items-center justify-between w-[90%]'>
                        <img src='/assets/logoSvg.svg' />

                        <div className='hidden md:flex flex-row items-center space-x-4'>
                            <span className='text-white text-[16px] hover:cursor-pointer'>HOME</span>
                            <span className='text-[#FFFFFF80] text-[16px] hover:text-white hover:cursor-pointer'>TREATMENTS</span>
                            <span className='text-[#FFFFFF80] text-[16px] hover:text-white hover:cursor-pointer'>PRODUCTS</span>
                            <span className='text-[#FFFFFF80] text-[16px] hover:text-white hover:cursor-pointer'>CONTACT US</span>
                            <span className='text-[#FFFFFF80] text-[16px] hover:text-white hover:cursor-pointer'>FAQ</span>
                        </div>
                        <div className='md:hidden mr-10 flex flex-row items-center space-x-5' >
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

                    <div className='flex flex-row items-center space-x-2 mt-[60px] md:mt-[100px] tb:mt-[200px]'>
                        <img src='/assets/selectedEllipse.png' className='border-[1px] border-[#E8C229] rounded-[1000px] p-[2px]' />
                        <img src='/assets/ellipse.png' className='border-[1px] border-[#ddd] rounded-[1000px] md:border-[0px]' />
                        <img src='/assets/ellipse.png' className='border-[1px] border-[#ddd] rounded-[1000px] md:border-[0px]' />
                    </div>
                </div>
            </div>
            <div className='flex flex-row items-center justify-between w-[50%] mt-3 md:mt-[0px]'>
                <img src='/assets/backIconSvg.svg' className='hover:cursor-pointer hover:scale-75' />
                <img src='/assets/forwardIconSvg.svg' className='hover:cursor-pointer hover:scale-75' />
            </div>
        </div>
    )
}

export default PageHero