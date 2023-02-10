import "./styles/profile.css";

const Profile = () => {
    return (
        <main>
            <section className="profile">
                <header className="section-navigation">
                    <h2>Welcome to WINK - Charity Platform</h2>
                    <ul className="data">
                        <li>
                            <i className="fas fa-user-circle" />
                            User: Full name
                        </li>
                        <li>
                            <i className="fas fa-envelope" />
                            Email: profile@abv.bg
                        </li>
                    </ul>
                    <h2>Created publications:</h2>
                </header>
                <section className="publications">
                    <article className="publication">
                        <h1>Title 1</h1>
                        <span className="content-cat ">Category</span>
                        <p className="content">Content</p>
                        <div className="activities">
                            <button className="like-btn">Like</button>
                            <button className="edit-btn">Edit</button>
                            <button className="delete-btn">Delete</button>
                        </div>
                    </article>
                    <article className="publication">
                        <h1>Title 2</h1>
                        <span className="content-cat ">Category</span>
                        <p className="content">Content</p>
                        <div className="activities">
                            <button className="like-btn">Like</button>
                            <button className="edit-btn">Edit</button>
                            <button className="delete-btn">Delete</button>
                        </div>
                    </article>
                    <article className="publication">
                        <h1>Title 3</h1>
                        <span className="content-cat ">Category</span>
                        <p className="content">Content</p>
                        <div className="activities">
                            <button className="like-btn">Like</button>
                            <button className="edit-btn">Edit</button>
                            <button className="delete-btn">Delete</button>
                        </div>
                    </article>
                    <article className="publication">
                        <h1>Title 4</h1>
                        <span className="content-cat ">Category</span>
                        <p className="content">Content</p>
                        <div className="activities">
                            <button className="like-btn">Like</button>
                            <button className="edit-btn">Edit</button>
                            <button className="delete-btn">Delete</button>
                        </div>
                    </article>
                </section>
            </section>
        </main>
    );
}

export default Profile;