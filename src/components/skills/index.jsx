import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";

import CallToAction from "../shared/CallToAction";
import TechIcons from "../../images/tech-icons.png";
import Section from "../shared/section";
import Resume from "../../download/Mostafa Eissa cv.pdf";

import "./style.scss";

const Skills = () => {
    return (
        <Section
            background="dark"
            id="skills"
        >
            <div className="skills-content-wrapper">
                <div className="left-col">
                    <img
                        src={TechIcons}
                        alt="JavaScript, React, CSS, HTML, SASS, Photoshop, Figma"
                    />
                </div>
                <div className="right-col">
                    <h2>Skills</h2>
                    <p>
                        <span>React js</span>
                        <span>next js</span>
                        <span>JavaScript</span>
                        <span>Typescript</span>
                        <span>jQuery</span>
                        <span>OOP</span>
                        <span>react-query</span>
                        <span>Redux & Redux Toolkit</span>
                        <span>Style Component</span>
                        <span>JASON</span>
                        <span>Tailwind Css</span>
                        <span>material ui</span>
                        <span>bootstrap</span>
                        <span>Git, GitHub</span>
                        <span>HTML5</span>
                        <span>CSS3</span>
                        <span>Sass</span>
                    </p>
                    <CallToAction
                        text="Download CV"
                        icon={<AiOutlineCloudDownload />}
                        action={() => window.open(Resume)}
                    />
                </div>
            </div>
        </Section>
    );
};

export default Skills;
