import "./styles/details.css";

const Details = () => {
    return (
        <main>
            <section className="details">
                <h3 id="details__heading">Title</h3>
                <h3 className="details__category">Category</h3>
                <p className="details__content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate et
                    necessitatibus saepe ducimus ratione sit vero magnam nostrum, ex modi
                    qui inventore sequi ipsum nemo, mollitia aspernatur, impedit sed rerum
                    quasi voluptatum veniam! Culpa fuga ratione modi consectetur repellat
                    aspernatur quod. Autem ipsa, at illo pariatur quo esse voluptatem velit?
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