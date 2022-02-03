import "./SingleProject.css";

const SingleProject = ({
    project: { name, description, image, address, city, gallery },
}) => {
    console.log(description);
    return (
        <article className="card">
            <div className="projectInfo">
                <h2>{name}</h2>
                <p>{description}</p>
                <p>{city}</p>
            </div>
            <div className="projectImage">
                <img src={image} alt="altImg" />
            </div>
        </article>
    );
};

export default SingleProject;
