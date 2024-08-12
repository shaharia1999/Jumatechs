'use client'
import Image from 'next/image';
import React from 'react';
import logo from '@/app/component/Image/logo.png'
import { AiOutlineArrowDown ,AiOutlineArrowUp } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";


const Nav = () => {
    return (
        <div className='flex  justify-between pt-8 container mx-auto '>
            <div>
                <ul className='flex gap-x-12  items-center text-[18px]  '>
                    <li> <Image src={logo} width={54} height={54} /></li>
                    <li>Project</li>
                    <li>About Us</li>
                    <li>Blog</li>
                    <li>Our Team</li>
                    <li>Careers</li>
                </ul>
            </div>
            <div>
                <ul className='flex gap-x-12 align-center '>
                    <li className='flex justify-center gap-x-2'>Service 
                        <span className='  bg-black rounded-full h-8 p-2 block'><AiOutlineArrowDown className='text-white ' /></span></li>
                    <li className='flex justify-center gap-x-2'><span className='text-white rounded-3xl px-3 py-1 bg-[#1C59FF]'>LET'S TALK </span>
                    <span className='rounded-full h-8 p-2 block bg-[#1C59FF]'><FiArrowUpRight className='text-white'/>
                      </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;