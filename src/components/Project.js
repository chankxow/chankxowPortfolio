import React from "react";
import s from '../assets/img-profile.png'
const Project = () => {
  return (
    <section id="project" className="section  text-black h-max w-max">
      PROJECT
      <div className="container mx-auto">
      <div className="flex flex-col gap-y-10 lg:flex-row h-max">
      <div className="card relative w-[350px] aspect-video 
      rounded-xl flex items-center justify-center 
      overflow-hidden shadow-sm shadow-gray-950 
      transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-black">
  <img src={s} alt="" />
  <div className="card__content absolute top-0 left-0 w-max h-max padding-[20px]
   box-border bg-[#f2f2f2] transition-all opacity-0 duration-[0.6s] hover:opacity-100">
    <p className="card__title">Project Name</p>
    <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
    <button className="card__button">Live Demo</button>
    <button className="card__button secondary">Source Code</button>
  </div>
</div>

      </div>
      

      </div>
    </section>
  );
};

export default Project;
