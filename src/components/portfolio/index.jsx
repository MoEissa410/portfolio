import React, { useState } from "react";

import Section from "../shared/section";
import Filters from "./filters";
import Showcase from "./showcase";

import "./style.scss";

const projectsData = [
    {
        id: 1,
        name: "movix4u",
        link: "https://movix4u.netlify.app/",

        tags: ["web-app", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-7.png"),
        },
    },
    {
        id: 2,
        name: "Orbit Store",
        link: "https://orebistore.vercel.app/",
        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-2.png"),
        },
    },
    {
        id: 3,
        name: "A simpler banking",
        link: "https://banking11.netlify.app/",

        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-8.png"),
        },
    },
    {
        id: 4,
        name: "A healthy meal delivered to your door",
        link: "https://ominefood.netlify.app/",

        tags: ["web-app", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-1.png"),
        },
    },
    {
        id: 5,
        name: "lotus store",
        link: "https://loutus-store.netlify.app/",

        tags: ["web-app", "web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-6.png"),
        },
    },
    {
        id: 6,
        name: "heathy food",
        link: "https://heathyfood.vercel.app/",

        tags: ["product", "web-app", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-4.png"),
        },
    },
    {
        id: 7,
        link: "https://movix4u.netlify.app/",

        name: "Digital Creative Agency",
        tags: ["web-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-3.jpg"),
        },
    },
    {
        id: 8,
        link: "https://movix4u.netlify.app/",

        name: "Virtual Reality Experience",
        tags: ["web-app", "mobile-app", "web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-5.jpg"),
        },
    },
];

const Portfolio = () => {
    const [projects, setProjects] = useState(projectsData);
    const [transition, setTransition] = useState(false);

    const filterProjects = (tag) => {
        setTransition("zoomout");

        setTimeout(() => {
            if (tag !== "all") {
                const filteredProjects = projectsData.filter((f) =>
                    f.tags.includes(tag)
                );
                setProjects(filteredProjects);
            } else {
                setProjects(projectsData);
            }
            setTransition("zoomin");
        }, 200);

        setTimeout(() => {
            setTransition(false);
        }, 600);
    };

    return (
        <Section
            id="portfolio"
            title="Check My Portfolio"
            background="light"
        >
            <div className="portfolio-content-wrapper">
                <Filters filterProjects={(tag) => filterProjects(tag)} />
                <Showcase
                    data={projects}
                    transition={transition}
                />
            </div>
        </Section>
    );
};

export default Portfolio;
