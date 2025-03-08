import React from "react";
import "./tech.css";
import "./projects.css";

function Tech() {
  return (
    <div className="section-container">
      <h2 className="section-title">Tech I Work With</h2>
      <div className="tech-container">
        <ul>
          <li>
            <i className="fab fa-html5"></i> HTML5
          </li>
          <li>
            <i className="fab fa-css3-alt"></i> CSS3
          </li>
          <li>
            <i className="fab fa-js-square"></i> JavaScript
          </li>
          <li>
            <i className="fab fa-node"></i> Node.js
          </li>
          <li>
            <i className="fab fa-react"></i> React
          </li>
          <li>
            <i className="fab fa-node"></i> Express.js
          </li>
          <li>
            <i className="fas fa-database"></i> MongoDB
          </li>
          <li>
            <i className="fas fa-database"></i> MySQL
          </li>
          <li>
            <i className="fas fa-plug"></i> RESTful APIs
          </li>
          <li>
            <i className="fab fa-github"></i> Git
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Tech;
