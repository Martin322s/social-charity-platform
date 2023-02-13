import { Link } from "react-router-dom";

const Publication = ({ publicData }) => {
    return (
        <article className="publication">
            <h1>{publicData.title}</h1>
            <span className="content-cat ">{publicData.category}</span>
            <p className="content">{publicData.content}</p>
            <div className="activities">
                <Link className="btn details-btn" to={`/details/${publicData._id}`}>Details</Link>
            </div>
        </article>
    );
}

export default Publication;