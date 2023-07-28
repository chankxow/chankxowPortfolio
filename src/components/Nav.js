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
    <div className='w-full bg-black/20 h-[96px] backdrop-blur-2x1 
    rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center 
    text-2x1 text-white/50'>

      <Link to='home' 
      activeClass='active' 
      smooth={true} 
      spy={true} 
      className='hoverX cursor-pointer h-[60px] w-[60px] mx-auto flex items-center justify-center '> 
         <BiHomeAlt/>
      </Link>

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
