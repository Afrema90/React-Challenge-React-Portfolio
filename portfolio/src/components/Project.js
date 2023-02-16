import React from "react";

funtion Project (props) {
    return (
        <div className="colums is desktop is-justify-content-center is flex-wrap-wrap is-flex-direction-row">
            {props.projects.map((project) => (
                <div className="column is-one-third" key={project.name}>
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-4by3">
                                <img src={project.image} alt={project.name} />
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="media">
                                <div className="media-content">
                                    <p className="title is-4">{project.name}</p>
                                    <p className="subtitle is-6">{project.category}</p>
                                </div>
                            </div>
                            <div className="content">
                                {project.description}
                                <br />
                                <br />
                                <a href={project.deployed} target="_blank" rel="noreferrer">
                                    Deployed Application
                                </a>
                                <br />
                                <a href={project.github} target="_blank" rel="noreferrer">
                                    GitHub Repository
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Project;