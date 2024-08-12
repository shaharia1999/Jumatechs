import React from 'react';
import { FaRegFilePdf } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import Video from './Video';
import Projectplan from './Projectplan';

const Banner = () => {
    return (
        <div className=' mt-5 h-auto relative '>
            <dv className='bg-[#EEF2F5]  h-[549px] w-[100%] absolute top-0 left-0'></dv>
            <div className=' relative '>
                <div className='grid grid-cols-12 container mx-auto gap-x-5 pt-8'>
                    <div className='col-span-7  py-5'>
                        <h1 className='text-[40px] font-semibold'>Realtor Deal closer Package by Jumatechs</h1>
                        <p className='text-[16px] text-[#98A2B3] py-5'>Mineral Reserves: 2008 core drilling and testing (on just 60 of the 1,100 acres) proved 30-60 million tons of high-grade calcium carbonate. Other reports show high-grade calcium carbonate throughout remainder of the property. Geological reports available.</p>
                        <ul className='mt-16'>
                            <li className='flex justify-between bg-white rounded-lg h-[88px] items-center px-2'>
                                <div className='flex items-center gap-x-3'>
                                    <div><FaRegFilePdf className='text-blue-500 text-3xl' /></div>
                                    <div>
                                        <p>Free Growth guideline PDF</p>
                                        <p className='flex gap-x-2 items-center'> <FaRegCalendarAlt />March 23, Saturday-10:30 Pm</p>
                                    </div>

                                </div>
                                <div>
                                    <p className='text-center bg-black rounded-[30px] text-[18px] text-white px-[24px] py-[16px]'>GET IT FREE</p>
                                </div>
                            </li>
                            <li className='flex justify-between bg-white rounded-lg h-[88px] items-center px-2 mt-4'>
                                <div className='flex items-center gap-x-10'>
                                    <div><p className='text-blue-500 bg-[#DCF0FF] border-1 border-blue-400 px-2 py-1'>Batch 2</p></div>
                                    <div>
                                        <p className='flex gap-x-2 items-center text-blue-500'> <FaRegCalendarAlt />Will begin</p>
                                        <p>Friday, March 29</p>
                                    </div>

                                </div>

                                <div>
                                    <p className='flex gap-x-2 items-center text-blue-500'> <FaRegCalendarAlt />Will begin</p>
                                    <p>Friday, March 29</p>
                                </div>


                            </li>
                            <li className='flex justify-between bg-white rounded-lg h-[88px] items-center px-2 mt-4'>
                                <div className='flex items-center gap-x-3'>
                                    <div><FaRegCalendarAlt className='text-blue-500 text-3xl' /></div>
                                    <div>
                                        <p>Free Landing page Design Request</p>

                                    </div>

                                </div>
                                <div>

                                    <p className='text-center bg-blue-500 text-white rounded-[30px] text-[18px]  px-[40px] py-[15px] flex gap-x-5 items-center'><span className=' p-2 rounded-full bg-white'><FaPlay className='text-blue-500 text-[18px]' /></span>Book For Free</p>
                                </div>
                            </li>
                        </ul>
                        <Projectplan/>
                    </div>
                    {/* Video Part */}
                    <Video />
                </div>
            </div>

        </div>

    );
};

export default Banner;