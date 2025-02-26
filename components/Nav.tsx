"use client";
import React from 'react';
import Image from 'next/image'
import Logo from '@/assets/images/Logo.png'
import Link from 'next/link';

interface NavbarProps {
    backgroundImage?: string;
}

const Nav: React.FC<NavbarProps> = ({ backgroundImage }) => {
    return (
        <nav
            className="fixed w-full h-16 z-50 py-8 justify-center flex items-center"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                // backdropFilter: 'blur(10px)', // Optional: Add a blur effect
                // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: Add a fallback background color
            }}
        >
            <div className='mt-28'>
                <div className='grid grid-cols-2 lg:grid-cols-3 border border-white/15 bg-white/40 rounded-full p-2 px-4 items-center w-[1400px]'>
                    <div>
                        <Image src={Logo} alt="Logo" className='h-7 w-auto' />
                    </div>
                    <div className='lg:flex justify-center items-center hidden'>
                        <div className='flex gap-6 font-medium text-white'>
                            <Link href='/' className='hover:font-bold'>
                                Home
                            </Link>
                            <Link href='/' className='hover:font-bold'>
                                About Us
                            </Link>
                            <Link href='/' className='hover:font-bold'>
                                IT Services
                            </Link>
                            <Link href='/' className='hover:font-bold'>
                                BPO Solutions
                            </Link>
                        </div>
                    </div>
                    <div className='flex justify-end gap-4 '>
                        <Link className='border bg-[#159B48] border-[#159B48] items-center rounded-full hidden md:inline-flex h-12 px-6 font-medium text-white' href="contact">Contact us</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;






{/* <div className="container mx-auto flex items-center justify-between h-full px-4">
    <div className="text-white text-2xl font-bold">My Logo</div>
    <ul className="flex space-x-4">
        <li className="text-white">Home</li>
        <li className="text-white">About</li>
        <li className="text-white">Contact</li>
    </ul>
</div> */}