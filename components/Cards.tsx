'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import HeaderImage1 from "@/assets/images/page1box.png";
import HeaderImage2 from "@/assets/images/page2box.png";
import HeaderImage3 from "@/assets/images/page3box.png";
import HeaderImage4 from "@/assets/images/page4box.png";


interface CardProps {
    backgroundImage?: string;
    image?: StaticImageData;
}

const cards = [
    {
        title: 'Who we are',
        description: 'Welcome to Grascope Industries',
        image: HeaderImage1,
    },
    {
        title: 'Our Solutions',
        description: 'AgroTech solution',
        image: HeaderImage2,
    },
    {
        title: 'Our Solutions',
        description: 'Custom software solutions',
        image: HeaderImage3,
    },
    {
        title: 'Our Solutions',
        description: 'E-commerce solutions',
        image: HeaderImage4,
    },
    // Add more cards as needed
];

const Cards: React.FC<CardProps> = ({ backgroundImage }) => {
    return (
        <section className="flex flex-none justify-end z-50" 
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                // backdropFilter: 'blur(10px)', // Optional: Add a blur effect
                // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: Add a fallback background color
            }}
        >
            <div className="w-1/2"> {/* Limit the Swiper container to half of the screen */}
                <Swiper
                    modules={[Autoplay, Navigation]}
                    spaceBetween={5}
                    slidesPerView={1} // This allows the next slide to be visible slightly
                    slidesOffsetBefore={0} // Ensures no offset before the first slide
                    slidesOffsetAfter={0} // Ensures no offset after the last slide
                    className="overflow-visible margin-0 w-full pr-8 mt-3"
                    autoplay={{ delay: 3000 }}
                    navigation
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 1.5 },
                    }}
                >
                    {cards.map((card, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white/10 backdrop-blur-md rounded-3xl flex p-5 text-center w-[450px] h-[140px]">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    className="w-[150px] h-[100px] justify-center rounded-lg"
                                />
                                <div className='p-1 flex-1'>
                                    <p className="text-[16px] font-[400] text-white/50 mb-2">{card.title}</p>
                                    <h3 className="text-white mt-2 font-normal text-base">{card.description}</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
export default Cards;