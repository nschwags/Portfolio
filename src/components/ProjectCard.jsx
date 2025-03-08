import React from "react";
import "./projects.css";

function ProjectCard({ title, img, desc, live, github, isOpen, onHover }) {
  return (
    <div
      className={`curtain-card ${isOpen ? "open" : ""}`}
      onMouseEnter={onHover}
    >
      {/* Only show image and description when open */}
      <img src={img} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <div className="project-links">
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
          >
            Live Site
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
