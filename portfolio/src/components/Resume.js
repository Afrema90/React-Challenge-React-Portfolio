import React from "react";

function Resume() {
    return (
        <section className="resume-section" id="resume">
        <div className="resume-section-content">
            <h1 className="mb-0">
            Ama
            <span className="text-primary">Frema</span>
            </h1>
            < className="subheading mb-5">
            97 N Main St · Boylston, MA 01583 · (860) 816-1613 ·
            <a href="mailto:

            <a
            className="button is-primary is-rounded"
            href={process.env.PUBLIC_URL + "/ama-frema-resume.pdf"}
            target="_blank" rel="noreferrer"
            >
                <span className="icon">
                    <i className="fas fa-download"></i>
                </span>
                <span>Download Resume</span>
            </a>
            <div className="column">
                <p className="content is-medium">Skills</p>
                <hr />
                <ul>
                    <li>HTML, CSS, Javascript</li>
                    <li>React, Node.js, Express.js, MongoDB, MySQL,JSON</li>
                    <li>Bootstrap, Phython, Nosql,firebase,restapi,Cloudinary</li>
                    <li>Git, Github, Heroku, VS Code, Slack</li>
                </ul>
                </ul>
            </div>
            );
        }

        export default Resume;
