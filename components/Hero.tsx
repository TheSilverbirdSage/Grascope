import React from 'react'
import Image from 'next/image'
import image from '@/assets/images/Pattern.png'
import Button from './Button'
import Cards from './Cards'
import Navbar from "../components/Navbar";


const Hero = () => {
    return (
        <section className=''>
            {/* <div className="flex justify-center items-center">
                <Navbar />
            </div> */}
            <div className='container py-10'>
                <div className='pl-20'>
                    <p className='font-small text-[80px] text-white'>Welcome To</p>
                    <div className='flex'>
                        <p className='font-small text-[80px] text-white'>Grascope </p>
                        <div className='mx-8 w-[313px] mt-9 h-[60px]'>
                            <Image src={image} alt="Logo" className='h-auto w-auto' />
                        </div>
                        <p className='font-small text-[80px] text-white'> Industries</p>
                    </div>
                </div>
                <div className='pl-20 py-5'>
                    <p className='text-white font-[400] text-[19px] pr-[697px]'>At Grascope Industries, we drive innovation and excellence across various sectors. Focused on growth, sustainability, and client success, we deliver lasting solutions that meet the evolving needs of companies across various industries.</p>
                </div>
                <div className='pr-[697px] py-5 flex gap-10 pl-20'>
                    <button className='border rounded-full bg-[#159B48]/20 border-[#159B48]/50 h-[60px] text-white px-5'>Get Started</button>
                    <button className='border rounded-full bg-transparent border-white h-[60px] text-white px-5'>Learn More</button>
                </div>
            </div>
            {/* <div className="mt-1 flex flex-col whitespace-nowrap">
                <div className='pl-20 text-white text-[16px] font-[400]'>
                    <p>Empowering businesses with innovative customer
                        <br /> service, cutting-edge Agrotech, and streamlined
                        <br /> e-commerce solutions, tailored to enhance growth
                        <br /> and efficiency.</p>
                </div>
                <Cards />
            </div> */}
        </section>
    )
}

export default Hero