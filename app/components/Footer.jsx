import React from 'react'
import Image from 'next/image'
import {assets} from '@/assets/assets';
const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
       <div className='text-center'>
    <h2 className='text-3xl font-bold'>Moiz</h2>

        <div className='w-max flex items-center gap-2 mx-auto'>
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="" className='w-6' />
          moiz.dhilawala2@gmail.com
        </div>
      </div>
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 
      mx-[10%] mt-12 py-6'>
        <p>&copy; 2025 Moiz Dhilawala. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target="_blank"  href="https://github.com/moizDhila52">GitHub</a></li>
            <li><a target="_blank"  href="https://codeforces.com/profile/Moizdhilawala">Codeforces</a></li>
            <li><a target="_blank"  href="https://leetcode.com/u/Moizdhilawala/">Leetcode</a></li>
            <li><a target="_blank"  href="http://linkedin.com/in/moizdhila5253">LinkendIn</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
