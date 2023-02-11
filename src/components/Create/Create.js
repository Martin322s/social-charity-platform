import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/userContext";
import { createPublication } from "../../services/publicationService";
import "./styles/create.css";

const Create = () => {
    const { user } = useContext(AuthContext);
    const [data, setData] = useState({
        title: "",
        category: "",
        content: ""
    });

    const changeHandler = (ev) => {
        setData(state => ({
            ...state,
            [ev.target.name]: ev.target.value
        }));
    }

    const submitHandler = (ev, data, token, id) => {
        ev.preventDefault();

        if (data.title === '' || data.category === '' || data.content === '') {
            alert("All fields are required!");
        } else {
            createPublication({ ...data, _ownerId: id }, token)
                .then(data => {
                    console.log(data);
                });
        }
    }

    return (
        <main>
            <form className="register" onSubmit={(ev) => submitHandler(ev, data, user.accessToken, user._id)}>
                <h3 className="create-heading">
                    <i className="fas fa-plus-square" />
                    Create Publication
                </h3>
                <label className="label" htmlFor="title">
                    Title:
                </label>
                <input
                    className="inputField"
                    type="text"
                    id="title"
                    name="title"
                    value={data.title}
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
                    value={data.category}
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
                    value={data.content}
                    onChange={(ev) => changeHandler(ev)}
                />
                <button className="button">Create</button>
            </form>
        </main>
    );
}

export default Create;