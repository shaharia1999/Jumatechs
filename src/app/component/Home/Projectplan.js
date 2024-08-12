'use client'
import React from 'react';
import { Accordion } from "flowbite-react";
import Saller from '@/app/component/Image/best_seller.png'
import Saller2 from '@/app/component/Image/best_s.png'
import dumy from '@/app/component/Image/dumy.png'
import eComarce from '@/app/component/Image/rec1.png'
import blog from '@/app/component/Image/rec2.png'
// import dumy from '@/app/component/Image/dumy.png'
import Image from 'next/image';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

const Projectplan = () => {
  return (
    <div >
      <ul className='flex gap-x-14 mt-10'>
        <li className='text-blue-500'>Project Plan <p className='w-24 h-[2px] bg-blue-500 mt-1'></p></li>
        <li>Specialist</li>
        <li>About the Project</li>
        <li>Projects</li>
        <li>Help</li>
      </ul>
      <h3 className='text-[28px] font-semibold mt-10'>Project  Plan</h3>
      {/* Accordion hare Flowbite */}
      <div className='mt-5 border-none '>
        <Accordion className='shadow-md'>
          <Accordion.Panel>
            <Accordion.Title className=''>
              <div className=' flex gap-x-3 items-center'>
                <div className='text-white bg-black p-4 text-center font-bold '>Module
                  <p>1</p></div> <span className='font-normal'>What is Flowbite?</span>
              </div>
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                dropdowns, modals, navbars, and more.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Check out this guide to learn how to&nbsp;
                <a
                  href="https://flowbite.com/docs/getting-started/introduction/"
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  get started&nbsp;
                </a>
                and start developing websites even faster with components on top of Tailwind CSS.
              </p>
              <hr />
              <div className='flex gap-x-5 py-2'>
                <p>Day 1 </p>
                <span className='text-blue-500 
            bg-[#DCF0FF] px-2 py-1 rounded-[30px]'>Live Class</span>
              </div>
              <p className='text-[#475467] font-medium py-2 text-[16px]'>Important tags and attributes of HTML - all in one live class!</p>
              <hr />
              <div className='flex gap-x-5 py-2'>
                <p>Day 2</p>
                <span className='text-blue-500 
            bg-[#DCF0FF] px-2 py-1 rounded-[30px]'>Live Class</span>
              </div>
              <p className='text-[#475467] font-medium py-2 text-[16px]'>Important tags and attributes of HTML - all in one live class!</p>
              <hr />
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className=''>  <div className=' flex gap-x-3 items-center'>
              <div className='text-white bg-black p-4 text-center font-bold '>Module
                <p>2</p></div> <span className='font-normal'>What is Flowbite?</span>
            </div></Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                has a design equivalent in our Figma file.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Check out the
                <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Figma design system
                </a>
                based on the utility classes from Tailwind CSS and components from Flowbite.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className=''>  <div className=' flex gap-x-3 items-center'>
              <div className='text-white bg-black p-4 text-center font-bold '>Module
                <p>3</p></div> <span className='font-normal'>What is Flowbite?</span>
            </div></Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                The main difference is that the core components from Flowbite are open source under the MIT license, whereas
                Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
                components, whereas Tailwind UI offers sections of pages.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
                technical reason stopping you from using the best of two worlds.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
              <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                <li>
                  <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                    Flowbite Pro
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindui.com/"
                    rel="nofollow"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Tailwind UI
                  </a>
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className=''>  <div className=' flex gap-x-3 items-center'>
              <div className='text-white bg-black p-4 text-center font-bold '>Module
                <p>4</p></div> <span className='font-normal'>What is Flowbite?</span>
            </div></Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                The main difference is that the core components from Flowbite are open source under the MIT license, whereas
                Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
                components, whereas Tailwind UI offers sections of pages.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
                technical reason stopping you from using the best of two worlds.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
              <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                <li>
                  <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                    Flowbite Pro
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindui.com/"
                    rel="nofollow"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Tailwind UI
                  </a>
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Panel>
          <p className='text-center py-10 cursor-pointer'>see more</p>
        </Accordion>

      </div>

      {/* Specialist */}
      <div className='shadow-md px-6 py-4 '>
        <h3 className='text-[28px] font-semibold mt-10'>Specialist</h3>
        <div className='bg-[#E3EBFF] border-s-4 border-blue-600 rounded-2xl  mt-4'>
          <div>
            <div className='flex items-center gap-x-3 text-[16px] font-medium p-5'><Image src={Saller} height={20} width={20}></Image>
              Lead Instructor</div>
          </div>
          <div className='flex items-center gap-x-5 bg-white px-5 py-3'>
            <div>
              <Image Image src={dumy} height={100} width={100} className='rounded-full'>
              </Image></div>
            <div>
              <h4 className='text-[16px] font-medium leading-5'>Hasanur Rahman Ujjol</h4>
              <p className='text-[#667085]'>Ullamcorper sed nisl faucibus enim enim. Nec orci imperdiet velit sem ullamcorper. Rutrum tincidunt eget</p>
            </div>

          </div>
        </div>
        <div className='bg-white border-s-4 border-blue-600 rounded-2xl px-6 py-4 mt-4'>
          <div>
            <div className='flex items-center gap-x-3 text-[16px] font-medium p-5'><Image src={Saller2} height={20} width={20}></Image>
              Support Instructor</div>
          </div>
          <div className='flex items-center gap-x-5 bg-white px-5 py-3'>
            <div>
              <Image Image src={dumy} height={100} width={100} className='rounded-full'>
              </Image></div>
            <div>
              <h4 className='text-[16px] font-medium leading-5'>Hasanur Rahman Ujjol</h4>
              <p className='text-[#667085]'>Ullamcorper sed nisl faucibus enim enim. Nec orci imperdiet velit sem ullamcorper. Rutrum tincidunt eget</p>
            </div>

          </div>
        </div>
      </div>

      {/* About  */}
      <div className='shadow-md px-6 py-4 hover:border-blue-400 hover:border-4 border-4 border-white mt-5'>
        <h3 className='text-[28px] font-semibold mt-10  '>About the Growth Package</h3>
        <p className='text-[#667085] py-3'>Mineral Reserves: 2008 core drilling and testing (on just 60 of the 1,100 acres) proved 30-60 million tons of high-grade calcium carbonate. Other reports show high-grade calcium carbonate throughout remainder of the property. Geological reports available.</p>

        <div className='bg-[#E3E9F4]'>
          <div className='flex  items-center gap-x-3 py-10 px-5'>
            <p className='text-[16px] font-semibold'>Few Design we have done for client</p>
            <p className='bg-[#98A2B3] h-[2px] w-[50%]'></p>
          </div>
          {/* Parents Div */}
          <div className='flex justify-between gap-x-4 py-4 px-5'>
            <div className='bg-[#1D2939] px-5 py-4 rounded-md'>
              <p className='text-white font-medium py-4'>E-commerce Project</p>
              <Image Image src={blog} height={300} width={300}></Image>

            </div>
            <div className='bg-[#1D2939] px-5 py-4 rounded-md'>
              <p className='text-white font-medium py-4'>Blog</p>
              <Image Image src={eComarce} height={300} width={300}></Image>

            </div>
       

          </div>
          <div className='flex justify-end items-center gap-x-3 mt-4 py-5 pr-10'>
                        <span className='p-2'><SlArrowLeft  VscArrowCircleRight className='text-1xl'  /></span>
                        <span className='p-2 bg-blue-500'><SlArrowRight VscArrowCircleRight className='text-1xl text-white'  /></span>
                        

                    </div>

        </div>
      </div>
      <div className='shadow-md px-6 py-6 mt-4 hover:border-blue-400 hover:border-4 border-4 border-white'>
        <h3 className='text-[28px] font-semibold leading-8'>Requirements</h3>
        <p className='text-[#667085] text-[16px] leading-6'>No prior coding knowledge is required to take the course.</p>

      </div>
      <div className='shadow-md px-6 py-6 mt-4 hover:border-blue-400 hover:border-4 border-4 border-white'>
        <h3 className='text-[28px] font-semibold leading-8'>Help</h3>
        <p className='text-[#667085] text-[16px] leading-6'>For any batch information call  +8801960999918  (10 am to 10 pm)</p>

      </div>



    </div>
  );
};
export default Projectplan;

