"use client";
import React, { useState } from 'react';
import Image from 'next/image'
import Logo from '@/assets/images/Logo.png'
import Link from 'next/link';

const Navbar = () => {
    return (
        <section className='py-8 mx-auto'>
            <div className='container'>
                <div className='grid grid-cols-2 lg:grid-cols-3 border border-white/15 bg-white/50 rounded-full p-2 px-4 items-center w-[1240px]'>
                    <div>
                        <Image src={Logo} alt="Logo" className='h-9 w-auto' />
                    </div>
                    <div className='lg:flex justify-center items-center hidden'>
                        <nav className='flex gap-6 font-medium text-white'>
                            <Link href='/' className='hover:font-bold'>
                                Home
                            </Link>
                            <Link href='/' className='hover:font-bold'>
                                Features
                            </Link>
                            <Link href='/' className='hover:font-bold'>
                                Integrations
                            </Link>
                            <Link href='/' className='hover:font-bold'>
                                FAQs
                            </Link>
                        </nav>
                    </div>
                    <div className='flex justify-end gap-4 '>
                        <Link className='border bg-[#159B48] border-[#159B48] items-center rounded-full hidden md:inline-flex h-12 px-6 font-medium text-white' href="contact">Contact us</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navbar