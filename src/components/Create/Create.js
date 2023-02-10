import "./styles/create.css";

const Create = () => {
    return (
        <main>
            <form className="register">
                <h3>
                    <i className="fas fa-plus-square" />
                    Create Publication
                </h3>
                <label className="label" htmlFor="title">
                    Title:
                </label>
                <input className="inputField" type="text" id="title" name="title" />
                <label className="label" htmlFor="category">
                    Category:
                </label>
                <input className="inputField" type="text" id="category" name="category" />
                <label className="label" htmlFor="content">
                    Content:
                </label>
                <textarea
                    name="content"
                    id="content"
                    cols={40}
                    rows={10}
                    defaultValue={""}
                />
                <button className="button">Create</button>
            </form>
        </main>
    );
}

export default Create;