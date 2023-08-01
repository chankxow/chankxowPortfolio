import React from "react";
//img
import SchoolLogo from "../assets/stp-logo.png";
// motion
import CountUp from "react-countup";
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
//icons
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
const About = () => {
  return (
    <section id="about" className="section mx-auto max-w-max mx-h-max block">
      <div className="container">
        <motion.h1
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="text-black mx-auto text-center text-[50px] 
    font-bold text-transparent bg-gradient-to-r bg-clip-text
     from-blue-500 to-green-500 py-5 "
        >
          -MY JOURNEY-
        </motion.h1>

        <div className="f-anupan text-black ">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="py-6 text-center items-center block"
          >
            <img src={SchoolLogo} alt="" className="mx-auto text-[40px]" />
            <div className="hover:scale-[105%] transition-all ease-in-out duration-200">
              <a
                href="http://srithatpit.ac.th/wcms/"
                className="text-transparent bg-gradient-to-br bg-clip-text
     from-black to-yellow-500 text-[48px] font-bold "
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
      <div className="w-max mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
        >
          <h1
            className="text-black text-[50px] 
    font-bold text-transparent bg-gradient-to-r bg-clip-text
     from-green-500 to-blue-500 py-10"
          >
            {"<"} ABOUT ME {"/>"}
          </h1>
        </motion.div>
      </div>

      <div className="mx-auto flex">
        <div className="flex flex-col gap-y-10 lg:flex-row h-max">
          <div className="mx-auto hover:scale-[105%] transition-all duration-300 h-[400px]">
            <div className="profile-img ">
              <b className=""></b>
              <div className="content">
                <p className="title">KIATTIPOOM PALASAN</p>
                <ul className="sci">
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=100011973946922">
                      <FaFacebook />
                    </a>
                  </li>

                  <li>
                    <a href="https://www.instagram.com/grv.kx/?hl=en">
                      <FaInstagram />
                    </a>
                  </li>

                  <li>
                    <a href="https://github.com/chankxow">
                      <FaGithub />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            <div className="mx-auto block p-8 f-anupan">
              <h1
                className="text-transparent bg-gradient-to-b bg-clip-text
     from-blue-500 to-green-500 font-bold text-[30px] pb-4"
              >
                NAME
              </h1>
              <div>
                <p
                  className="text-[20px] text-transparent bg-gradient-to-t bg-clip-text
     from-blue-500 to-green-500"
                >
                  Poom ,Kiatipoom Palasan{" "}
                </p>
              </div>
              <h1
                className=" text-transparent bg-gradient-to-b bg-clip-text
     from-blue-500 to-green-500 font-bold text-[30px] pb-4"
              >
                SKILL
              </h1>
              <div>
                <p></p>
              </div>

              <h1
                className="text-transparent bg-gradient-to-b bg-clip-text
     from-blue-500 to-green-500 font-bold text-[30px] pb-4"
              >
                BIRHDAY
              </h1>
              <div>
                <p
                  className="text-[20px] text-transparent bg-gradient-to-t bg-clip-text
     from-blue-500 to-green-500"
                >
                  <CountUp
                    className=" text-transparent bg-gradient-to-t bg-clip-text
     from-blue-500 to-green-500 text-[20px] "
                    start={0}
                    end={30}
                    duration={5}
                  />{" "}
                  Jan{" "}
                  <CountUp
                    className=" text-transparent bg-gradient-to-t bg-clip-text
     from-blue-500 to-green-500 text-[20px] "
                    start={0}
                    end={200}
                    duration={5}
                  />
                  <CountUp
                    className=" text-transparent bg-gradient-to-t bg-clip-text
     from-blue-500 to-green-500 text-[20px] "
                    start={0}
                    end={5}
                    duration={5}
                  />
                </p>
              </div>
              <h1
                className="text-transparent bg-gradient-to-b bg-clip-text
     from-blue-500 to-green-500 font-bold text-[30px] pb-4"
              >
                ADDRESS
              </h1>
              <div
                className="text-[20px] text-transparent bg-gradient-to-t bg-clip-text
     from-blue-500 to-green-500"
              >
                <p className="">
                  77 หมู่ 4 ซอย 7 บ้านเลิงถ่อนโนนสมบูรณ์ ตำบลหนองหญ้าไซ
                </p>
                <p>อำเภอวังสามหมอ จังหวัดอุดรธานี 41280</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
