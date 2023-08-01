import React from 'react';

// import icon
import {BiHomeAlt, BiUser} from 'react-icons/bi'
import {BsClipboardData, BsBriefcase,BsActivity} from 'react-icons/bs';

// Link
import { Link } from 'react-scroll';

const Nav = () => {
  return <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
  <div className="container mx-auto">
    {/*nav inner*/}
    <div className='w-full bg-black/20 h-[70px] backdrop-blur-2x1 
    rounded-full max-w-[400px] mx-auto px-5 flex justify-between items-center 
    text-2x1 text-white/50'>
   <div><Link to='home' 
      activeClass='active' 
      smooth={true} 
      spy={true} 
      className='hoverX cursor-pointer h-[60px] w-[60px] mx-auto flex items-center justify-center '> 
         <BiHomeAlt/>
      </Link>
      <span class="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
    Home
  </span>
      </div>
      
      <Link to='about' 
      activeClass='active' 
      smooth={true} 
      spy={true} 
      className='cursor-pointer h-[60px] w-[60px] mx-auto flex items-center justify-center '> 
         <BiUser/>
      </Link>

      <Link to='project' 
      activeClass='active' 
      smooth={true} 
      spy={true} 
      className='cursor-pointer h-[60px] w-[60px] mx-auto flex items-center justify-center '> 
         <BsClipboardData/>
      </Link>

      <Link to='activity' 
      activeClass='active' 
      smooth={true} 
      spy={true} 
      className='cursor-pointer h-[60px] w-[60px] mx-auto flex items-center justify-center '> 
         <BsActivity/>
      </Link>
      
      <Link to='certificate' 
      activeClass='active' 
      smooth={true} 
      spy={true} 
      className='cursor-pointer h-[60px] w-[60px] mx-auto flex items-center justify-center '> 
      <BsBriefcase/>
      </Link>
      
    </div>
  </div>

  </nav>;
};

export default Nav;
