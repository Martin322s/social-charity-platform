import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOne } from "../../services/publicationService";
import "./styles/edit.css";

const Edit = () => {
    const { publicationId } = useParams();
    const [data, setData] = useState({});
    
    useEffect(() => {
        getOne(publicationId)
            .then(result => {
                setData(result);
            });
    }, [publicationId]);


    return (
        <main>
            <form className="edit-page">
                <h3 className="edit-heading">
                    <i className="fas fa-plus-square" />
                    Edit Publication
                </h3>
                <label className="label" htmlFor="title">
                    Title:
                </label>
                <input
                    className="inputField"
                    type="text"
                    id="title"
                    name="title"
                    defaultValue={data.title}
                />
                <label className="label" htmlFor="category">
                    Category:
                </label>
                <input
                    className="inputField"
                    type="text"
                    id="category"
                    name="category"
                    defaultValue={data.category}
                />
                <label className="label" htmlFor="content">
                    Content:
                </label>
                <textarea
                    name="content"
                    id="content"
                    cols={40}
                    rows={10}
                    defaultValue={data.content}
                />
                <button className="button">Edit</button>
            </form>
        </main>
    );
}

export default Edit;