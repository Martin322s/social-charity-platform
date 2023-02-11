import "./styles/dashboard.css";

const DashboardItem = ({ publicationData }) => {
    return (
        <article className="publication">
            <h1>{publicationData.title}</h1>
            <span className="content-cat ">{publicationData.category}</span>
            <p className="content">{publicationData.content}</p>
            <div className="activities">
                <button className="btn like-btn">Details</button>
            </div>
        </article>
    );
}

export default DashboardItem;