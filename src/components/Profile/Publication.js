const Publication = ({ publicData }) => {
    return (
        <article className="publication">
            <h1>{publicData.title}</h1>
            <span className="content-cat ">{publicData.category}</span>
            <p className="content">{publicData.content}</p>
            <div className="activities">
                <button className="like-btn">Like</button>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
            </div>
        </article>
    );
}

export default Publication;