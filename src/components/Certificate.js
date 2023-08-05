import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import "flowbite";
import Cescer from "../assets/certificate/CESCaCER.png";
const Certificate = () => {
  return (
    <div
      id="certificate"
      className="section text-black max-w-max mx-h-max mx-auto f-anupan"
    >
      <div className="container text-center">
        <motion.h1
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="text-black mx-auto text-center text-[50px] 
    font-bold text-transparent bg-gradient-to-r bg-clip-text
     from-blue-500 to-green-500 py-10  "
        >
          -CERTIFICATE-
        </motion.h1>

        <div
          id="default-carousel"
          class="relative md:w-[650px]"
          data-carousel="slide"
        >
          <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src={Cescer}
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              ></img>
            </div>
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="/docs/images/carousel/carousel-2.svg"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              ></img>
            </div>
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="/docs/images/carousel/carousel-3.svg"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              ></img>
            </div>
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="/docs/images/carousel/carousel-4.svg"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              ></img>
            </div>
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="/docs/images/carousel/carousel-5.svg"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              ></img>
            </div>
          </div>
          <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 4"
              data-carousel-slide-to="3"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 5"
              data-carousel-slide-to="4"
            ></button>
          </div>
          <button
            type="button"
            class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full
             bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 
             group-focus:ring-4 group-focus:ring-indigo-300 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                class="w-4 h-4 text-black dark:text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span class="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span
              class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30
               dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 
               group-focus:ring-4 group-focus:ring-indigo-300 dark:group-focus:ring-gray-800/70 group-focus:outline-none"
            >
              <svg
                class="w-4 h-4 text-black dark:text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span class="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
