import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/userContext";
import { getOne } from "../../services/publicationService";
import "./styles/details.css";

const Details = () => {
    const { user } = useContext(AuthContext);
    const { publicationId } = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        getOne(publicationId)
            .then(data => {
                setData(data);
            });
    }, []);

    return (
        <main>
            <section className="details">
                <h3 id="details__heading">{data.title}</h3>
                <h3 className="details__category">{data.category}</h3>
                <p className="details__content">
                    {data.content}
                </p>
                {user._id === data._ownerId ?
                    <div className="actions">
                        <button className="btn">Edit</button>
                        <button className="btn">Delete</button>
                    </div>
                    :   <div className="actions"><button className="btn">Donate</button></div>
                }
            </section>
        </main>
    )
}

export default Details;