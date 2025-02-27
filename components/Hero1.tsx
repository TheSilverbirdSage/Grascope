'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Controller } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import React, { useEffect, useState, useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import image from '@/assets/images/Pattern.png';
import Nav from '@/components/Nav';
import Cards from './Cards';
import Image1 from '@/assets/images/background.png';
import Image2 from '@/assets/images/background2.png';
import Image3 from '@/assets/images/background3.png';
import Image4 from '@/assets/images/background4.png';
import { Swiper as SwiperCore } from 'swiper';

interface SlideData {
    heading: React.ReactNode;
    image: StaticImageData;
}

const Hero1: React.FC = () => {
    const [slidesData, setSlidesData] = useState<SlideData[]>([]);
    const mainSwiperRef = useRef<SwiperCore | null>(null);
    const cardsSwiperRef = useRef<SwiperCore | null>(null);

    useEffect(() => {

         // Initialize AOS
        AOS.init({
            duration: 1000, // Animation duration
            once: false, // Allow animations to trigger every time
        });
        const initialSlidesData: SlideData[] = [
            {
                image: Image1,
                heading: (
                    <div className="home-heading h-screen relative">
                        <div data-aos="fade-up" className='container py-14'>
                            <div className='pl-20 mt-10'>
                                <p className='font-normal text-[80px] text-white'>Welcome To</p>
                                <div className='flex'>
                                    <p className='font-normal text-[80px] text-white'>Grascope </p>
                                    <div className='mx-8 w-[313px] mt-9 h-[60px]'>
                                        <Image src={image} alt="Logo" className='h-auto w-auto' />
                                    </div>
                                    <p className='font-normal text-[80px] text-white'> Industries</p>
                                </div>
                            </div>
                            <div className='pr-[697px] py-5 pl-20'>
                                <p className='text-white font-[400] text-[19px]'>At Grascope Industries, we drive innovation and excellence across various sectors. Focused on growth, sustainability, and client success, we deliver lasting solutions that meet the evolving needs of companies across various industries.</p>
                            </div>
                            <div className='flex pl-20 gap-10'>
                                <button className='border rounded-full bg-[#159B48]/20 border-[#159B48]/50 h-[50px] text-white px-5'>Get Started</button>
                                <button className='border rounded-full bg-transparent border-white h-[50px] text-white px-5'>Learn More</button>
                            </div>
                        </div>
                        <p
                            className="lg:text-xl lg:mt-6 mt-8 text-base leading-6 lg:w-[40%] w-full opacity-70 absolute pl-20 text-white"
                            style={{ bottom: 100, left: 0 }}
                        >
                            Empowering businesses with innovative customer service, cutting-edge Agrotech, and streamlined e-commerce solutions.
                        </p>
                    </div>
                ),
            },
            {
                image: Image2,
                heading: (
                    <div className="home-heading h-screen relative">
                        <div data-aos="fade-left" className='container py-14'>
                            <div className='pl-20 mt-10'>
                                <p className='font-normal text-[20px] text-white'>Our Solutions</p>
                                <p className='font-normal text-[80px] text-white'>AgroTech Solutions </p>
                            </div>
                            <div className='pr-[697px] py-5 pl-20'>
                                <p className='text-white font-[400] text-[19px]'>
                                    Our AgroTech solutions harness the power of technology to revolutionize agriculture, enhancing productivity,
                                    sustainability, and resource management.
                                </p>
                            </div>
                            <div className='pl-20'>
                                <button className='border rounded-full bg-transparent border-white h-[50px] text-white px-5'>Learn More</button>
                            </div>
                        </div>
                        <p
                            className="lg:text-xl lg:mt-6 mt-8 text-base leading-6 lg:w-[40%] w-full opacity-70 absolute pl-20 text-white"
                            style={{ bottom: 100, left: 0 }}
                        >
                            Empowering businesses with innovative customer service, cutting-edge Agrotech, and streamlined e-commerce solutions.
                        </p>
                    </div>
                ),
            },
            {
                image: Image3,
                heading: (
                    <div className="home-heading h-screen relative">
                        <div data-aos="fade-left" className='container py-14'>
                            <div className='pl-20 mt-10'>
                                <p className='font-normal text-[20px] text-white'>Our Solutions</p>
                                <p className='font-normal text-[80px] text-white'>Custom Software Solutions </p>
                            </div>
                            <div className='pr-[697px] py-5 pl-20'>
                                <p className='text-white font-[400] text-[19px]'>
                                    Our custom software solutions are tailored to your business needs, delivering scalable and efficient systems that
                                    streamline operations
                                </p>
                            </div>
                            <div className='pl-20'>
                                <button className='border rounded-full bg-transparent border-white h-[50px] text-white px-5'>Learn More</button>
                            </div>
                        </div>
                        <p
                            className="lg:text-xl lg:mt-6 mt-8 text-base leading-6 lg:w-[40%] w-full opacity-70 absolute pl-20 text-white"
                            style={{ bottom: 100, left: 0 }}
                        >
                            Empowering businesses with innovative customer service, cutting-edge Agrotech, and streamlined e-commerce solutions.
                        </p>
                    </div>
                ),
            },
            {
                image: Image4,
                heading: (
                    <div className="home-heading h-screen relative">
                        <div data-aos="fade-left" className='container py-14'>
                            <div className='pl-20 mt-10'>
                                <p className='font-normal text-[20px] text-white'>Our Solutions</p>
                                <p className='font-normal text-[80px] text-white'>E-commerce Solutions </p>
                            </div>
                            <div className='pr-[697px] py-5 pl-20'>
                                <p className='text-white font-[400] text-[19px]'>
                                    Enhance your online business with our state-of-the-art e-commerce solutions, designed to refine user experience and
                                    streamline operations.
                                </p>
                            </div>
                            <div className='pl-20'>
                                <button className='border rounded-full bg-transparent border-white h-[50px] text-white px-5'>Learn More</button>
                            </div>
                        </div>
                        <p
                            className="lg:text-xl lg:mt-6 mt-8 text-base leading-6 lg:w-[40%] w-full opacity-70 absolute pl-20 text-white"
                            style={{ bottom: 100, left: 0 }}
                        >
                            Our solutions ensure a powerful and effective online presence through seamless integration.
                        </p>
                    </div>
                ),
            },
            // Add other slides here...
        ];
        setSlidesData(initialSlidesData);
    }, []);

    const handleSlideChange = (swiper: SwiperCore) => {
        if (slidesData.length > 0) {
            // If you need to use activeBackground, add it here
        }
        if (cardsSwiperRef.current) {
            cardsSwiperRef.current.slideTo(swiper.realIndex);
        }
    };

    return (
        <section className="font-outfit">
            <div className="flex justify-center items-center">
                <Nav />
            </div>
            <Swiper
                modules={[Autoplay, Navigation, Controller]}
                spaceBetween={0}
                slidesPerView={1}
                slidesOffsetBefore={0}
                slidesOffsetAfter={0}
                autoplay={{ delay: 3000 }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    1024: { slidesPerView: 1 },
                }}
                pagination={{ clickable: true }}
                navigation
                loop
                className="h-full w-full"
                onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
                onSlideChange={handleSlideChange}
                controller={{ control: cardsSwiperRef.current }}
            >
                {slidesData.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="h-full relative">
                            <Image
                                src={slide.image}
                                alt="Slide background"
                                fill
                                className="object-cover"
                            />
                            <div className="bg-opacity-30 overflow-hidden lg:pt-8 pt-7 pb-3 w-full h-full">
                                <div className="lg:px-4 px-2 h-full">{slide.heading}</div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <div className="-mt-52 mb-3">
                    <Cards swiperRef={cardsSwiperRef} />
                </div>
            </Swiper>
        </section>
    );
};

export default Hero1;