import React from "react";
import { Link } from "react-scroll";
import pfp from "../assets/Nathanpfp.jpg";
import "./profile.css";
import "../app.css";

function Profile() {
  const changeColor = (color) => {
    document.documentElement.style.setProperty("--primary-color", color);
  };

  return (
    <div className="profile-container">
      <div className="profile">
        <img className="profile-pic" src={pfp} alt="pfp" />
        <div className="profile-info">
          <h2>Welcome</h2>
          <div className="color-switcher">
            <button
              onClick={() => changeColor("#F87060")}
              style={{ background: "#F87060" }}
            ></button>
            <button
              onClick={() => changeColor("#2CF146")}
              style={{ background: "#2CF146" }}
            ></button>
            <button
              onClick={() => changeColor("#E9EE47")}
              style={{ background: "#E9EE47" }}
            ></button>
            <button
              onClick={() => changeColor("#50D8D7")}
              style={{ background: "#50D8D7" }}
            ></button>
            <button
              onClick={() => changeColor("#f5f5f5")}
              style={{ background: "#f5f5f5" }}
            ></button>
          </div>
          <p>
            Hello! I'm Nathan Schwagmeyer, a software developer with a strong
            focus on React and a passion for building dynamic, user-friendly web
            applications.
          </p>
          <p>
            Feel free to reach out to me with any questions or collaboration
            ideas, or take a look at my projects below to see what I've been
            working on!
          </p>
          <div className="profile-links">
            <a
              href="https://www.linkedin.com/in/nathan-schwagmeyer-b95626182/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/nschwags"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
            >
              GitHub
            </a>
            <a
              href="/Resume-Nathan-Schwagmeyer.pdf"
              download={"Resume-Nathan-Schwagmeyer"}
              className="social-button"
            >
              Resumé
            </a>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="social-button"
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="social-button"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
