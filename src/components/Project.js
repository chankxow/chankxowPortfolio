import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaGithub , } from "react-icons/fa";
const Project = () => {
  return (
    <section
      id="project"
      className="f-anupan section mx-auto w-max h-max block "
    >
      <div className=" mx-auto">
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

        <div className="flex flex-col gap-10 lg:flex-row h-max my-4">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className=" bg-white/60 max-w-sm rounded overflow-hidden shadow-2xl "
          >
             <div></div>
            <div className="px-6 py-4">
            <div
              className=" bg-iotproject bg-cover w-[320px] h-[250px] mt-4 mx-auto"
              
            ></div>
              <div className="font-bold text-xl mb-2 text-indigo-600">
              <p>SMART HYDROPONICS</p>
                
              </div>
              <p className="text-gray-700 text-base">
                เป็นโครงงานแข่งขันโดยจะนำการใช้ระบบ IOT MICROCONTROLLER
                มาใช้ในทางการเกษตรร่วมกับการปลูกพืชแบบไฮโดรโปนิค
              </p>
              <a
                className="btn 
                    flex justify-center mt-4 items-center mx-auto h-10 w-max"
                href="https://github.com/chankxow/Project_matthayom_5"
              >
                <FaGithub />
                READ MORE
              </a>
            </div>
            <div className="px-6 pt-4 pb-2 text-center">
              <span className="inline-block bg-blue-300 rounded-full px-3 py-1 text-sm font-semibold text-blue-500 mr-2 mb-2">
                • IOT
              </span>
              <span className="inline-block bg-blue-300 rounded-full px-3 py-1 text-sm font-semibold text-green-500 mr-2 mb-2">
                • APPLICATION
              </span>
              <span className="inline-block bg-blue-300 rounded-full px-3 py-1 text-sm font-semibold text-orange-500 mr-2 mb-2">
                • INNOVATION
              </span>
              <span className="inline-block bg-blue-300 rounded-full px-3 py-1 text-sm font-semibold text-blue-900 mr-2 mb-2">
                • ARDUINO
              </span>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className=" bg-white/60 max-w-sm rounded overflow-hidden shadow-2xl "
          >
             
            <div className="px-6 py-4">
            <div className=" border-emerald-300 "><div
              className=" bg-Cafe bg-cover w-[320px] h-[250px] mt-4 mx-auto"
              
            ></div>
            </div>
              <div className="font-bold text-xl mb-2 text-indigo-600">
                <p>CAFESHOP</p>
              </div>
              <p className="text-gray-700 text-base">
              เป็นโปรเจคกลุ่มB ที่ทำส่งในค่าย CESCa17 เป็นการเขียนโค้ดด้วยpython
                ให้สามารถที่จะสั่งสินค่าและดูจำนวนเงินที่ได้
              </p>
              <a
                className="btn 
                    flex justify-center mt-4 items-center mx-auto h-10 w-max"
                href="https://github.com/chankxow/CESCa-17"
              >
                <FaGithub />
                READ MORE
              </a>
            </div>
            <div className="px-6 pt-4 pb-2 text-center">
              <span className="inline-block bg-blue-300 rounded-full px-3 py-1 text-sm font-semibold text-blue-500 mr-2 mb-2">
                • PYTHON
              </span>
              <span className="inline-block bg-blue-300 rounded-full px-3 py-1 text-sm font-semibold text-green-500 mr-2 mb-2">
                • CODING
              </span>
              <span className="inline-block bg-blue-300 rounded-full px-3 py-1 text-sm font-semibold text-orange-500 mr-2 mb-2">
                • PROGRAMMING
              </span>
              
            </div>
          </motion.div>

         

          
        </div>

        
      </div>
    </section>
  );
};

export default Project;
