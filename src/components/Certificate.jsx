import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import "./Gallery";
import ImageModal from "./Gallery";
import Cesca17 from "../assets/certificate/CESCaCER.png";
import SHMCER from "../assets/certificate/SHMCER.jpg";
import CDG from "../assets/certificate/CDG.png";
import tn1 from "../assets/certificate/tn1.png";
import tn2 from "../assets/certificate/tn2.png";
import tn3 from "../assets/certificate/tn3.png";
import CHULAMOOC from "../assets/certificate/CHULAMOOC.jpg";
import COMED from "../assets/certificate/COMED.png";
import THAIMOOC from "../assets/certificate/THAIMOOC.png";


const Certificate = () => {
  return (
    <div
      id="certificate"
      className="section text-black max-w-max mx-h-max mx-auto f-anupan"
    >
      <div className="text-center">
        <motion.h1
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="text-black mx-auto text-center text-[50px] 
    font-bold text-transparent bg-gradient-to-r bg-clip-text
     from-blue-500 to-green-500 py-10  "
        >
          CERTIFICATE
        </motion.h1>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col gap-10 lg:flex-row  "
        >
          <div className="bg-white h-full w-full ">
            <div className="p-2 mx-auto ">
              <div className="max-w-sm rounded overflow-hidden shadow-lg h-[450px]">
                <div className="max-w-max">
                  <ImageModal img={Cesca17} imageSrc={Cesca17} />
                </div>

                <div className="px-6 ">
                  <p className="font-bold text-base mb-2">CESCa#17 </p>
                  <p>ค่ายเยาวชนวิศวกรรมคอมพิวเตอร์ (Online camp)</p>
                  <br />
                </div>
                <div className="px-6 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #CAMP
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #ENGINEERING
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #ARDUINO
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #PROGRAMMING
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #CODING
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white h-full w-full ">
            <div className="p-2 mx-auto ">
              <div className="max-w-sm rounded overflow-hidden shadow-lg h-[450px]">
                <div className=" max-w-max">
                  <ImageModal img={SHMCER} imageSrc={SHMCER} />
                </div>

                <div className="px-6 ">
                  <p className="font-bold text-base mb-2">
                    โครงงานคอมพิวเตอร์ประเภทซอฟแวร์ ครั้งที่70
                  </p>
                  <p>
                    ผลงานแข่งขันศิลปะหัตถกรรมโครงงานคอมพิวเตอร์ประเภทซอฟแวร์ครั้งที่
                    70
                  </p>
                </div>
                <div className="px-6  pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #ENGINEERING
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #ARDUINO
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #PROGRAMMING
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #APPLICATION
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white h-full w-full ">
            <div className="p-2 mx-auto ">
              <div className="max-w-sm rounded overflow-hidden shadow-lg h-[450px]">
                <div className=" max-w-max">
                  <ImageModal img={CDG} imageSrc={CDG} />
                </div>

                <div className="px-6 ">
                  <p className="font-bold text-base mb-2">
                    หลักสูตรอบรม Python Programming
                  </p>
                  <p>
                    อบรมเขียนโปรแกรมภาษา PYTHON จาก <br />
                    CODE THIER DREAM
                  </p>
                  <br />
                </div>
                <div className="px-6  pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #CAMP
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #PYTHON
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #PROGRAMMING
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #CODING
                  </span>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col gap-10 lg:flex-row my-4"
        >
          <div className="bg-white h-full w-full ">
            <div className="p-2 mx-auto ">
              <div className="max-w-sm rounded overflow-hidden shadow-lg h-[450px]">
                <div className="max-w-max">
                  <ImageModal img={CHULAMOOC} imageSrc={CHULAMOOC} />
                </div>

                <div className="px-6 ">
                  <p className="font-bold text-base mb-2">
                    Learn Python: Language Basics and Fundamental Data
                    Processing
                  </p>
                  <p>เรียนภาษา Python ตั้งแต่เริ่มต้น โดย CHULAMOOC</p>
                </div>
                <div className="px-6  pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #LEARING
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #PYTHON
                  </span>
                  
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #PROGRAMMING
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #CODING
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white h-full w-full ">
            <div className="p-2 mx-auto ">
              <div className="max-w-sm rounded overflow-hidden shadow-lg h-[450px]" >
                <div className=" max-w-max">
                  <ImageModal img={tn2} imageSrc={tn2} />
                </div>

                <div className="px-6 ">
                  <p className="font-bold text-base mb-2">BASIC HARDWARE </p>
                  <p>การเขียนโปรแกรมควบคุมบอร์ดไมโครคอนโทรลเลอร์ขั้นพื้นฐาน</p>
                  <br />
                </div>
                <div className="px-6  pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #PROGRAMMING
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #ARDUINO
                  </span>
                 
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #CODING
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white h-full w-full ">
            <div className="p-2 mx-auto ">
              <div className="max-w-sm rounded overflow-hidden shadow-lg h-[450px]">
                <div className=" max-w-max">
                  <ImageModal img={tn3} imageSrc={tn3} />
                </div>

                <div className="px-6 ">
                  <p className="font-bold text-base mb-2">
                    BASIC PYTHON PROGRAMMING:LOGIC
                  </p>
                  <p>การเขียนโปรแกรมด้วยภาษา PYTHON ขั้นพื้นฐาน</p>
                  <br />
                </div>
                <div className="px-6  pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #LOGIC
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #PYTHON
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #PROGRAMMING
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col gap-10 lg:flex-row my-4"
        >
          <div className="bg-white h-full w-[400px] ">
            <div className="p-2 mx-auto ">
              <div className="max-w-sm rounded overflow-hidden shadow-lg h-[450px]">
                <div className="max-w-max">
                  <ImageModal img={tn1} imageSrc={tn1} />
                </div>

                <div className="px-6 ">
                  <p className="font-bold text-base mb-2">
                    BASIC SOFTWARE WEBSITE
                  </p>
                  <p>การเขียนเว็บไซต์ด้วย HTML & CSS ขั้นพื้นฐาน</p>
                  <br />
                </div>
                <div className="px-6  pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #WEB
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #HTML & CSS
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #PROGRAMMING
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white h-full w-[400px] ">
            <div className="p-2 mx-auto ">
              <div className="max-w-sm rounded overflow-hidden shadow-lg h-[450px]">
                <div className="max-w-max">
                  <ImageModal img={COMED} imageSrc={COMED} />
                </div>

                <div className="px-6 ">
                  <p className="font-bold text-base mb-2">
                  COMPUTER EDUCATION KKU OPEN HOUSE 2022                  </p>
                  <p>เข้าร่วมการแข่งขันเขียนเว็บไซต์ในกิจกรรม COMPUTER EDUCATION KKU OPEN HOUSE  </p>
                </div>
                <div className="px-6  pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #WEB
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #HTML & CSS
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #PROGRAMMING
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #CODING
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white h-full w-[400px] ">
            <div className="p-2 mx-auto ">
              <div className="max-w-sm rounded overflow-hidden shadow-lg h-[450px]">
                <div className="max-w-max">
                  <ImageModal img={THAIMOOC} imageSrc={THAIMOOC} />
                </div>

                <div className="px-6 ">
                  <p className="font-bold text-base mb-2">
                    BASIC SOFTWARE WEBSITE
                  </p>
                  <p></p>
                </div>
                <div className="px-6  pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #WEB
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #HTML & CSS
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #CODING
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Certificate;
