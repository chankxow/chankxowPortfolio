import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Activity = () => {
  return (
    <div id="activity" className="text-black section max-w-max mx-h-max">
      <div className="container mx-auto">
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
      </div>
    </div>
  );
};

export default Activity;
