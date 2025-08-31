import React ,{ useEffect, useRef,useState } from 'react';
import Image from 'next/image';
import {assets} from '@/assets/assets';

const Navbar = ({isDarkMode, setIsDarkMode}) => {

    const [isScroll, setIsScroll] = useState(false);
    const sideMenuRef = useRef();

    const openSideMenu = () => {
        sideMenuRef.current.style.transform = "translateX(0rem)";
    }
    const closeSideMenu = () => {
        sideMenuRef.current.style.transform = "translateX(16rem)";   
    }
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(scrollY>50){
                setIsScroll(true);
            } else{
                setIsScroll(false);
            }
        })
    },[])
  return (
    <>
        {/* backgroundImage */}
        <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden"> 
            < Image src={assets.header_bg_color} className="w-full" alt=""/>
        </div>

        <nav className ={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between py-4 z-50 
           ` }>
            <a href="#top">
    <h2 className='text-3xl font-bold cursor-pointer'>Moiz</h2>
            </a>
            <ul className= {`hidden md:flex item-center gap-6 lg:gap-8 rounded-full px-12 py-3 
                ${isScroll? "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-darkTheme":
                "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}>
                <li><a className="font-Ovo" href="#top">Home</a></li>
                <li><a className="font-Ovo" href="#about">About me</a></li>
                <li><a className="font-Ovo" href="#services">Services</a></li>
                <li><a className="font-Ovo" href="#work">My Work</a></li>
                <li><a className="font-Ovo" href="#contact">Contact me</a></li>

            </ul>
            <div className='flex items-center gap-4'>
                <button onClick={() => setIsDarkMode(prev=>!prev)}>
                    <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} className="w-6 h-6" alt="Menu"/>
                </button>
                
                <a href="#contact" className="hidden lg:flex items-center gap-3 px-10 
                 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50 dark:bg-transparent">Contact <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} className="w-3" alt=""/></a>

                <button className='block md:hidden ml-3' onClick={openSideMenu  }>
                    <Image src={isDarkMode ? assets.menu_white : assets.menu_black} className="w-6" alt="Menu"/>
                </button>
            </div>

            {/** Mobile Menu */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-0 top-0 
        bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500
        dark:bg-darkHover dark:text-white'>

            <div className="absolute right-6 top-6" onClick ={closeSideMenu}>
            <Image src={isDarkMode ? assets.close_white : assets.close_black} className="w-5 cursor-pointer" alt="Close"/>
            </div>
            <li><a className="font-Ovo" onClick ={closeSideMenu} href="#top">Home</a></li>
            <li><a className="font-Ovo" onClick ={closeSideMenu} href="#about">About me</a></li>
            <li><a className="font-Ovo" onClick ={closeSideMenu} href="#services">Tech Stack</a></li>
            <li><a className="font-Ovo" onClick ={closeSideMenu} href="#work">My Work</a></li>
            <li><a className="font-Ovo" onClick ={closeSideMenu} href="#contact">Contact me</a></li>
        </ul>
        </nav>
    </>
  )
}

export default Navbar
