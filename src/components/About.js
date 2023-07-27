import React from "react";
//img
import SchoolLogo from "../assets/stp-logo.png";
import profile from "../assets/avartarB.jpg";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
//intereaction
const About = () => {
  function Skill() {
    document.getElementById("ChangeTxt").innerHTML = "Hello World";
  }
  function Inform() {
    document.getElementById("ChangeTxt").innerHTML = "sad";
  }
  return (
    <section id="about" className=" section mx-auto max-w-max max-h-max block">
      <div className="container">
        <motion.h1
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="text-black mx-auto text-center text-[50px] 
    font-bold text-transparent bg-gradient-to-tr bg-clip-text
     from-blue-500 to-green-500  py-10 "
        >
          -MY JOURNEY-
        </motion.h1>

        <div className="f-anupan text-black py-5">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="py-6 text-center items-center block"
          >
            <img src={SchoolLogo} alt="" className="mx-auto text-[40px]" />
            <div>
              <a
                href="http://srithatpit.ac.th/wcms/"
                className="text-transparent bg-gradient-to-tr bg-clip-text
     from-black to-yellow-500 text-5xl font-bold"
              >
                โรงเรียนศรีธาตุพิทยาคม
              </a>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            <p>
              สวัสดีครับ, ผม นายเกียรติภูมิ พละสาร หรือชื่อเล่นว่า ภูมิ ครับ
              เป็นนักเรียนจากโรงเรียนศรีธาตุพิทยาคม จังหวัดอุดรธานี ห้องเรียน
              วิทย์-คณิต
            </p>
            <p>
              ผมมีความชื่นชอบในด้านการเขียนโค้ดโปรแกรมมิ่ง การออกแบบเว็บไซต์
              การพัฒนาระบบ<span> IOT </span>
              และมีความใฝ่ฝันที่อยากจะเรียนต่อทางด้านวิศวกรรมคอมพิวเตอร์
            </p>
          </motion.div>
        </div>
      </div>
      <div className=" w-max mx-auto">
        <h1
          className="text-black text-[50px] 
    font-bold text-transparent bg-gradient-to-tr bg-clip-text
     from-blue-500 to-green-500  py-10 "
        >
          {"<"} ABOUT ME {"/>"}
        </h1>
      </div>
      <div>
        <div className="flex flex-col gap-y-10 lg:flex-row h-screen">
          <img src={profile} alt="" className="h-[400px] items-baseline" />
          <div className="mx-auto">
          <div className='bg-blue-500 text-black text-[50px] cursor-pointer' onClick={Skill}>Skill</div>
          <div className='bg-blue-500 text-black text-[50px] cursor-pointer' onClick={Inform}>Skill</div>
          <div><div id='ChangeTxt' className="text-black"></div></div>
          </div>
          
          
        </div>
        
      </div>
    </section>
  );
};

export default About;
