import React from 'react';
import Image from 'next/image';
import { assets, infoList, toolsData } from '@/assets/assets';
import {motion} from "motion/react";

const About = ({isDarkMode, setIsDarkMode}) => {
  return (
    <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1}}
    id="about" className="w-full px-[12%] py-10 scroll-mt-20 ">
      <motion.h4 
       initial={{y:-20, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:0.5, delay:0.3}}
      className='text-center mb-2 text-lg font-Ovo'>Introduction</motion.h4>
      <motion.h2
      initial={{y:-20, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:0.5, delay:0.5}}
      className='text-center text-5xl font-Ovo'>About me</motion.h2>

    <motion.div 
    initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.8}}
    className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <motion.div 
          initial={{scale:0.9, opacity:0}}
        whileInView={{scale:1, opacity:1}}
        transition={{duration:0.6}}
        className='w-64 sm:w-80 rounded-3xl max-w-none'> 
            <Image src={assets.moiz_image5} className="w-full rounded-3xl mr-100" alt=''/>
        </motion.div>
        <motion.div 
          initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.6, delay:0.8}}
        className='flex-1'> 
            <p className='mb-10 max-w-2xl font-Ovo'>
                I am a second-year Electronics and Communication Engineering student with an interest in software development, 
                data science, and web technologies. I enjoy solving problems through programming and building practical projects. 
                Currently, I am learning 
                full-stack development and exploring AI and competitive programming to strengthen my skills for future opportunities.</p>
            <motion.ul 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.8 ,delay:1}}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                {infoList.map(({icon,iconDark, title, description}, 
                index) => (
                    <motion.li 
                    whileHover={{scale:1.05}}
                    key={index} className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer 
                    hover:bg-lighthover hover:-translate-y-1 duration-500 hover:shadow-black
                    dark:hover:bg-darkHover/50 dark:hover:shadow-white">
                        <Image className="w-7 mt-3" src={isDarkMode ? iconDark : icon} alt={title}  />
                        <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                        <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                    </motion.li>
                ))}
            </motion.ul>   
            <motion.h4
            initial={{y:20, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration:1.3, delay:0.5}}
            className="my-6 text-gray-700 font-Ovo dark:text-white/80"> Tools I use </motion.h4>
            <motion.ul 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1.5 ,delay:0.6}}
            className='flex items-center gap-3 sm:gap-5'>
            {toolsData.map((tool, index)=>(
            <motion.li 
            whileHover={{scale:1.1}}
            key={index} className="border-[0.5px] border-gray-400 rounded-xl p-6 
            cursor-pointer hover:bg-lighthover  hover:-translate-y-1 duration-500 hover:shadow-black">
                <Image src={tool} alt="tool" className="w-5 sm:w-7" />
            </motion.li>
            ))}
            </motion.ul>
        </motion.div>

    </motion.div>
    </motion.div>


  )
}

export default About
