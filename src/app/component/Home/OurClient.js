'use client'
import React from 'react';
import { FloatingLabel } from "flowbite-react";
import { FiArrowUpRight } from 'react-icons/fi';
import dumy from '@/app/component/Image/dumy.png'
import Image from 'next/image';
import { VscArrowCircleRight, VscArrowCircleLeft } from "react-icons/vsc";


const OurClient = () => {
    return (
        <div className='bg-gradient-to-t from-[#1C59FF] to-[#D6E4FF] h-[770px] rounded-[102px] flex justify-center items-center mt-5'>
            <div className='h-[554px] w-[1180px] rounded-[34px] bg-white grid grid-cols-12 gap-x-10 px-6 py-10'>
                <div className='col-span-5'>
                    <h2 className='text-[57px] font-bold leading-[64px]'>Do you have project in mind?</h2>
                    <h2 className='text-[57px] font-bold leading-[64px] text-blue-500 mt-20'>Start a Project</h2>
                    <p className='w-96 h-[4px] bg-blue-500 mt-1'></p>

                    <p className='text-[#838383] py-10'>Subscribe to our newsletter to stay in touch with the latest.</p>
                    <div className='relative'>
                        <input type="text" className="border-b-2 border-gray-500 focus:border-blue-500 outline-none py-2 px-4 border-t-0 border-l-0 border-r-0 w-full" placeholder="Enter your Email" />
                        <span className='rounded-full h-8 p-2 block bg-black absolute top-0 right-0 cursor-pointer'><FiArrowUpRight className='text-white' />
                        </span>
                    </div>




                </div>
                <div className='col-span-7  border-2  border-blue-500 p-5 rounded-[42px]'>
                    <h2 className='text-[48px] font-bold py-10 '>Our clients Says</h2>
                    <p className='text-[#9191A8] py-10'>
                        PrimeCRM Is The Most Intuitive And Modern Live Chat We Found. Live Chat Obviously Made Our Users Happier And Our Service Department More Efficient
                    </p>
                    <div className='flex items-center gap-x-5 bg-white px-5 py-3'>
                        <div>

                            <Image src={dumy} height={50} width={50} className='rounded-full'>

                            </Image>
                        </div>
                        <div>
                            <h4 className='text-[24px] font-bold leading-5'>Angel Asa</h4>
                            <p className='text-[#ADADB8]'>CEO at Crush</p>
                        </div>

                    </div>
                    <div className='flex justify-center items-center gap-x-2 mt-4'>
                        <VscArrowCircleLeft className='text-2xl' />
                        <VscArrowCircleRight className='text-2xl' />
                    </div>

                </div>


            </div>

        </div>
    );
};

export default OurClient;