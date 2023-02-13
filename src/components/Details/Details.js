import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOne } from "../../services/publicationService";
import "./styles/details.css";

const Details = () => {
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
                <div className="actions">
                    <button className="btn">Donate</button>
                    <button className="btn">Edit</button>
                    <button className="btn">Delete</button>
                </div>
            </section>
        </main>
    )
}

export default Details;