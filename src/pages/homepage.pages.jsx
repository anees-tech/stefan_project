import React from 'react'
import Footer from '../components/footer'
import PageHero from '../components/pageHero'

const Homepage = () => {
    return (
        <>
            <PageHero background={"url('/assets/homepageHeroSvg.svg')"}>
                <div className='self-start'>
                    <div className='self-start pl-10 md:pl-20 mt-7 w-full'>
                        <span className='text-white text-[35px] md:text-[75px] font-bold leading-none'>ALL YOU NEED <br />TO BE EPIC</span>
                        <p className='max-w-[550px] text-[10px] md:text-[16px] text-white mt-5'>If your skin has started to show wear and tear from sun, aging, acne or other skin conditions there is much that can be done.</p>
                    </div>
                    <div className='flex flex-row flex-wrap justify-center md:justify-start md:pl-20 mt-10 md:mt-20'>
                        <button className='bg-white text-[#796AB8] rounded-lg py-3 px-7 w-[249.61px] font-bold hover:bg-[#ddd] mr-[30px] mb-[30px]'>VIEW TREATMENTS</button>
                        <button className='bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-[#fff] rounded-lg py-3 px-7 w-[249.61px] font-bold hover:bg-gradient-to-l mr-[30px] mb-[30px]'>VIEW PRODUCTS</button>
                    </div>
                </div>
            </PageHero>
            <div className='flex flex-col items-center mt-10 w-full'>
                <section>
                    <div className='flex flex-col items-center mb-5'>
                        <span className='text-[36px] font-bold mb-2'>BRANDS</span>
                        <img src='/assets/colorfulBorder.png' />
                    </div>
                    <div className='flex flex-col lg:flex-row items-center'>
                        <img src='/assets/Brand1.png' />
                        <img src='/assets/Brand2.png' className='mb-[-25px]' />
                        <img src='/assets/Brand3.png' />
                        <img src='/assets/Brand4.png' />
                        <img src='/assets/Brand5.png' />
                        <img src='/assets/Brand6.png' />
                    </div>
                </section>

                <section className='mb-[-70px] z-10 flex flex-col items-center w-[100%]'>
                    <div className='flex flex-col items-center mb-5'>
                        <span className='text-[36px] font-bold mb-2'>WHY US</span>
                        <img src='/assets/colorfulBorder.png' />
                    </div>
                    <div className='flex flex-row flex-wrap items-center justify-center'>
                        <div className='flex flex-col items-start w-[290px] h-[220px] bg-[#796AB81A] px-5 py-3 rounded-[20px] border-t-[3px] border-t-[#796AB8] shadow-lg cursor-pointer mr-4 mb-4'>
                            <img src='/assets/homeTreatmentSvg.svg' />
                            <div className='mt-[-20px]'>
                                <span className='font-semibold text-[17px] text-[#3F3F3F]'>Home treatments</span>
                                <p className='text-[14px] text-[#3F3F3F] mt-3'>We are focused on bringing affordable, and quality healthcare to your doorstep,</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-start w-[290px] h-[220px] bg-[#FFFFFF] px-5 py-3 rounded-[20px] border-t-[3px] border-t-[#796AB8] shadow-lg cursor-pointer hover:bg-[#796AB81A] mr-4 mb-4'>
                            <img src='/assets/clinicTreatmentSvg.svg' />
                            <div className='mt-[-20px]'>
                                <span className='font-semibold text-[17px] text-[#3F3F3F]'>Clinic Treatments</span>
                                <p className='text-[14px] text-[#3F3F3F] mt-3'>Fancy for a walk in central of London, come and visit us to own your look.</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-start w-[290px] h-[220px] bg-[#FFFFFF] px-5 py-3 rounded-[20px] border-t-[3px] border-t-[#796AB8] shadow-lg cursor-pointer hover:bg-[#796AB81A] mr-4 mb-4'>
                            <img src='/assets/ukShippingSvg.svg' />
                            <div className='mt-[-20px]'>
                                <span className='font-semibold text-[17px] text-[#3F3F3F]'>UK Shipping</span>
                                <p className='text-[14px] text-[#3F3F3F] mt-3'>Our products are available for delivery anywhere in United Kingdom.</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-start w-[290px] h-[220px] bg-[#FFFFFF] px-5 py-3 rounded-[20px] border-t-[3px] border-t-[#796AB8] shadow-lg cursor-pointer hover:bg-[#796AB81A] mr-4'>
                            <img src='/assets/2LanguagesSvg.svg' />
                            <div className='mt-[-20px]'>
                                <span className='font-semibold text-[17px] text-[#3F3F3F]'>2 Languages</span>
                                <p className='text-[14px] text-[#3F3F3F] mt-3'>English and Romanian</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='flex flex-col md:flex-row md:items-center justify-between md:justify-center space-x-10 w-[85%] bg-[#FBFBFB] rounded-[25px] pt-[90px] pb-[30px] px-[40px] mb-10'>
                    <img src='/assets/treatmentHomeSvg.svg' className='md:w-[40%] w-full mb-5 md:mb-0' />

                    <div className='md:w-[60%] w-full'>
                        <div className='flex flex-col items-start mb-5'>
                            <span className='text-[36px] font-bold mb-2'>Home Treatments</span>
                            <img src='/assets/colorfulBorder.png' />
                        </div>
                        <p className='mb-20'>
                            We can offer your treatments at your house. Just look for the treatment you wish and book your favourite day and hour to get it done.
                            <br /> <br /> <span className='font-bold text-[20px]'>Note! </span><br /> The treatmts at your house tent to be more expensive then in the clinic. For <span className='font-bold'>traveling outside of London </span>will be <span className='font-bold'>additional charges </span> in top of the treatment/s price.
                        </p>
                        <button className='bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-white font-bold text-[19px] md:w-[325px] py-3 px-3 rounded-lg hover:bg-gradient-to-l'>CHECK TREATMENTS</button>
                    </div>
                </section>

                <section className='flex flex-col items-center mb-10 w-full'>
                    <div className='flex flex-col items-center mb-5'>
                        <span className='text-[36px] font-bold mb-2'>PRODUCTS</span>
                        <img src='/assets/colorfulBorder.png' />
                    </div>
                    <div className='flex flex-row items-center w-fit bg-[#FBFBFB] p-3 mb-10'>
                        <button className='bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-white font-bold text-[22px] md:w-[225px] px-5 py-3 rounded-lg hover:bg-gradient-to-l'>NEW ARRIVALS</button>
                        <button className='bg-[#FBFBFB] text-[#000] font-medium text-[22px] md:w-[225px] px-5 py-3 rounded-lg hover:bg-[#ddd]'>MOST POPULAR</button>
                    </div>
                    <div className='flex flex-row flex-wrap items-center justify-center w-full bg-[#FCFCFC] pb-5 ml-5'>
                        <img src='/assets/backIconSvg.svg' className='hidden xl:flex cursor-pointer hover:scale-75' />
                        <div className='flex flex-col items-start w-[365px] px-3 py-4 bg-[#E1C75C1A] rounded-[20px] border-[1px] border-[#E1C75C] mr-[50px] mb-[30px] shadow-lg'>
                            <img src='/assets/sunScreenSvg.svg' className='h-[100px] md:h-full' />
                            <span className='text-[20px] font-bold'>BIO WATERY SUN CREAM</span>
                            <span className='text-[#C6C6C6] text-[14px]'>SPF50+ PA++++-P</span>
                            <div className='flex flex-row items-center justify-between mt-3 w-full mb-2'>
                                <div className='flex flex-row items-center space-x-3'>
                                    <img src='/assets/fullStars.png' />
                                    <span className='text-[#C6C6C6]'>4.5/5</span>
                                </div>
                                <div>
                                    <s className='text-[#C6C6C6] text-[22px]'>$1,799.99</s>
                                </div>
                            </div>
                            <div className='w-full flex flex-row items-center justify-between'>
                                <button className='bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-white font-bold text-[17px] w-[200px] px-4 py-2 rounded-lg hover:bg-gradient-to-l'>ADD TO CART</button>
                                <span className='font-semibold text-transparent text-[28px] bg-clip-text bg-gradient-to-b from-[#9D90D5] to-[#796AB8]'>$1,149.99</span>
                            </div>
                        </div>
                        <div className='flex flex-col items-start w-[365px] px-3 py-4 bg-[#fff] rounded-[20px] mr-[50px] mb-[30px] shadow-lg'>
                            <img src='/assets/sunScreenSvg.svg' className='h-[100px] md:h-full' />
                            <span className='text-[20px] font-bold'>BIO WATERY SUN CREAM</span>
                            <span className='text-[#C6C6C6] text-[14px]'>SPF50+ PA++++-P</span>
                            <div className='flex flex-row items-center justify-between mt-3 w-full mb-2'>
                                <div className='flex flex-row items-center space-x-3'>
                                    <img src='/assets/fullStars.png' />
                                    <span className='text-[#C6C6C6]'>4.5/5</span>
                                </div>
                                <div>
                                    <s className='text-[#C6C6C6] text-[22px]'>$1,799.99</s>
                                </div>
                            </div>
                            <div className='w-full flex flex-row items-center justify-between'>
                                <button className='bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-white font-bold text-[17px] w-[200px] px-4 py-2 rounded-lg hover:bg-gradient-to-l'>ADD TO CART</button>
                                <span className='font-semibold text-transparent text-[28px] bg-clip-text bg-gradient-to-b from-[#9D90D5] to-[#796AB8]'>$1,149.99</span>
                            </div>
                        </div>
                        <div className='flex flex-col items-start w-[365px] px-3 py-4 bg-[#fff] rounded-[20px] mr-[50px] mb-[30px] shadow-lg'>
                            <img src='/assets/sunScreenSvg.svg' className='h-[100px] md:h-full' />
                            <span className='text-[20px] font-bold'>BIO WATERY SUN CREAM</span>
                            <span className='text-[#C6C6C6] text-[14px]'>SPF50+ PA++++-P</span>
                            <div className='flex flex-row items-center justify-between mt-3 w-full mb-2'>
                                <div className='flex flex-row items-center space-x-3'>
                                    <img src='/assets/fullStars.png' />
                                    <span className='text-[#C6C6C6]'>4.5/5</span>
                                </div>
                                <div>
                                    <s className='text-[#C6C6C6] text-[22px]'>$1,799.99</s>
                                </div>
                            </div>
                            <div className='w-full flex flex-row items-center justify-between'>
                                <button className='bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-white font-bold text-[17px] w-[200px] px-4 py-2 rounded-lg hover:bg-gradient-to-l'>ADD TO CART</button>
                                <span className='font-semibold text-transparent text-[28px] bg-clip-text bg-gradient-to-b from-[#9D90D5] to-[#796AB8]'>$1,149.99</span>
                            </div>
                        </div>
                        <img src='/assets/forwardIconSvg.svg' className='hidden xl:flex cursor-pointer hover:scale-75' />
                    </div>
                    <div className='flex flex-row'>
                        <img src='/assets/backIconSvg.svg' className='xl:hidden cursor-pointer hover:scale-75' />
                        <img src='/assets/forwardIconSvg.svg' className='xl:hidden cursor-pointer hover:scale-75' />
                    </div>
                </section>

                <section className='w-full flex flex-col items-center'>
                    <div className='flex flex-col items-center mb-5'>
                        <span className='text-[36px] font-bold mb-2'>CUSTOMER REVIEWS</span>
                        <img src='/assets/colorfulBorder.png' />
                    </div>
                    <div className='flex flex-col items-center w-full'>
                        <div className='flex flex-col md:flex-row justify-start items-start shadow-lg py-4 rounded-[20px] w-[90%] mb-5'>
                            <img src='/assets/Jessica L SVG.svg' />
                            <div className='flex flex-row items-start justify-between w-full mr-4'>
                                <div className='flex flex-col items-start pl-3'>
                                    <span className='text-[32px] font-bold'>Jessica L.</span>
                                    <div className='flex flex-row items-center space-x-3 mb-2'>
                                        <img src='/assets/checkMark.png' className='h-fit' />
                                        <span className='text-[#A1A1A1] text-[20px]'>Verified Buyer</span>
                                    </div>
                                    <div className='flex flex-row space-x-3 mb-4'>
                                        <img src='/assets/fullStars.png' />
                                        <span>5/5</span>
                                    </div>
                                    <p className='mb-[50px] md:mb-[100px] text-[20px]'>These is the best product I bought so far! I love how they grab color too. So
                                        excited about this products!</p>
                                    <button className='self-center bg-gradient-to-r from-[#9D90D5] to-[#796AB8] text-white rounded-lg w-[225px] py-3 hover:bg-gradient-to-l'>VISIT PRODUCT</button>
                                </div>
                                <span className='text-[20px]'>1 h ago</span>
                            </div>

                        </div>
                        <div className='flex flex-col md:flex-row justify-start items-start shadow-lg py-4 rounded-[20px] w-[90%] mb-5'>
                            <img src='/assets/Jessica L SVG.svg' />
                            <div className='flex flex-row items-start justify-between w-full mr-4'>
                                <div className='flex flex-col items-start pl-3'>
                                    <span className='text-[32px] font-bold'>Jessica L.</span>
                                    <div className='flex flex-row items-center space-x-3 mb-2'>
                                        <img src='/assets/checkMark.png' className='h-fit' />
                                        <span className='text-[#A1A1A1] text-[20px]'>Verified Buyer</span>
                                    </div>
                                    <div className='flex flex-row space-x-3 mb-4'>
                                        <img src='/assets/fullStars.png' />
                                        <span>5/5</span>
                                    </div>
                                    <p className='mb-[50px] md:mb-[100px] text-[20px]'>These is the best product I bought so far! I love how they grab color too. So
                                        excited about this products!</p>
                                    <button className='self-center bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-white rounded-lg w-[225px] py-3 hover:bg-gradient-to-l'>VISIT TREATMENT</button>
                                </div>
                                <span className='text-[20px]'>3 h ago</span>
                            </div>

                        </div>
                        <div className='flex flex-col md:flex-row justify-start items-start shadow-lg py-4 rounded-[20px] w-[90%] mb-5'>
                            <img src='/assets/Jessica L SVG.svg' />
                            <div className='flex flex-row items-start justify-between w-full mr-4'>
                                <div className='flex flex-col items-start pl-3'>
                                    <span className='text-[32px] font-bold'>Jessica L.</span>
                                    <div className='flex flex-row items-center space-x-3 mb-2'>
                                        <img src='/assets/checkMark.png' className='h-fit' />
                                        <span className='text-[#A1A1A1] text-[20px]'>Verified Buyer</span>
                                    </div>
                                    <div className='flex flex-row space-x-3 mb-4'>
                                        <img src='/assets/fullStars.png' />
                                        <span>5/5</span>
                                    </div>
                                    <p className='mb-[50px] md:mb-[100px] text-[20px]'>These is the best product I bought so far! I love how they grab color too. So
                                        excited about this products!</p>
                                    <button className='self-center bg-gradient-to-r from-[#9D90D5] to-[#796AB8] text-white rounded-lg w-[225px] py-3 hover:bg-gradient-to-l'>VISIT TREATMENT</button>
                                </div>
                                <span className='text-[20px]'>5 h ago</span>
                            </div>
                        </div>
                    </div>
                    <button className='self-center bg-gradient-to-r from-[#E1C75C] to-[#C2A013] text-white rounded-lg w-[299.72px] py-3 my-7 font-semibold hover:bg-gradient-to-l'>LOAD MORE COMMENTS</button>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Homepage