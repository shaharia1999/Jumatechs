import React from 'react';
import team from '@/app/component/Image/team.png'
import Image from 'next/image';
// import { CiTimer } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FaRegClock } from "react-icons/fa";
import { FaPlay } from 'react-icons/fa6';
import { CiBarcode } from "react-icons/ci";
import { GoCheckCircle } from "react-icons/go";


const Video = () => {
    return (
        <div className='col-span-5 bg-white mt-5 rounded-3xl h-auto px-5 py-2 shadow-md'>
        <div className='relative'>
        <Image
        height={800}
        width={800}
            src={team}
        />
        <div className='absolute inset-0 flex items-center justify-center cursor-pointer'>
        <span className=' p-5 rounded-full bg-white'><FaPlay className='text-blue-500 text-[18px]' /></span>
        </div>

        </div>
        {/*  Time Duration */}
        <div className='flex justify-between items-center mt-5'>
            <div className='flex items-center gap-x-2 px-3 py-1 bg-[#E9F2FF] rounded-[30px]'><FaRegClock className='text-blue-500
             ' /> 6 days Left</div>
            <div className='flex items-center gap-x-2 px-3 py-1 bg-[#E9F2FF] rounded-[30px]'><CgProfile className='text-blue-500
             '  />23/50 Seats left</div>
        </div>
        {/* Price Plan */}
        <div className='flex justify-between items-center mt-5'>
            <div className='text-center px-3 py-1 bg-[#E9F2FF] w-[202px] h-[52px] text-[24px] hover:border-blue-400 hover:border-2'> Standard</div>
            <div className='text-center px-3 py-1 bg-[#E9F2FF] w-[202px] h-[52px] text-[24px] hover:border-blue-400 hover:border-2'> Premium</div>
            
        </div>
      
        <div className='flex justify-between items-center mt-5'>
            <div className=' text-[36px] font-semibold '> $ 599</div>
            <div className=' flex gap-x-2 items-center '><CiBarcode />Promo code</div>
            
        </div>
        <p className='bg-blue-500 text-white rounded-[30px] text-[18px] px-[24px] py-[12px] text-center mt-4'>Get This growth package</p>
        <p className='pt-1'>Free Landing page Design Request</p>
        <p className='bg-black text-white rounded-[30px] text-[18px] px-[24px] py-[12px] text-center mt-4 uppercase flex items-center justify-center gap-x-2'><span className=' p-2 rounded-full bg-white'><FaPlay className='text-black text-[18px] ' /></span>book for free</p>
        <p className='pt-2 text-[28px] font-semibold'>In this Package you will get</p>
        {/* Package List */}
        <ul className='mt-3'>
            <li className='flex gap-x-2 mt-1 items-center'><GoCheckCircle />15 Week Study Plan</li>
            <li className='flex gap-x-2 mt-1 items-center'><GoCheckCircle />2 live classes on Dynamic Animation</li>
            <li className='flex gap-x-2 mt-1 items-center'><GoCheckCircle />1 live class on creating webflow templates</li>
            <li className='flex gap-x-2 mt-1 items-center'><GoCheckCircle />2 Live Classes on Webflow E-Commerce</li>
            <li className='flex gap-x-2 mt-1 items-center'><GoCheckCircle />Daily support class</li>
            <li className='flex gap-x-2 mt-1 items-center'><GoCheckCircle />Progress Tracking and Assessment</li>
            <li className='flex gap-x-2 mt-1 items-center'><GoCheckCircle />Job and internship opportunities</li>
            <li className='flex gap-x-2 mt-1 items-center'><GoCheckCircle />24 live classes</li>
            <li className='flex gap-x-2 mt-1 items-center'><GoCheckCircle />2 live classes on CMS</li>
            <li className='flex gap-x-2 mt-1 items-center'><GoCheckCircle />2 live classes on creating blog pages with webflow</li>
            <li className='flex gap-x-2 mt-1 items-center'><GoCheckCircle />Figma to Webflow live project</li>
            <li className='flex gap-x-2 mt-1 items-center'><GoCheckCircle />Community support</li>
            <li className='flex gap-x-2 mt-1 items-center'><GoCheckCircle />Certificate</li>
            <li className='flex gap-x-2 mt-1 items-center'><GoCheckCircle />2 live classes on the freelancing marketplace</li>
        </ul>
        <p className='text-center text-red-400 mt-5'>Whatsapp Call : +8801789329671 <span className='text-black font-semibold'>(anytime)</span>  </p>
    </div>
    );
};

export default Video;