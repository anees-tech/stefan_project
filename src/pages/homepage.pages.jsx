import React from 'react'
import Footer from '../components/footer'
import PageHero from '../components/pageHero'
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import RatingHeader from '../components/ratingHeader'

const Homepage = () => {
    return (
        <div className='w-full bg-[#FAFAFA]'>
            <RatingHeader />
            <PageHero>
                <div className='self-center md:self-start md:ml-[40px]' >
                    <div className='self-center text-center md:text-start md:self-start  md:pl-20 mt-3 md:mt-7 w-full'>
                        <span className='text-white text-[35px] tb:text-[55px] font-bold leading-none'>ALL YOU NEED <br />TO BE EPIC</span>
                        <p className='md:max-w-[550px] text-[17px] md:text-[16px] text-white mt-10 px-0 md:px-[0px] md:mt-5'>If your skin has started to show wear and tear from sun, aging, acne or other skin conditions there is much that can be done.</p>
                    </div>
                    <div className='flex flex-col flex-wrap  items-center'>
                        <div className='flex flex-col md:flex-row flex-wrap  items-center w-full justify-center md:justify-start md:pl-20 mt-20 md:mt-10'>
                            <button className='bg-white text-[#796AB8] rounded-lg py-3 px-7 w-[249.61px] border-[1px] md:border-[0] font-bold hover:bg-[#ddd] md:mr-[30px] mb-[30px]'>VIEW TREATMENTS</button>
                            <button className='bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-[#fff] rounded-lg py-3 px-7 w-[249.61px] font-bold hover:bg-gradient-to-l md:mr-[30px] mb-[30px]'>VIEW PRODUCTS</button>
                        </div>
                    </div>
                </div>
            </PageHero>
            <div className='flex flex-col items-center md:mt-[80px] w-full'>
                <section>
                    <div className='flex flex-col items-center mb-5'>
                        <span className='text-[36px] font-bold mb-2'>BRANDS</span>
                        <img src='/assets/colorfulBorder.png' />
                    </div>
                    <div className='flex flex-col lg:flex-row flex-wrap items-center mb-10 tb:mb-0'>
                        <img src='/assets/Brand1.png' className='hover:shadow-xl hover:mb-[12px] rounded-lg' />
                        <img src='/assets/Brand2.png' className='hidden md:flex mb-[-25px]' />
                        <img src='/assets/Brand3.png' className='hover:shadow-xl hover:mb-[12px] rounded-lg' />
                        <img src='/assets/Brand4.png' className='hover:shadow-xl hover:mb-[12px] rounded-lg' />
                        <img src='/assets/Brand5.png' className='hidden md:flex hover:shadow-xl hover:mb-[12px] rounded-lg' />
                        <img src='/assets/Brand6.png' className='hidden md:flex hover:shadow-xl hover:mb-[12px] rounded-lg pr-3' />
                    </div>
                </section>

                <section className='mb-[-70px] z-10 flex flex-col items-center w-full'>
                    <div className='flex flex-col items-center mb-5'>
                        <span className='text-[36px] font-bold mb-2'>WHY US</span>
                        <img src='/assets/colorfulBorder.png' />
                    </div>
                    <div className='flex flex-row overflow-x-auto scrolling-touch scrollbar-hide w-full md:w-[90%] items-center justify-start'>
                        <div
                            class="flex flex-row justify-start md:screen w-screen ml-[52px]">
                            <div className='flex-none md:flex flex-col items-start w-[290px] h-[220px] bg-[#FFFFFF] px-5 py-3 rounded-[20px] border-t-[3px] border-t-[#796AB8] shadow-lg cursor-pointer hover:bg-[#796AB81A] mr-4 mb-4'>
                                <img src='/assets/homeTreatmentSvg.svg' />
                                <div className='mt-[-20px]'>
                                    <span className='font-semibold text-[17px] text-[#3F3F3F]'>Home treatments</span>
                                    <p className='text-[14px] text-[#3F3F3F] mt-3'>We are focused on bringing affordable, and quality healthcare to your doorstep,</p>
                                </div>
                            </div>
                            <div className='flex-none md:flex flex-col items-start w-[290px] h-[220px] bg-[#FFFFFF] px-5 py-3 rounded-[20px] border-t-[3px] border-t-[#796AB8] shadow-lg cursor-pointer hover:bg-[#796AB81A] mr-4 mb-4'>
                                <img src='/assets/clinicTreatmentSvg.svg' />
                                <div className='mt-[-20px]'>
                                    <span className='font-semibold text-[17px] text-[#3F3F3F]'>Clinic Treatments</span>
                                    <p className='text-[14px] text-[#3F3F3F] mt-3'>Fancy for a walk in central of London, come and visit us to own your look.</p>
                                </div>
                            </div>
                            <div className='flex-none md:flex flex-col items-start w-[290px] h-[220px] bg-[#FFFFFF] px-5 py-3 rounded-[20px] border-t-[3px] border-t-[#796AB8] shadow-lg cursor-pointer hover:bg-[#796AB81A] mr-4 mb-4'>
                                <img src='/assets/ukShippingSvg.svg' />
                                <div className='mt-[-20px]'>
                                    <span className='font-semibold text-[17px] text-[#3F3F3F]'>UK Shipping</span>
                                    <p className='text-[14px] text-[#3F3F3F] mt-3'>Our products are available for delivery anywhere in United Kingdom.</p>
                                </div>
                            </div>
                            <div className='flex-none md:flex flex-col items-start w-[290px] h-[220px] bg-[#FFFFFF] px-5 py-3 rounded-[20px] border-t-[3px] border-t-[#796AB8] shadow-lg cursor-pointer hover:bg-[#796AB81A] mr-4 mb-4'>
                                <img src='/assets/2LanguagesSvg.svg' />
                                <div className='mt-[-20px]'>
                                    <span className='font-semibold text-[17px] text-[#3F3F3F]'>2 Languages</span>
                                    <p className='text-[14px] text-[#3F3F3F] mt-3'>English and Romanian</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className='flex flex-col md:flex-row items-center justify-between md:justify-center md:space-x-10 w-full md:w-[85%] bg-[#FBFBFB] rounded-[25px] pt-[90px] pb-[30px] px-0 md:px-[40px] mb-10'>
                    <img src='/assets/treatmentHomeSvg.svg' className='md:w-[40%] w-[91%] mb-5 md:mb-0 mx-[20px]' />

                    <div className='w-full md:w-[60%] w-full pl-4'>
                        <div className='flex flex-col items-center mb-5'>
                            <span className='text-[36px] font-bold mb-2'>Home Treatments</span>
                            <img src='/assets/colorfulBorder.png' />
                        </div>
                        <p className='mb-20 w-full'>
                            We can offer your treatments at your house. Just look for the treatment you wish and book your favourite day and hour to get it done.
                            <br /> <br /> <span className='font-bold text-[20px]'>Note! </span><br /> The treatmts at your house tent to be more expensive then in the clinic. For <span className='font-bold'>traveling outside of London </span>will be <span className='font-bold'>additional charges </span> in top of the treatment/s price.
                        </p>
                        <div className='flex flex-row justify-center w-full'>
                            <button className='bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-white font-bold text-[19px] w-[325px] py-3 px-3 rounded-lg hover:bg-gradient-to-l '>CHECK TREATMENTS</button>
                        </div>
                    </div>
                </section>

                <section className=' flex flex-col items-center mb-10 w-full'>
                    <div className='flex flex-col items-center mb-5 px-4'>
                        <span className='text-[36px] font-bold mb-2'>PRODUCTS</span>
                        <img src='/assets/colorfulBorder.png' />
                    </div>
                    <div className='flex flex-row items-center space-x-3 w-fit bg-[#F6F6F6] p-3 px-4 mb-10'>
                        <button className='bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-white font-bold text-[18px] md:w-[225px] px-5 py-3 rounded-lg hover:bg-gradient-to-l'>NEW ARRIVALS</button>
                        <button className='bg-[#fff]  text-[#9D90D5] font-medium text-[18px] md:w-[225px] px-5 py-3 rounded-lg hover:bg-[#ddd]'>MOST POPULAR</button>
                    </div>
                    <div className=' flex flex-row overflow-x-auto scrolling-touch scrollbar-hide items-center justify-start tb:justify-center w-full bg-[#FCFCFC] pb-5 pl-4'>
                        {/* <div className='flex flex-row'> */}
                        <BsChevronLeft size={25} className='hidden xl:flex border-[1px] rounded-[50%] w-[40px] h-[40px] p-2 cursor-pointer hover:border-[#E8C229] hover:text-[#E8C229] navigationIcons mr-3' />
                        <div className='flex flex-col items-start  w-[365px] px-3 py-4 hover:bg-[#E1C75C1A] rounded-[20px] border-[1px] border-[#E1C75C] border-hidden hover:border-solid ml-[10px] mr-[25px] mb-[30px] shadow-lg cursor-pointer'>
                            <img src='/assets/sunScreenSvg.svg' className='mb-3' />
                            <span className='text-[20px] font-bold'>BIO WATERY SUN CREAM</span>
                            <span className='text-[#C6C6C6] text-[14px]'>SPF50+ PA++++-P</span>
                            <div className='flex flex-row items-center justify-between mt-3 w-full mb-2'>
                                <div className='flex flex-row items-center space-x-3'>
                                    <img src='/assets/fullStars.png' />
                                    <span className='text-[#C6C6C6]'>4.5/5</span>
                                </div>
                                <div>
                                    <s className='text-[#C6C6C6] text-[19px]'>$1,799.99</s>
                                </div>
                            </div>
                            <div className='w-full flex flex-row items-center justify-between'>
                                <button className='bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-white font-bold text-[17px] w-[170px] px-2 py-1 rounded-[50px] hover:bg-gradient-to-l'>ADD TO CART</button>
                                <span className='font-semibold text-transparent text-[25px] bg-clip-text bg-gradient-to-b from-[#9D90D5] to-[#796AB8]'>$1,149.99</span>
                            </div>
                        </div>
                        <div className='flex flex-col items-start w-[365px] px-3 py-4 hover:bg-[#E1C75C1A] rounded-[20px] border-[1px] border-[#E1C75C] border-hidden hover:border-solid mr-[25px] mb-[30px] shadow-lg cursor-pointer'>
                            <img src='/assets/sunScreenSvg.svg' className='mb-3' />
                            <span className='text-[20px] font-bold'>BIO WATERY SUN CREAM</span>
                            <span className='text-[#C6C6C6] text-[14px]'>SPF50+ PA++++-P</span>
                            <div className='flex flex-row items-center justify-between mt-3 w-full mb-2'>
                                <div className='flex flex-row items-center space-x-3'>
                                    <img src='/assets/fullStars.png' />
                                    <span className='text-[#C6C6C6]'>4.5/5</span>
                                </div>
                                <div>
                                    <s className='text-[#C6C6C6] text-[19px]'>$1,799.99</s>
                                </div>
                            </div>
                            <div className='w-full flex flex-row items-center justify-between'>
                                <button className='bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-white font-bold text-[17px] w-[170px] px-2 py-1 rounded-[50px] hover:bg-gradient-to-l'>ADD TO CART</button>
                                <span className='font-semibold text-transparent text-[25px] bg-clip-text bg-gradient-to-b from-[#9D90D5] to-[#796AB8]'>$1,149.99</span>
                            </div>
                        </div>
                        <div className='flex flex-col items-start w-[365px] px-3 py-4 hover:bg-[#E1C75C1A] rounded-[20px] border-[1px] border-[#E1C75C] border-hidden hover:border-solid  mb-[30px] shadow-lg cursor-pointer'>
                            <img src='/assets/sunScreenSvg.svg' className='mb-3' />
                            <span className='text-[20px] font-bold'>BIO WATERY SUN CREAM</span>
                            <span className='text-[#C6C6C6] text-[14px]'>SPF50+ PA++++-P</span>
                            <div className='flex flex-row items-center justify-between mt-3 w-full mb-2'>
                                <div className='flex flex-row items-center space-x-3'>
                                    <img src='/assets/fullStars.png' />
                                    <span className='text-[#C6C6C6]'>4.5/5</span>
                                </div>
                                <div>
                                    <s className='text-[#C6C6C6] text-[19px]'>$1,799.99</s>
                                </div>
                            </div>
                            <div className='w-full flex flex-row items-center justify-between'>
                                <button className='bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-white font-bold text-[17px] w-[170px] px-2 py-1 rounded-[50px] hover:bg-gradient-to-l'>ADD TO CART</button>
                                <span className='font-semibold text-transparent text-[25px] bg-clip-text bg-gradient-to-b from-[#9D90D5] to-[#796AB8]'>$1,149.99</span>
                            </div>
                        </div>
                        <BsChevronRight size={25} className='hidden xl:flex border-[1px] rounded-[50%] w-[40px] h-[40px] p-2 cursor-pointer hover:border-[#E8C229] hover:text-[#E8C229] navigationIcons ml-3' />
                        {/* </div> */}
                    </div>
                </section>

                <section className='w-full flex flex-col items-center'>
                    <div className='flex flex-col items-center mb-5 px-4'>
                        <span className='text-[30px] md:text-[36px] font-bold mb-2'>CUSTOMER REVIEWS</span>
                        <img src='/assets/colorfulBorder.png' />
                    </div>
                    <div className='flex flex-col items-center w-full'>
                        <div className='shadow-lg relative flex flex-col items-center md:items-start w-[91%] md:w-[90%] rounded-[20px] py-4 mb-5'>
                            <div className='flex flex-col md:flex-row items-center md:items-start justify-between w-full pr-2 px-3'>
                                <img src='/assets/Jessica L SVG.svg' />
                                <span className='md:hidden text-[20px] absolute right-[10px]'>3 h ago</span>
                                <div className='flex flex-row items-start justify-center md:justify-between w-full'>
                                    <div className='flex flex-col items-center md:items-start'>
                                        <span className='text-[25px] md:text-[32px] font-bold'>Jessica L.</span>
                                        <div className='flex flex-row items-center self-start space-x-3 mb-2'>
                                            <img src='/assets/checkMark.png' className='h-fit' />
                                            <span className='text-[#A1A1A1] text-[20px]'>Verified Buyer</span>
                                        </div>
                                        <div className='flex flex-row self-start space-x-3 mb-4'>
                                            <img src='/assets/fullStars.png' />
                                            <span>5/5</span>
                                        </div>
                                        <p className='mb-[20px] md:mb-[100px] text-[16px] md:text-[20px]'>These is the best product I bought so far! I love how they grab color too. So
                                            excited about this products!</p>
                                    </div>
                                    <span className='hidden md:flex text-[20px]'>3 h ago</span>
                                </div>

                            </div>
                            <button className='self-center bg-gradient-to-r from-[#9D90D5] to-[#796AB8] text-white rounded-lg w-[225px] py-3 hover:bg-gradient-to-l'>VISIT PRODUCT</button>
                        </div>
                        <div className='shadow-lg relative flex flex-col items-center md:items-start w-[91%] md:w-[90%] rounded-[20px] py-4 mb-5'>
                            <div className='flex flex-col md:flex-row items-center md:items-start justify-between w-full pr-2 px-3'>
                                <img src='/assets/Jessica L SVG.svg' />
                                <span className='md:hidden text-[20px] absolute right-[10px]'>3 h ago</span>
                                <div className='flex flex-row items-start justify-center md:justify-between w-full'>
                                    <div className='flex flex-col items-center md:items-start'>
                                        <span className='text-[25px] md:text-[32px] font-bold'>Jessica L.</span>
                                        <div className='flex flex-row items-center self-start space-x-3 mb-2'>
                                            <img src='/assets/checkMark.png' className='h-fit' />
                                            <span className='text-[#A1A1A1] text-[20px]'>Verified Buyer</span>
                                        </div>
                                        <div className='flex flex-row self-start space-x-3 mb-4'>
                                            <img src='/assets/fullStars.png' />
                                            <span>5/5</span>
                                        </div>
                                        <p className='mb-[20px] md:mb-[100px] text-[16px] md:text-[20px]'>These is the best product I bought so far! I love how they grab color too. So
                                            excited about this products!</p>
                                    </div>
                                    <span className='hidden md:flex text-[20px]'>3 h ago</span>
                                </div>

                            </div>
                            <button className='self-center bg-gradient-to-r from-[#9D90D5] to-[#796AB8] text-white rounded-lg w-[225px] py-3 hover:bg-gradient-to-l'>VISIT PRODUCT</button>
                        </div>
                        <div className='shadow-lg relative flex flex-col items-center md:items-start w-[91%] md:w-[90%] rounded-[20px] py-4 mb-5'>
                            <div className='flex flex-col md:flex-row items-center md:items-start justify-between w-full pr-2 px-3'>
                                <img src='/assets/Jessica L SVG.svg' />
                                <span className='md:hidden text-[20px] absolute right-[10px]'>3 h ago</span>
                                <div className='flex flex-row items-start justify-center md:justify-between w-full'>
                                    <div className='flex flex-col items-center md:items-start'>
                                        <span className='text-[25px] md:text-[32px] font-bold'>Jessica L.</span>
                                        <div className='flex flex-row items-center self-start space-x-3 mb-2'>
                                            <img src='/assets/checkMark.png' className='h-fit' />
                                            <span className='text-[#A1A1A1] text-[20px]'>Verified Buyer</span>
                                        </div>
                                        <div className='flex flex-row self-start space-x-3 mb-4'>
                                            <img src='/assets/fullStars.png' />
                                            <span>5/5</span>
                                        </div>
                                        <p className='mb-[20px] md:mb-[100px] text-[16px] md:text-[20px]'>These is the best product I bought so far! I love how they grab color too. So
                                            excited about this products!</p>
                                    </div>
                                    <span className='hidden md:flex text-[20px]'>3 h ago</span>
                                </div>

                            </div>
                            <button className='self-center bg-gradient-to-r from-[#9D90D5] to-[#796AB8] text-white rounded-lg w-[225px] py-3 hover:bg-gradient-to-l'>VISIT PRODUCT</button>
                        </div>
                    </div>
                    <button className='self-center bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-white rounded-lg w-[91%] md:w-[299.72px] py-3 my-7 mb-10 font-semibold hover:bg-gradient-to-l'>LOAD MORE COMMENTS</button>
                </section>
            </div >
            <Footer />
        </div >
    )
}

export default Homepage