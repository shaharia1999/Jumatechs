'use client'
import React from 'react';
import { Accordion } from "flowbite-react";
import Saller from '@/app/component/Image/best_seller.png'
import Saller2 from '@/app/component/Image/best_s.png'
import dumy from '@/app/component/Image/dumy.png'
import Image from 'next/image';

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
         <Accordion.Title className='flex gap-x-2'><span className='text-white bg-black p-4 text-center'>Module 1</span> What is Flowbite?</Accordion.Title>
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
          <hr/>
          <div className='flex gap-x-5 py-2'>
            <p>Day 1 </p>
            <span className='text-blue-500 
            bg-[#DCF0FF] px-2 py-1 rounded-[30px]'>Live Class</span>
          </div>
          <p className='text-[#475467] font-medium py-2 text-[16px]'>Important tags and attributes of HTML - all in one live class!</p>
          <hr/>
          <div className='flex gap-x-5 py-2'>
            <p>Day 2</p>
            <span className='text-blue-500 
            bg-[#DCF0FF] px-2 py-1 rounded-[30px]'>Live Class</span>
          </div>
          <p className='text-[#475467] font-medium py-2 text-[16px]'>Important tags and attributes of HTML - all in one live class!</p>
          <hr/>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
      <Accordion.Title className='flex gap-x-2'><span className='text-white bg-black p-4 text-center'>Module 2</span> What is Flowbite?</Accordion.Title>
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
      <Accordion.Title className='flex gap-x-2'><span className='text-white bg-black p-4 text-center'>Module 3</span> What is Flowbite?</Accordion.Title>
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
      <Accordion.Title className='flex gap-x-2'><span className='text-white bg-black p-4 text-center'>Module 4</span> What is Flowbite?</Accordion.Title>
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
            

            <div className='shadow-md '>
            <h3 className='text-[28px] font-semibold mt-10'>Specialist</h3>
            <div className='bg-[#E3EBFF] border-s-4 border-blue-600 rounded-2xl px-6 py-4 mt-4'>
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
     
        </div>
    );
};
export default Projectplan;

