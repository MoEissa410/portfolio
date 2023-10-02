import React from "react";

import Arrow from "../../shared/arrow";

import "./style.scss";

const Showcase = ({ data, transition }) => {
    console.log(data);
    return (
        <div className="projects-showcase">
            {data.map((project) => (
                <a
                    className={`showcase-item ${
                        transition === "zoomout"
                            ? "zoomOut"
                            : transition === "zoomin"
                            ? "zoomIn"
                            : ""
                    }`}
                    key={project?.id}
                    href={project?.link}
                    target="_blank"
                    rel="noreferrer"
                >
                    {console.log(project.link)}
                    <div className="meta-content">
                        <h3>{project.name}</h3>
                        <div className="go-to-cta">
                            <span className="text">Project Details</span>
                            <Arrow />
                        </div>
                    </div>
                    <img
                        alt={project.name}
                        src={project.media.thumbnail}
                    />
                </a>
            ))}
        </div>
    );
};

export default Showcase;
