import React from 'react'

const Homepage = () => {
    return (
        <div>
            <section>
                <div className='flex flex-col items-center mb-5'>
                    <span className='text-[36px] font-bold mb-2'>BRANDS</span>
                    <img src='/assets/colorfulBorder.png' />
                </div>
                <div className='flex flex-row items-center'>
                    <img src='/assets/Brand1.png' />
                    <img src='/assets/Brand2.png' className='mb-[-25px]' />
                    <img src='/assets/Brand3.png' />
                    <img src='/assets/Brand4.png' />
                    <img src='/assets/Brand5.png' />
                    <img src='/assets/Brand6.png' />
                </div>
            </section>

            <section>
                <div className='flex flex-col items-center mb-5'>
                    <span className='text-[36px] font-bold mb-2'>WHY US</span>
                    <img src='/assets/colorfulBorder.png' />
                </div>
                <div className='flex flex-row items-center space-x-5'>
                    <div className='flex flex-col items-start w-[290px] h-[220px] bg-[#796AB81A] px-5 py-3 rounded-[20px] border-t-[3px] border-t-[#796AB8]'>
                        <img src='/assets/homeTreatement.png' />
                        <div className='mt-[-20px]'>
                            <span className='font-semibold text-[17px] text-[#3F3F3F]'>Home treatments</span>
                            <p className='text-[14px] text-[#3F3F3F] mt-3'>We are focused on bringing affordable, and quality healthcare to your doorstep,</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-start w-[290px] h-[220px] bg-[#FFFFFF] px-5 py-3 rounded-[20px] border-t-[3px] border-t-[#796AB8]'>
                        <img src='/assets/clinicTreatment.png' />
                        <div className='mt-[-20px]'>
                            <span className='font-semibold text-[17px] text-[#3F3F3F]'>Clinic Treatments</span>
                            <p className='text-[14px] text-[#3F3F3F] mt-3'>Fancy for a walk in central of London, come and visit us to own your look.</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-start w-[290px] h-[220px] bg-[#FFFFFF] px-5 py-3 rounded-[20px] border-t-[3px] border-t-[#796AB8]'>
                        <img src='/assets/ukShipping.png' />
                        <div className='mt-[-20px]'>
                            <span className='font-semibold text-[17px] text-[#3F3F3F]'>UK Shipping</span>
                            <p className='text-[14px] text-[#3F3F3F] mt-3'>Our products are available for delivery anywhere in United Kingdom.</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-start w-[290px] h-[220px] bg-[#FFFFFF] px-5 py-3 rounded-[20px] border-t-[3px] border-t-[#796AB8]'>
                        <img src='/assets/2languages.png' />
                        <div className='mt-[-20px]'>
                            <span className='font-semibold text-[17px] text-[#3F3F3F]'>2 Languages</span>
                            <p className='text-[14px] text-[#3F3F3F] mt-3'>English and Romanian</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Homepage