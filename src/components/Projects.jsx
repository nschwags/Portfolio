import React, { useState } from "react";
import "./projects.css";
import ProjectCard from "./ProjectCard";
import artGallery from "../assets/art-gallery.png";
import littleLemon from "../assets/little-lemon.png";
import pomodoro from "../assets/pomodoro.png";
import blogApp from "../assets/blog.png";
import mAndG from "../assets/M&G.png";
import plateMate from "../assets/platemate.png";

function Projects() {
  const [openIndex, setOpenIndex] = useState(0); // Keep track of the open project

  const projects = [
    {
      title: "Art Gallery",
      img: artGallery,
      desc: "Explore over 400k works of art via the Met Museum API.",
      live: "http://artgallery.schwagdev.com",
      github: "https://github.com/nschwags/Art-Gallery",
    },
    {
      title: "M&G Website",
      img: mAndG,
      desc: "A mock website for an online jeweler.",
    },
    {
      title: "Little Lemon",
      img: littleLemon,
      desc: "A simple mediterranean restaurant website.",
      github: "https://github.com/nschwags/little-lemon",
    },
    {
      title: "Plate Mate",
      img: plateMate,
      desc: "A recipe finder app with filtering.",
    },
    {
      title: "Blog App",
      img: blogApp,
      desc: "A simple blog app showcasing my thoughts.",
    },
    {
      title: "Pomodoro App",
      img: pomodoro,
      desc: "Boost productivity with a customizable Pomodoro timer.",
    },
  ];

  return (
    <div className="project-container">
      <h2 className="section-title">Projects</h2>
      <div className="curtain-carousel">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            img={project.img}
            desc={project.desc}
            isOpen={index === openIndex}
            onHover={() => setOpenIndex(index)}
            live={project.live}
            github={project.github} // Set the hovered project as open
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
