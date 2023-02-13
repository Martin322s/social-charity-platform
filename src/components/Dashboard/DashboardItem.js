import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/userContext";
import "./styles/dashboard.css";

const DashboardItem = ({ publicationData }) => {
    const { user } = useContext(AuthContext);
    return (
        <article className="publication">
            <h1>{publicationData.title}</h1>
            <span className="content-cat ">{publicationData.category}</span>
            {user.accessToken ?
                <div className="activities">
                    <Link className="btn details-btn" to={`/details/${publicationData._id}`}>Details</Link>
                </div>
                : null
            }
        </article>
    );
}

export default DashboardItem;