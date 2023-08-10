//img

//animation
//type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
const Banner = () => {
  return (
    <section id="home" className="section text-black pb-72">
      <div className=" mx-auto ">
        <div className=" mx-auto text-center text-5xl font-bold text-white">
          <motion.div
            className="text-transparent bg-gradient-to-br bg-clip-text from-blue-500 to-green-500 "
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <p>HEY I{"'"}M</p>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-8xl font-bold text-transparent bg-gradient-to-br bg-clip-text from-blue-500 to-green-500"
          >
            <h1>POOM </h1>
            <h1 className="text-7xl">KIATTIPOOM PALASAN</h1>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <span className="text-3xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-green-500 mr-4">
              I AM
            </span>
            <TypeAnimation
              className="text-3xl font-bold text-green-500"
              sequence={[
                "A DEVELOPER",
                2000,
                "A PROGRAMMER",
                2000,
                "A STUDENT",
                2000,
                "AN ENGINEERING",
                2000,
              ]}
              speed={50}
              wrapper="span"
              repeat={Infinity}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
