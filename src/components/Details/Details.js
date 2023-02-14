import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/userContext";
import { donate, getAuthor, getOne } from "../../services/publicationService";
import "./styles/details.css";

const Details = () => {
    const { user } = useContext(AuthContext);
    const { publicationId } = useParams();
    const [data, setData] = useState({});
    const [author, setAuthor] = useState({});
    const navigate = useNavigate();
    const sum = { sum: 100 };
    const token = user.accessToken;
    const userId = user._id;

    useEffect(() => {
        getOne(publicationId)
            .then(data => {
                getAuthor(data._ownerId)
                    .then(result => {
                        setAuthor(result);
                    });
                setData(data);
            });
    }, [publicationId]);

    const clickHandler = (id, sum, token, userId) => {
        donate(id, sum, token, userId)
            .then(result => {
                setData(result);
                navigate(`/details/${result._id}`);
            });
    }

    return (
        <main>
            <section className="details">
                <h3 id="details__heading">{data.title}</h3>
                <h3 className="details__category">{data.category}</h3>
                <p className="details__content">
                    {data.content}
                </p>
                <p>Donations: {data.donations}$</p>
                <p>Author: {author?.email}</p>
                {data.donations > 0 && data.donators.includes(user._id) ?
                    <p>Thank you! You have donated 100$</p>
                    : user._id !== data._ownerId ?
                        <div className="actions">
                            <button className="btn" onClick={() => clickHandler(publicationId, sum, token, userId)}>
                                Donate 100$
                            </button>
                        </div>
                        : null
                }
                {user._id === data._ownerId ?
                    <div className="actions">
                        <Link className="btn" to={`/details/${publicationId}/edit`}>Edit</Link>
                        <Link className="btn" to={`/details/${publicationId}/delete`}>Delete</Link>
                    </div>
                    : null
                }
            </section>
        </main>
    )
}

export default Details;