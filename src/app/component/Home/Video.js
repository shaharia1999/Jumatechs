import React from 'react';
import team from '@/app/component/Image/team.png'
import Image from 'next/image';
// import { CiTimer } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FaRegClock } from "react-icons/fa";
import { FaPlay } from 'react-icons/fa6';


const Video = () => {
    return (
        <div className='col-span-5 bg-white mt-5 rounded-3xl h-auto px-5 py-2'>
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
      
      
        
    </div>
    );
};

export default Video;