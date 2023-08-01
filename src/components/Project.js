import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Project = () => {
  return (
    <section id="project" className="section mx-auto max-w-max mx-h-max block">
      
      <div className="container mx-auto">
      <motion.h1
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="text-black mx-auto text-center text-[50px] 
    font-bold text-transparent bg-gradient-to-r bg-clip-text
     from-blue-500 to-green-500 py-10 "
        >
          -PROJECT-
        </motion.h1>
        <div className="flex flex-col gap-y-10 lg:flex-row h-max">
      <div className="bg-iotproject bg-cover card mr-[20px] relative w-[300px] h-[250px] aspect-video 
      rounded-xl flex items-center justify-center 
      overflow-hidden shadow-sm shadow-gray-950 
      transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-black ">
      <h1 className="text-2xl font-bold text-black shadow-md shadow-black m-auto bg-white/30">SMARTHYDROPONIC</h1>
      
  <div className="card__content absolute top-0 left-0 h-[100%] w-[100%] padding-[20px]
   box-border bg-white/80 transition-all opacity-0 duration-[0.3s] hover:opacity-100">
    <p className="card__title m-5 text-black font-bold">SMARTHYDROPONIC</p>
    <p className="card__description m-5 text-black leading-6">เป็นโครงงานแข่งขันโดยจะนำการใช้ระบบ IOT มาใช้ในทางการเกษตรร่วมกับการปลูกพืชแบบไฮโดรโปนิค</p>
    <a className='p-[5px] mx-auto relative text-gray-400 bg-slate-600 fill-currents w-max 
                    flex justify-center items-center rounded transition-all duration-700 hover:fill-current
                     hover:text-white hover:bg-gradient-to-tr from-violet-800 pink-500 to-red-500' href="https://github.com/chankxow/Project_matthayom_5">
                      READ MORE
                    </a>
  </div>
</div>

<div className="bg-iotproject bg-cover card mr-[20px] relative w-[300px] h-[250px] aspect-video 
      rounded-xl flex items-center justify-center 
      overflow-hidden shadow-sm shadow-gray-950 
      transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-black ">
      <h1 className="text-2xl font-bold text-black shadow-md shadow-black m-auto bg-white/30">SMARTHYDROPONIC</h1>
      
  <div className="card__content absolute top-0 left-0 h-[100%] w-[100%] padding-[20px]
   box-border bg-white/80 transition-all opacity-0 duration-[0.3s] hover:opacity-100">
    <p className="card__title m-5 text-black font-bold">SMARTHYDROPONIC</p>
    <p className="card__description m-5 text-black leading-6">เป็นโครงงานแข่งขันโดยจะนำการใช้ระบบ IOT มาใช้ในทางการเกษตรร่วมกับการปลูกพืชแบบไฮโดรโปนิค</p>
    <a className='p-[5px] mx-auto relative text-gray-400 bg-slate-600 fill-currents w-max 
                    flex justify-center items-center rounded transition-all duration-700 hover:fill-current
                     hover:text-white hover:bg-gradient-to-tr from-violet-800 pink-500 to-red-500' href="https://github.com/chankxow/Project_matthayom_5">
                      READ MORE
                    </a>
  </div>
</div>

<div className="bg-iotproject bg-cover card mr-[20px] relative w-[300px] h-[250px] aspect-video 
      rounded-xl flex items-center justify-center 
      overflow-hidden shadow-sm shadow-gray-950 
      transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-black ">
      <h1 className="text-2xl font-bold text-black shadow-md shadow-black m-auto bg-white/30">SMARTHYDROPONIC</h1>
      
  <div className="card__content absolute top-0 left-0 h-[100%] w-[100%] padding-[20px]
   box-border bg-white/80 transition-all opacity-0 duration-[0.3s] hover:opacity-100">
    <p className="card__title m-5 text-black font-bold">SMARTHYDROPONIC</p>
    <p className="card__description m-5 text-black leading-6">เป็นโครงงานแข่งขันโดยจะนำการใช้ระบบ IOT มาใช้ในทางการเกษตรร่วมกับการปลูกพืชแบบไฮโดรโปนิค</p>
    <a className='p-[5px] mx-auto relative text-gray-400 bg-slate-600 fill-currents w-max 
                    flex justify-center items-center rounded transition-all duration-700 hover:fill-current
                     hover:text-white hover:bg-gradient-to-tr from-violet-800 pink-500 to-red-500' href="https://github.com/chankxow/Project_matthayom_5">
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
