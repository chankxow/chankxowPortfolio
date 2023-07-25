import React from 'react';

import {FaGithub,FaFacebook,FaInstagram} from 'react-icons/fa'
const Contact = () => {
  return <div id='contact' className='section text-black w-max mx-auto'><div className=" py-10">
  <div className=" text-blue-500 flex mx-auto gap-x-6 text-[50px]  bg-fuchsia-100">
    <a href="https://github.com/chankxow">
      <FaGithub />
    </a>
    <a href="https://www.facebook.com/profile.php?id=100011973946922">
      <FaFacebook />
    </a>
    <a href="https://www.instagram.com/grv.kx/?hl=en">
      <FaInstagram />
    </a>
  </div>
</div></div>;
};


export default Contact;
