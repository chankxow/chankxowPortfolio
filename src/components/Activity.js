import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Activity = () => {
  return (
    <div
      id="activity"
      className="text-black section max-w-max mx-h-max mx-auto"
    >
      <div className="container  text-center">
        <motion.h1
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="text-black mx-auto text-center text-[50px] 
    font-bold text-transparent bg-gradient-to-r bg-clip-text
     from-blue-500 to-green-500 py-5 "
        >
          -MY ACTIVITY-
        </motion.h1>

        <div className=" max-h-max max-w-max ">
          <div className="cards  ">
            <div className="card red h-max">
              <div>
                <p className="tip">Hover Me</p>
              </div>
              <div className="second-text">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Suscipit accusamus distinctio eum tempora accusantium
                  perspiciatis et similique, incidunt quibusdam velit?</p>
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
                <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Suscipit accusamus distinctio eum tempora accusantium
                  perspiciatis et similique, incidunt quibusdam velit?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
