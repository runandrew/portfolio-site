import React from "react";
import { withSiteData, withRouteData } from "react-static";
//

export default withRouteData(({ projects }) => (
  <div>
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 col-lg-8" id="about-row">
            <h1>Andrew Garcia</h1>
            <div id="top-rectUnder" />
            <h2>Engineer, Fullstack Developer</h2>
            <p>
              specializing in the NERDS stack (Node.js, Express, React,
              Databases using SQL). Previously, I was working as a control
              systems engineer in the automotive industry, and have always been
              passionate about software. In my spare time, I would work on my
              various side projects and improve my programming skill set. This
              led to my decision to leave my current position to pursue my
              passion for coding. I have just completed the Software Engineering
              program at Fullstack Academy, and currently work as a fellow at
              the school. I love the challenge of problem solving as well as
              constantly learning new technologies.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="section alternateSectBg" id="skills-sect">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 col-lg-8">
            <h2 className="sect-title">Skills &amp; Education</h2>
            <p className="line-item">
              <span className="semistrong">Proficient</span>: JavaScript,
              Node.js, Express, React, Redux, Sequelize, HTML5, CSS, ES6, Git /
              Github, Socket.io, MATLAB
            </p>
            <p className="line-item">
              <span className="semistrong">Knowledgeable</span>: D3.js, Angular,
              Electron, PostgreSQL, Mocha, Chai, jQuery, SASS
            </p>
            <p className="line-item">
              <span className="semistrong">Familiar</span>: SQL, Jest, Gulp, Elm
            </p>
            <p className="line-item">
              <span className="semistrong">Interested</span>: Machine Learning,
              Hadoop, R
            </p>
            <hr className="sub-divide" />
            <p className="line-item">
              <span className="semistrong">M.S. Mechanical Engineering</span>,
              Ohio State University
            </p>
            <p className="line-item">
              <span className="semistrong">B.S. Mechanical Engineering</span>,
              Ohio State University
            </p>
            <p className="line-item">
              <span className="semistrong">
                Software Engineering Immersive Program
              </span>, Fullstack Academy
            </p>
            <hr className="sub-divide" />
            <p className="line-item">
              <a className="right-space" href="https://github.com/runandrew">
                Github
              </a>
              <a href="https://www.linkedin.com/in/amgarcia11">LinkedIn</a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="section" id="projects-sect">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 col-lg-8">
            <h2 className="sect-title">Projects</h2>

            {projects.map((project, i) => {
              return (
                <div className="thing" key={i}>
                  <p className="line-item">
                    <a href={`/projects/${project.data.slug}`}>
                      <span className="semistrong">
                        {project.data.projectName}
                      </span>
                    </a>
                    - {project.data.year}
                  </p>
                  <p className="line-item">{project.data.role}</p>
                  <p>{project.data.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>

    <div className="section alternateSectBg" id="contact-sect">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 col-lg-8">
            <h2 className="sect-title">Contact</h2>
            <p className="line-item">
              <a href="mailto:hello@andrewgarcia.me">hello@andrewgarcia.me</a>
            </p>
            <p className="line-item">
              <a className="right-space" href="https://github.com/runandrew">
                Github
              </a>
              <a href="https://www.linkedin.com/in/amgarcia11">LinkedIn</a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="section" id="footer-sect">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <p>&copy; Andrew Garcia 2018 - Designed and built with &#9829;</p>
          </div>
        </div>
      </div>
    </div>
  </div>
));
