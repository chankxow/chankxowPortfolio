
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

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
        </motion.h1 >
        <motion.div 
        variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }} className="flex flex-col gap-10 lg:flex-row  ">
          <div className="bg-white h-full w-full ">
            <div className="p-2 mx-auto ">
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="">
                  <div
                    className=" bg-CESCaCER bg-cover h-[250px]  w-[350px]"
                    title="CERTIFICATE"
                  ></div>
                </div>

                <div className="px-6 ">
                  <div className="font-bold text-base mb-2">CESCa#17</div>
                </div>
                <div className="px-6  pb-2">
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
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white h-full w-full ">
            <div className="p-2 mx-auto ">
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="">
                  <div
                    className=" bg-SHMCER bg-cover h-[250px]  w-[350px]"
                    title="CERTIFICATE"
                  ></div>
                </div>

                <div className="px-6 ">
                  <div className="font-bold text-base mb-2">โครงงานคอมพิวเตอร์ประเภทซอฟแวร์ ครั้งที่70</div>
                </div>
                <div className="px-6  pb-2">
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
