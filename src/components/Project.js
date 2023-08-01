import React from "react";
const Project = () => {
  return (
    <section id="project" className="section  text-black h-max w-max">
      PROJECT
      <div className="container mx-auto">
      <div className="flex flex-col gap-y-10 lg:flex-row h-max">
      <div class="card">
  <fapic/>
  <div class="card__content">
    <p class="card__title">Project Name</p>
    <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
    <button class="card__button">Live Demo</button>
    <button class="card__button secondary">Source Code</button>
  </div>
</div>
      </div>
      

      </div>
    </section>
  );
};

export default Project;
