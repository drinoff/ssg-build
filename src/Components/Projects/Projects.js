import { useState, useEffect } from "react";

import SingleProject from "./SingleProject/SingleProject";

import projectServices from "../../services/projectServices";
import "./Projects.css";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        projectServices.getAllProjects().then((data) => setProjects(data));
    }, []);

    return (
        <div className="projectsContainer">
            {projects.map((project) => (
                <SingleProject key={project.name} project={project} />
            ))}
        </div>
    );
};

export default Projects;
