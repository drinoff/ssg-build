import constants from "../constants/constants";

const getAllProjects = () => {
    return fetch(constants.BASE_URL + "projects.json").then((res) =>
        res.json()
    );
};

const projectServices = {
    getAllProjects,
};

export default projectServices;
