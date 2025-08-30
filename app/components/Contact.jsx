import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import {motion} from 'motion/react'
const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8c6b5050-a8f3-4a81-b123-459a82e4317d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-center bg-no-repeat 
    bg-[length:90%_auto] dark:bg-none' id="contact">
      <motion.h4 
      initial={{y:-20, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{duration:0.5, delay:0.3}}
      className='text-center mb-2 text-lg font-Ovo'>Contact with me</motion.h4>
      <motion.h2 
      initial={{y:-20, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{duration:0.5, delay:0.5}} className='text-center text-5xl font-Ovo'>Get in touch</motion.h2>
      <motion.p 
      initial={{y:-20, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{duration:0.5, delay:0.7}} className=' text-center max-w-2xl mx-auto font-Ovo mt-5 mb-12 font-Ovo'> 
            I’m a developer skilled in React, Next.js, and Node.js, focusing on building efficient,
             scalable web applications with clean code and practical solutions.
      </motion.p>
      <motion.form 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.5, delay:0.9}}
      onSubmit={onSubmit} className='max-w-2xl mx-auto flex flex-col gap-6'>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 mt-10 mb-8' >
            <motion.input 
            initial={{x:-50, opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:0.6, delay:1.1}}
            type="text" placeholder="Enter your name" required name="name"
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white
            dark:bg-darkHover/30 dark:border-white/90'/>
            <motion.input 
            initial={{x:50, opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:0.6, delay:1.2}}
            type="email" placeholder="Enter your email" required name="email"
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white
            dark:bg-darkHover/30 dark:border-white/90'/>
        </div>
        <motion.textarea 
        initial={{ opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:0.6, delay:1.3}}
        rows="6" placeholder="Enter your message" required name="message" 
        className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6
        dark:bg-darkHover/30 dark:border-white/90"></motion.textarea>
        <motion.button
        whileHover={{scale:1.05}}
        transition={{duration:0.3}}
        type="submit" className='py-3 px-8 w-max flex items-center justify-between
        gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 
        dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover'>
            Submit now 
            <Image src={assets.right_arrow_white} alt='' className="w-4"/>
            </motion.button>
            <p className='mt-4'>{result}</p>
      </motion.form>
    </motion.div>
  )
}

export default Contact
