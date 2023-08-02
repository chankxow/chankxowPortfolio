import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaGoogleDrive } from "react-icons/fa";

const Activity = () => {
  return (
    <div
      id="activity"
      className="text-black section max-w-max mx-h-max mx-auto f-anupan"
    >
      <div className="container  text-center">
      <motion.div
      variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}>
        <h1
          className="text-black mx-auto text-center text-[50px] 
    font-bold text-transparent bg-gradient-to-r bg-clip-text
     from-blue-500 to-green-500 py-5 "
        >
          -MY ACTIVITY-
        </h1>

        <div className=" max-h-max max-w-max ">
          <div className="cards ">
            <div className="card bg-slate-400 flex flex-col gap-y-10 lg:flex-row h-max">
              <div>
                <div className="mx-auto hover:scale-[102%] transition-all duration-300 h-auto">
                  <div className="post-img">
                    <div
                      className="post bg-cesca17 bg-cover bg-center rounded-2xl"
                    > 
                    </div>
                    <div className="content ">
                      <div className="title relative font-semibold tracking-widest text-center">
                      <a
                  className="btn
                    flex justify-center items-center mx-auto h-10 w-max"
                  href="https://drive.google.com/file/d/187c9aVVXowRu1v-0a0YmUdrI4FB634EC/view?usp=drive_link"
                >
                  <FaGoogleDrive /> 
                </a>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
              <div className="second-text">
              <p className="text-[30px] font-bold text-transparent bg-gradient-to-r bg-clip-text
     from-blue-500 via-purple-500 to-blue-900 ">CESCa#17 Online Camp</p>
                <p>
                CESCa#17 ค่ายเยาวชนวิศวกรรมคอมพิวเตอร์ (Online camp)
                โดย สาขาวิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยขอนแก่น เป็นค่ายออนไลน์ที่ได้ทำโปรเจคเป็นทีมและได้รับประสบการณ์การเรียนรู้ทางด้านวิศวกรรมคอมพิวเตอร์ระดับเริ่มต้น
                </p>
                <div className="flex flex-col gap-y-10 lg:flex-row max-w-max max-h-max  mx-auto m-10 ">
                <div className=" bg-blue-500  rounded-2xl mr-4 px-5"><p className="font-bold">ENGINEERING</p></div>
                <div className=" bg-blue-600  rounded-2xl mr-4 px-5"><p className=" font-bold">SOFTWARE</p></div>
                <div className=" bg-blue-700  rounded-2xl mr-4 px-5"><p className=" font-bold">HARDWARE</p></div></div>
                
              </div>
              
            </div>
            <div className="card white h-max ">
              <div>
                <p className="tip">Hover Me</p>
              </div>
              <div className="second-text ">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Suscipit accusamus distinctio eum tempora accusantium
                  perspiciatis et similique, incidunt quibusdam velit?
                </p>
              </div>
            </div>
            <div className="card blue h-max">
              <div>
                <p className="tip">Hover Me</p>
              </div>

              <div className="second-text">
                <p className="">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Suscipit accusamus distinctio eum tempora accusantium
                  perspiciatis et similique, incidunt quibusdam velit?
                </p>
              </div>
            </div>
          </div>
        </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Activity;
