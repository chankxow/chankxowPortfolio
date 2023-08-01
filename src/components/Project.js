import React from "react";
import s from '../assets/img-profile.png'
const Project = () => {
  return (
    <section id="project" className="section  text-black h-max w-max">
      PROJECT
      <div className="container mx-auto">
      <div className="flex flex-col gap-y-10 lg:flex-row h-max">
      <div className="card relative w-[350px] h-[250px] aspect-video 
      rounded-xl flex items-center justify-center 
      overflow-hidden shadow-sm shadow-gray-950 
      transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-black">
  <img className=' transition-all duration-500 hover:opacity-0' src={s} alt="" />
  <div className="card__content absolute top-0 left-0 h-[100%] w-[100%] padding-[20px]
   box-border bg-[#f2f2f2]/50 transition-all opacity-0 duration-[0.6s] hover:opacity-100">
    <p className="card__title m-5 font-[20px] text-[#333] font-bold">Project Name</p>
    <p className="card__description m-5 text-[#777] leading-6">Lorem ipsum dolor sit amet.</p>
    <a className='p-[5px] mx-auto relative text-gray-400 bg-slate-600 fill-currents w-max 
                    flex justify-center items-center rounded transition-all duration-500 hover:fill-current
                     hover:text-white hover:bg-gradient-to-tr from-violet-800 pink-500 to-red-500' href="https://www.instagram.com/grv.kx/?hl=en">
                      READ MORE
                    </a>
  </div>
</div>
<div className="card relative w-[350px] h-[250px] aspect-video 
      rounded-xl flex items-center justify-center 
      overflow-hidden shadow-sm shadow-gray-950 
      transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-black">
  <img className=' transition-all duration-500 hover:opacity-0' src={s} alt="" />
  <div className="card__content absolute top-0 left-0 h-[100%] w-[100%] padding-[20px]
   box-border bg-[#f2f2f2]/50 transition-all opacity-0 duration-[0.6s] hover:opacity-100">
    <p className="card__title m-5 font-[20px] text-[#333] font-bold">Project Name</p>
    <p className="card__description m-5 text-[#777] leading-6">Lorem ipsum dolor sit amet.</p>
    <a className='p-[5px] mx-auto relative text-gray-400 bg-slate-600 fill-currents w-max 
                    flex justify-center items-center rounded transition-all duration-500 hover:fill-current
                     hover:text-white hover:bg-gradient-to-tr from-violet-800 pink-500 to-red-500' href="https://www.instagram.com/grv.kx/?hl=en">
                      READ MORE
                    </a>
  </div>
</div>
<div className="card relative w-[350px] h-[250px] aspect-video 
      rounded-xl flex items-center justify-center 
      overflow-hidden shadow-sm shadow-gray-950 
      transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-black">
  <img className=' transition-all duration-500 hover:opacity-0' src={s} alt="" />
  <div className="card__content absolute top-0 left-0 h-[100%] w-[100%] padding-[20px]
   box-border bg-[#f2f2f2]/50 transition-all opacity-0 duration-[0.6s] hover:opacity-100">
    <p className="card__title m-5 font-[20px] text-[#333] font-bold">Project Name</p>
    <p className="card__description m-5 text-[#777] leading-6">Lorem ipsum dolor sit amet.</p>
    <a className='p-[5px] mx-auto relative text-gray-400 bg-slate-600 fill-currents w-max 
                    flex justify-center items-center rounded transition-all duration-500 hover:fill-current
                     hover:text-white hover:bg-gradient-to-tr from-violet-800 pink-500 to-red-500' href="https://www.instagram.com/grv.kx/?hl=en">
                      READ MORE
                    </a>
  </div>
</div>
      </div>
      

      </div>
    </section>
  );
};

export default Project;
