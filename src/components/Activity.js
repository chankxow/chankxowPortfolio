import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaGithub, FaGoogleDrive } from "react-icons/fa";

const Activity = () => {
  return (
    <div
      id="activity"
      className="text-black section max-w-max mx-h-max mx-auto f-anupan"
    >
      <div className="container text-center ">
        <motion.h1
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="text-black mx-auto text-center text-[50px] 
    font-bold text-transparent bg-gradient-to-r bg-clip-text
     from-blue-500 to-green-500 py-5  "
        >
          -MY ACTIVITY-
        </motion.h1>

        <div className=" max-h-max max-w-max py-20 ">
          <div className="cards ">
            <div className="card bg-slate-400 flex flex-col gap-y-10 lg:flex-row h-max ">
              <div>
                <div className="mx-auto hover:scale-[102%] transition-all duration-300 h-auto">
                  <div className="post-img mx-auto ">
                    <div className="post bg-cesca17 bg-cover bg-center rounded-2xl"></div>
                    <div className="content ">
                      <div className=" relative font-semibold text-center">
                        <a
                          className="btn
                    flex mx-auto h-10 w-max justify-center items-center"
                          href="https://drive.google.com/file/d/187c9aVVXowRu1v-0a0YmUdrI4FB634EC/view?usp=drive_link"
                        >
                          <FaGoogleDrive /> READ MORE
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="second-text">
                <p
                  className="text-[30px] font-bold text-transparent bg-gradient-to-r bg-clip-text
     from-blue-500 via-purple-500 to-blue-900 "
                >
                  CESCa#17 Online Camp
                </p>
                <p>
                  CESCa#17 ค่ายเยาวชนวิศวกรรมคอมพิวเตอร์ (Online camp) โดย
                  สาขาวิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์
                  มหาวิทยาลัยขอนแก่น
                  เป็นค่ายออนไลน์ที่ได้ทำโปรเจคเป็นทีมและได้รับประสบการณ์การเรียนรู้ทางด้านวิศวกรรมคอมพิวเตอร์ระดับเริ่มต้น
                </p>
                <span className=" mt-14 flex flex-col gap-y-10 lg:flex-row max-w-max max-h-max  mx-auto ">
                  <div className=" bg-blue-500  rounded-2xl mr-4 px-5">
                    <p
                      className="font-bold text-transparent bg-gradient-to-r bg-clip-text
     from-black to-red-500"
                    >
                      • ENGINEERING
                    </p>
                  </div>
                  <div className=" bg-blue-600  rounded-2xl mr-4 px-5">
                    <p
                      className=" font-bold text-transparent bg-gradient-to-r bg-clip-text
     from-red-500 to-yellow-500"
                    >
                      • SOFTWARE
                    </p>
                  </div>
                  <div className=" bg-blue-700  rounded-2xl mr-4 px-5">
                    <p
                      className=" font-bold text-transparent bg-gradient-to-r bg-clip-text
     from-yellow-500 to-green-500"
                    >
                      • HARDWARE
                    </p>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class=" lg:flex shadow-xl rounded-3xl">
        
          <div
            class=" bg-cesca17 h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            title="LOGO CESCa#17"
          ></div>
          <div class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8">
              <a
                href="https://github.com/chankxow"
                class="text-sm text-grey-dark flex items-center"
              >
                <FaGithub />
                Chankxow
              </a>
              <p
                  className="text-[30px] font-bold text-transparent bg-gradient-to-r bg-clip-text
     from-black via-indigo-500 to-blue-900 "
                >
                  CESCa#17 Online Camp
                </p>
              <p class="text-grey-darker text-base">
                CESCa#17 ค่ายเยาวชนวิศวกรรมคอมพิวเตอร์ (Online camp) โดย
                สาขาวิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยขอนแก่น
                เป็นค่ายออนไลน์ที่ได้ทำโปรเจคเป็นทีมและได้รับประสบการณ์การเรียนรู้ทางด้านวิศวกรรมคอมพิวเตอร์ระดับเริ่มต้น
              </p>
            </div>
            <div class="flex items-center">
              <div class="text-sm flex mx-auto">
                <div className=" bg-blue-500  rounded-2xl mr-4 px-5">
                  <p
                    className="font-bold text-transparent bg-gradient-to-r bg-clip-text
     from-black to-red-500"
                  >
                    • ENGINEERING
                  </p>
                </div>
                <div className=" bg-blue-600  rounded-2xl mr-4 px-5">
                  <p
                    className=" font-bold text-transparent bg-gradient-to-r bg-clip-text
     from-red-500 to-yellow-500"
                  >
                    • SOFTWARE
                  </p>
                </div>
                <div className=" bg-blue-700  rounded-2xl mr-4 px-5">
                  <p
                    className=" font-bold text-transparent bg-gradient-to-r bg-clip-text
     from-yellow-500 to-green-500"
                  >
                    • HARDWARE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
