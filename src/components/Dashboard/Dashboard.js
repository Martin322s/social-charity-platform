import "./styles/dashboard.css";

const Dashboard = () => {
    return (
        <main>
            <section className="profile">
                <h2>All publications:</h2>
                <section className="publications">
                    <article className="publication">
                        <h1>Title 1</h1>
                        <span className="content-cat ">Category</span>
                        <p className="content">Content</p>
                        <div className="activities">
                            <button className="btn like-btn">Like</button>
                            <button className="btn edit-btn">Edit</button>
                            <button className="btn delete-btn">Delete</button>
                        </div>
                    </article>
                    <article className="publication">
                        <h1>Title 2</h1>
                        <span className="content-cat ">Category</span>
                        <p className="content">Content</p>
                        <div className="activities">
                            <button className="btn like-btn">Like</button>
                            <button className="btn edit-btn">Edit</button>
                            <button className="btn delete-btn">Delete</button>
                        </div>
                    </article>
                    <article className="publication">
                        <h1>Title 3</h1>
                        <span className="content-cat ">Category</span>
                        <p className="content">Content</p>
                        <div className="activities">
                            <button className="btn like-btn">Like</button>
                            <button className="btn edit-btn">Edit</button>
                            <button className="btn delete-btn">Delete</button>
                        </div>
                    </article>
                    <article className="publication">
                        <h1>Title 4</h1>
                        <span className="content-cat ">Category</span>
                        <p className="content">Content</p>
                        <div className="activities">
                            <button className="btn like-btn">Like</button>
                            <button className="btn edit-btn">Edit</button>
                            <button className="btn delete-btn">Delete</button>
                        </div>
                    </article>
                </section>
            </section>
        </main>
    );
}

export default Dashboard;