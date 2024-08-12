import React from 'react';
import { TiSocialDribbble } from "react-icons/ti";
import { FaInstagram ,FaFacebook} from "react-icons/fa";
import { SlSocialBehance } from "react-icons/sl";
import logo from '@/app/component/Image/logo.png'
import Image from 'next/image';

const Footer = () => {
    return (
        <div className='container mx-auto py-20'>
        <div className='flex justify-between items-center '>
            <div><li className='flex gap-x-3 items-center font-semibold'> <Image src={logo} width={40} height={40} />Jumatechs</li></div>
            <div className ='flex items-center gap-x-4'>
                <span className='border-2 rounded-full border-black p-1 cursor-pointer'>
                <TiSocialDribbble className='text-[20px] ' />
                </span>
             <span className=' border-2 rounded-full border-black p-1 cursor-pointer'>
             <FaInstagram className='text-[20px] '/>
             </span>
             <span className=' border-2 rounded-full border-black p-1 cursor-pointer'>
             <FaFacebook className='text-[20px] '/>
             </span>
             <span className=' border-2 rounded-full border-black p-1 cursor-pointer'>
             <SlSocialBehance className='text-[20px] '/>
             </span>
             <span className='w-[30px] h-[30px] border-2 rounded-full border-black p-1 cursor-pointer'>
             <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 462.799"><path fill-rule="nonzero" d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"/></svg>
             </span>
            
            {/* <FaFacebook className='text-4xl'/> */}
            {/* <SlSocialBehance className='text-4xl'/> */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 462.799"><path fill-rule="nonzero" d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"/></svg> */}
            </div>
        </div>
        <div className='text-[18px] flex justify-between items-center mt-5'>
            <p>hello@jumatechs.com</p>
            <li className='flex items-center gap-x-3 text-[#9191A8]'><span>Privacy Policy</span><span>Terms & Condition</span></li>
            <p className='text-[#9191A8]'>© 2019-2024 jumatechs | All rights reserved.</p>
        </div>
        </div>
    );
};

export default Footer;