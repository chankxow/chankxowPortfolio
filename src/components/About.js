import React from "react";
//img
import SchoolLogo from "../assets/stp-logo.png";
import profile from "../assets/img-profile.png";
// motion
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
//intereaction
const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section
      id="about"
      ref={ref}
      className=" section mx-auto max-w-max max-h-max block"
    >
      <div className="container">
        <motion.h1
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="text-black mx-auto text-center text-[50px] 
    font-bold text-transparent bg-gradient-to-tr bg-clip-text
     from-blue-500 to-green-500 py-5 "
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
      <div className="w-max mx-auto"><motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
      >
        <h1
          className="text-black text-[50px] 
    font-bold text-transparent bg-gradient-to-tr bg-clip-text
     from-blue-500 to-green-500  py-10 "
        >
          {"<"} ABOUT ME {"/>"}
        </h1>
      </motion.div></div>
      
      <div className="mx-auto flex">
        <div className="flex flex-col gap-y-10 lg:flex-row h-screen">
          <div className="mx-auto hover:scale-[105%] transition-all duration-300 h-[400px]">
            <motion.img
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              src={profile}
              alt=""
              className="rounded-2xl h-[400px] w-[280px] shadow-2xl"
            />
          </div>
          <div className="mx-auto block p-8 f-anupan">
            <motion.h1
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="text-transparent bg-gradient-to-b bg-clip-text
     from-blue-500 to-green-500 font-bold text-[30px] pb-4"
            >
              NAME
              <p className="text-[20px] text-blue-500">
                Poom ,Kiatipoom Palasan{" "}
              </p>
            </motion.h1>
            <motion.h1
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className=" text-transparent bg-gradient-to-b bg-clip-text
     from-blue-500 to-green-500 font-bold text-[30px] pb-4"
            >
              AGE
              <p>
                <CountUp
                  className=" text-blue-500 font-bold text-[20px] "
                  start={0}
                  end={18}
                  duration={5}
                />
              </p>
            </motion.h1>

            <motion.h1
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className=" text-transparent bg-gradient-to-b bg-clip-text
     from-blue-500 to-green-500 font-bold text-[30px] pb-4"
            >
              BIRHDAY<p className="text-[20px] text-blue-500">30 Jan 2005</p>
            </motion.h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
