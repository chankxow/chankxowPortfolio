import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaFacebookSquare } from "react-icons/fa";
const Activity = () => {
  return (
    <div
      id="activity"
      className="text-black section  mx-auto f-anupan"
    >
      <div className="container text-center ">
        <motion.h1
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="text-black mx-auto text-center text-[50px] 
    font-bold text-transparent bg-gradient-to-r bg-clip-text
     from-blue-500 to-green-500 py-10  "
        >
          -MY ACTIVITY-
        </motion.h1>
        <div className=" mx-auto ">
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className=" bg-white flex flex-col gap-y-10 lg:flex-row h-max my-4 p-5 rounded-sm"
          >
            <div
              className="m-auto bg-cesca17 bg-center h-[250px] w-[320px] flex-none bg-cover
               rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              title="LOGO CESCa#17"
            ></div>
            <div
              className=" rounded-b lg:rounded-b-none lg:rounded-r 
             p-4 flex flex-col justify-between leading-normal"
            >
              <div className="border-double border-4 border-indigo-600 p-2">
                <div className="mb-8">
                  <a
                    href="https://www.facebook.com/CESCa.KKU"
                    className="text-sm text-grey-dark flex items-center hover:scale-[98%] ease-in-out transition-all duration-200 w-fit"
                  >
                    <FaFacebookSquare className="text-[20px] text-indigo-600" />
                    CESCa : Computer Engineering Summer Camp, KKU
                  </a>
                  <div className="date flex w-fit">
                    <span className="text-[10px] text-gray-500">
                      27 Apr. 2022 - 30 Apr. 2022
                    </span>
                  </div>
                  <p
                    className="text-2xl font-bold text-transparent bg-gradient-to-r bg-clip-text
     from-black via-indigo-500 to-blue-900 my-4"
                  >
                    CESCa#17 Online Camp
                  </p>

                  <p className="text-grey-darker  text-base">
                    CESCa#17 ค่ายเยาวชนวิศวกรรมคอมพิวเตอร์ (Online camp) โดย
                    สาขาวิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์
                    มหาวิทยาลัยขอนแก่น
                    เป็นค่ายออนไลน์ที่ได้ทำโปรเจคเป็นทีมและได้รับประสบการณ์การเรียนรู้ทางด้านวิศวกรรมคอมพิวเตอร์ระดับเริ่มต้น
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="text-[5px] flex mx-auto gap-2">
                    <div className=" bg-gray-300  rounded-2xl p-2 ">
                      <p
                        className="font-bold text-transparent bg-gradient-to-r bg-clip-text
     from-black to-red-500 1"
                      >
                        • ENGINEERING
                      </p>
                    </div>
                    <div className=" bg-gray-300  rounded-2xl p-2">
                      <p
                        className=" font-bold text-transparent bg-gradient-to-r bg-clip-text
     from-red-500 to-yellow-500"
                      >
                        • SOFTWARE
                      </p>
                    </div>
                    <div className=" bg-gray-300  rounded-2xl p-2">
                      <p
                        className=" font-bold text-transparent bg-gradient-to-r bg-clip-text
     from-yellow-500 to-green-500 "
                      >
                        • HARDWARE
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className=" mx-auto ">
          <motion.div 
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}className=" bg-white flex flex-col gap-y-10 lg:flex-row h-max my-4 p-5 rounded-sm">
            <div
              className="m-auto bg-LPLB bg-center h-[250px] w-[320px] flex-none bg-cover
               rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              title="LOGO CESCa#17"
            ></div>
            <div
              className=" rounded-b lg:rounded-b-none lg:rounded-r 
             p-4 flex flex-col justify-between leading-normal"
            >
              <div className="border-double border-4 border-indigo-600 p-2">
                <div className="mb-8">
                  <a
                    href="https://mooc.chula.ac.th/course-detail/17"
                    className="text-sm text-grey-dark flex items-center hover:scale-[98%] ease-in-out transition-all duration-200 w-fit"
                  >
                    <div className="text-[20px] text-indigo-600" />

                    <div className="bg-Chula w-[20px] h-[20px] bg-cover"></div>
                    <p>CHULA MOOC</p>
                  </a>
                  <div className="date flex w-fit">
                    <span className="text-[10px] text-gray-500">
                      21 May. 2023 - 30 May. 2023
                    </span>
                  </div>
                  <p
                    className="text-2xl font-bold text-transparent bg-gradient-to-r bg-clip-text
     from-black via-yellow-500 to-red-700 my-4"
                  >
                    Learn Python: Language Basics and Fundamental Data
                    Processing รุ่นที่ 2
                  </p>
                  <p className="text-grey-darker  text-base">
                    เรียนภาษา Python ตั้งแต่เริ่มต้น
                    เพื่อให้ผู้เรียนแม้จะไม่เคยเขียนโปรแกรมมาก่อน
                    สามารถนำความรู้ที่ได้ไปเขียนโปรแกรมบน Jupyter Notebook
                    เพื่อประมวลผลข้อมูลในบริบทต่าง ๆ ได้
                    ผู้เรียนจะได้ทำความเข้าใจประเภทของข้อมูลและการประมวลผลที่ถูกต้อง
                    ผนวกกับการควบคุมผังการทำงานของโปรแกรม
                    การเรียกใช้งานไลบรารีต่าง ๆ
                    เพื่อสร้างโปรแกรมประยุกต์อย่างง่าย ๆ ได้
                    รวมถึงได้รับพื้นฐานการออกแบบและเขียนโปรแกรม Python
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="text-[5px] flex mx-auto gap-2">
                    <div className=" bg-gray-300 rounded-2xl p-2 ">
                      <p
                        className="font-bold text-transparent bg-gradient-to-r bg-clip-text
     from-blue-500 to-yellow-500 1"
                      >
                        • PYTHON
                      </p>
                    </div>
                    <div className=" bg-gray-300  rounded-2xl p-2">
                      <p
                        className=" font-bold text-transparent bg-gradient-to-r bg-clip-text
     from-red-500 to-yellow-500"
                      >
                        • SOFTWARE
                      </p>
                    </div>
                    <div className=" bg-gray-300  rounded-2xl p-2">
                      <p
                        className=" font-bold text-transparent bg-gradient-to-r bg-clip-text
     from-yellow-500 to-green-500 "
                      >
                        • CODING
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
