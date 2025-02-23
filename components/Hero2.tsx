'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import image from '@/assets/images/Pattern.png';
import Navbar from "../components/Navbar";
import Cards from './Cards'

interface SlideData {
    heading: React.ReactNode;
}

const Hero2: React.FC = () => {
    const [slidesData, setSlidesData] = useState<SlideData[]>([]);

    useEffect(() => {
        const initialSlidesData: SlideData[] = [
            {
                heading: (
                    <div className="home-heading bg-banner1 bg-no-repeat bg-cover bg-bottom object-cover w-full h-screen relative">
                        <div className='container py-14'>
                            <div className='pl-20 '>
                                <p className='font-small text-[80px] text-white'>Welcome To</p>
                                <div className='flex'>
                                    <p className='font-small text-[80px] text-white'>Grascope </p>
                                    <div className='mx-8 w-[313px] mt-9 h-[60px]'>
                                        <Image src={image} alt="Logo" className='h-auto w-auto' />
                                    </div>
                                    <p className='font-small text-[80px] text-white'> Industries</p>
                                </div>
                            </div>
                            <div className='pr-[697px] py-5 pl-20'>
                                <p className='text-white font-[400] text-[19px]'>At Grascope Industries, we drive innovation and excellence across various sectors. Focused on growth, sustainability, and client success, we deliver lasting solutions that meet the evolving needs of companies across various industries.</p>
                            </div>
                            <div className='pr-[697px] py-5 flex gap-10 pl-52'>
                                <button className='border rounded-full bg-[#159B48]/20 border-[#159B48]/50 h-[60px] text-white px-5'>Get Started</button>
                                <button className='border rounded-full bg-transparent border-white h-[60px] text-white px-5'>Learn More</button>
                            </div>
                        </div>
                        <p
                            className="lg:text-xl lg:mt-6 mt-8 text-base leading-6 lg:w-[40%] w-full opacity-70 absolute"
                            style={{ bottom: 0, left: 0 }}
                        >
                            Empowering businesses with innovative customer service, cutting-edge Agrotech, and streamlined e-commerce solutions.
                        </p>
                    </div>
                ),
            },
            {
                heading: (
                    <div className="home-heading2 h-full relative pl-20">
                        <p className="font-small text-[80px] text-white">Our Solutions</p>
                        <h1 className="text-5xl lg:w-[90%] w-full font-medium flex items-center header2-heading">
                            AgroTech Solutions
                        </h1>
                        <p className="lg:text-xl text-base mt-1 leading-6 lg:w-[50%] w-full opacity-70 ext-white">
                            Our AgroTech solutions harness the power of technology to revolutionize agriculture, enhancing productivity,
                            sustainability, and resource management.
                        </p>
                        <button className="border rounded-full bg-transparent border-white h-[60px] text-white px-5">
                            Learn More
                        </button>
                        <p
                            className="lg:text-xl lg:mt-6 mt-8 text-base leading-6 lg:w-[50%] w-full opacity-70 absolute"
                            style={{ bottom: 0, left: 0 }}
                        >
                            From advanced data analytics to precision farming tools, we provide innovative strategies to empower agribusinesses.
                        </p>
                    </div>
                ),
            },
            {
                heading: (
                    <div className="home-heading3 h-full relative">
                        <p className="lg:text-xl text-base opacity-90 text-white">Our Solutions</p>
                        <h1 className="text-5xl lg:w-[90%] w-full font-medium flex items-center text-white">
                            Custom Software Solutions
                        </h1>
                        <p className="lg:text-xl text-base mt-1 leading-6 lg:w-[50%] w-full opacity-70 text-white">
                            Our custom software solutions are tailored to your business needs, delivering scalable and efficient systems that
                            streamline operations.
                        </p>
                        <button className="border rounded-full bg-transparent border-white h-[60px] text-white px-5">
                            Learn More
                        </button>
                        <p
                            className="lg:text-xl lg:mt-6 mt-8 text-base leading-6 lg:w-[50%] w-full opacity-70 absolute"
                            style={{ bottom: 0, left: 0 }}
                        >
                            We develop tailored solutions that enhance performance and deliver measurable results.
                        </p>
                    </div>
                ),
            },
            {
                heading: (
                    <div className="home-heading4 h-full relative">
                        <p className="lg:text-xl text-base opacity-90 text-white">Our Solutions</p>
                        <h1 className="text-5xl lg:w-[90%] w-full font-medium flex items-center header4-heading">
                            E-commerce Solution
                        </h1>
                        <p className="lg:text-xl text-base mt-1 leading-6 lg:w-[50%] w-full opacity-70 text-white">
                            Enhance your online business with our state-of-the-art e-commerce solutions, designed to refine user experience and
                            streamline operations.
                        </p>
                        <button className="border rounded-full bg-transparent border-white h-[60px] text-white px-5">
                            Learn More
                        </button>
                        <p
                            className="lg:text-xl lg:mt-6 mt-8 text-base leading-6 lg:w-[50%] w-full opacity-70 absolute"
                            style={{ bottom: 0, left: 0 }}
                        >
                            Our solutions ensure a powerful and effective online presence through seamless integration.
                        </p>
                    </div>
                ),
            },
        ];
        setSlidesData(initialSlidesData);
    }, []);

    return (
        <section className="py-16">
              <div className="flex justify-center items-center">
                <Navbar />
            </div>
            <Swiper
                modules={[Autoplay, Navigation ]}
                spaceBetween={0}
                slidesPerView={1}
                slidesOffsetBefore={0}
                slidesOffsetAfter={0}
                autoplay={{ delay: 3000 }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    1024: { slidesPerView: 1 },
                }}
            >
                {slidesData.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="h-full mt-[-50px]">
                            <div className=" bg-opacity-30 overflow-hidden lg:pt-8 pt-7 pb-3 w-full h-full">
                                <div className="lg:px-4 px-2 h-full">{slide.heading}</div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Cards />
        </section>
    );
};

export default Hero2;