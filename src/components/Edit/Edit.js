import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/userContext";
import { editPublication, getOne } from "../../services/publicationService";
import "./styles/edit.css";

const Edit = () => {
    const { publicationId } = useParams();
    const [data, setData] = useState({});
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const token = user.accessToken;
    
    useEffect(() => {
        getOne(publicationId)
            .then(result => {
                setData(result);
            });
    }, [publicationId]);

    const changeHandler = (ev) => {
        setData(state => ({
            ...state,
            [ev.target.name]: ev.target.value
        }));
    }

    const submitHandler = (ev) => {
        ev.preventDefault();

        editPublication(publicationId, token, data)
            .then(() => {
                navigate(`/details/${publicationId}`);
            });
    }

    return (
        <main>
            <form className="edit-page" onSubmit={(ev) => submitHandler(ev)}>
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
                    onChange={(ev) => changeHandler(ev)}
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
                    onChange={(ev) => changeHandler(ev)}
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
                    onChange={(ev) => changeHandler(ev)}
                />
                <button className="button">Edit</button>
            </form>
        </main>
    );
}

export default Edit;