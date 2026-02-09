```javascript
import React from 'react'
import FootHead from './FootHead'
import Footitems from './FootItems'
import spon1 from '../../assets/spon1.png'
import spon2 from '../../assets/spon2.png'
import spon3 from '../../assets/spon3.png'
import spon4 from '../../assets/spon4.png'

const Footer = () => {
  const services = ['mobile app development', 'web app development', 'animation services', 'video production services']
  const industries = ['healthcare', 'real estate', 'retail & E-Commerce', 'automotive', 'education', 'entertainment']
  const company = ['about', 'blog', 'careers', 'appointments', 'process', 'contact us']
  const socialLinks = [
    { icon: 'ri-facebook-fill', href: '#' },
    { icon: 'ri-mail-fill', href: '#' },
    { icon: 'ri-twitter-fill', href: '#' },
    { icon: 'ri-linkedin-fill', href: '#' },
    { icon: 'ri-instagram-line', href: '#' },
    { icon: 'ri-whatsapp-line', href: '#' }
  ]

  return (
    <footer className='grid item-center gap-8 w-[100vw] mt-25 md:grid-cols-2 lg:grid-cols-4 lg:px-4 max-w-[1700px] mx-auto'>
      <div className='w-full flex flex-col items-center md:items-start gap-4 md:px-9'>
        <FootHead head='services'/>
        <ul className='flex flex-col items-center md:items-start gap-3'>
          {services.map((item, index) => (
            <Footitems key={index} item={item}/>
          ))}
        </ul>
      </div>
      <div className='w-full flex flex-col items-center gap-4 md:px-9 md:items-start'>
        <FootHead head='industries'/>
        <ul className='flex flex-col items-center gap-3 md:items-start'>
          {industries.map((item, index) => (
            <Footitems key={index} item={item}/>
          ))}
        </ul>
      </div>
      <div className='w-full flex flex-col items-center gap-4 md:items-start px-9'>
        <FootHead head='company'/>
        <ul className='flex flex-col items-center gap-3 md:items-start'>
          {company.map((item, index) => (
            <Footitems key={index} item={item}/>
          ))}
        </ul>
      </div>
      <div className='w-full flex flex-col items-center gap-4 md:items-start px-9'>
        <FootHead head='contact us'/>
        <h4>+1 360-200-0991</h4>
        <div className='flex gap-4 md:items-start'>
          {socialLinks.slice(0, 3).map((link, index) => (
            <a key={index} href={link.href} className='cursor-pointer border-2 border-zinc-300 rounded-full w-10 h-10 flex items-center justify-center'>
              <i className={`text-xl ${link.icon}`}></i>
            </a>
          ))}
        </div>
        <div className='flex gap-4'>
          {socialLinks.slice(3).map((link, index) => (
            <a key={index} href={link.href} className='cursor-pointer border-2 border-zinc-300 rounded-full w-10 h-10 flex items-center justify-center'>
              <i className={`text-xl ${link.icon}`}></i>
            </a>
          ))}
        </div>
      </div>
      <div className='flex flex-col text-center lg:px-9 items-center md:items-start lg:items-center lg:justify-start md:px-9 justify-center gap-4 md:gap-2 lg:gap-[2vw] mt-10 lg:mt-15 w-[100vw] lg:flex-row '>
        <div className='md:flex md:items-center lg:items-center gap-4 md:gap-4 '>
          <h6 className='copyright text-sm md:text-[0.9rem] lg:text-[0.8rem] xl:text-[0.9rem]'>&copy;2018-2022 The Team Freelance LLC. All rights reserved. </h6>
          <div className='flex gap-10 mt-4 md:mt-0 md:gap-4 lg:mt-0 justify-center'>
            <h5 className='text-sm md:text-[0.9rem] lg:text-[0.8rem] xl:text-[0.9rem] text-blue-700 cursor-pointer'>Privacy Policy</h5>
            <h5 className='text-sm md:text-[0.9rem] lg:text-[0.8rem] xl:text-[0.9rem] text-blue-700 cursor-pointer'>Terms & Condition</h5>
          </div>
        </div>
        <div className='lastDiv flex items-center lg:justify-center gap-4 py-2'>
          <div className='flex items-center gap-4'>
            <img className='h-12 md:h-17 lg:h-9 xl:h-13 cursor-pointer' src={spon1} alt='Sponsers Image'/>
            <img className='h-7 md:h-10 lg:h-7 xl:h-8 cursor-pointer' src={spon2} alt='Sponsers Image'/>
            <img className='h-7 md:h-10 lg:h-7 xl:h-8 cursor-pointer' src={spon3} alt='Sponsers Image'/>
            <img className='h-12 md:h-17 lg:h-9 xl:h-13 cursor-pointer' src={spon4} alt='Sponsers Image'/>
          </div>
          <div className='flex'>
            <h3 className='bg-yellow-400 px-1 py-1 text-white text-sm md:font-bold lg:text-[0.8rem] xl:text-[0.9rem]'>DMCA</h3>
            <h3 className='bg-black text-white px-1 py-1 md:font-bold text-sm lg:text-[0.8rem] xl:text-[0.9rem]'>PROTECTED</h3>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
```