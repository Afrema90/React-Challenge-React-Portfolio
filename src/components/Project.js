import React from "react";

const divStyle = {
    width: "600px",
    height: "400px",
  };

function Project (props) {
    console.log(props);
    return (
        <div className="colums is desktop is-justify-content-center is flex-wrap-wrap is-flex-direction-row">
                <div className="column is-one-third" key={props.name}>
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-4by3">
                                <img className="imgSize" style={divStyle} src={props.image} alt={props.name} />
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="media">
                                <div className="media-content">
                                    <p className="title is-4">{props.name}</p>
                                    <p className="subtitle is-6">{props.category}</p>
                                </div>
                            </div>
                            <div className="content">
                                {props.description}
                                <br />
                                <br />
                                <a href={props.deployed} target="_blank" rel="noreferrer">
                                    Deployed Application
                                </a>
                                <br />
                                <a href={props.github} target="_blank" rel="noreferrer">
                                    GitHub Repository
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Project;