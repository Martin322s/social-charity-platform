import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/userContext";
import { getMyPublications } from "../../services/publicationService";
import Publication from "./Publication";
import "./styles/profile.css";

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        getMyPublications(user.accessToken, user._id)
            .then(myData => {
                setData(myData);
            });
    // eslint-disable-next-line
    }, []);

    return (
        <main>
            <section className="profile">
                <header className="section-navigation">
                    <h2>Welcome to WINK - Charity Platform</h2>
                    <ul className="data">
                        <li>
                            <i className="fas fa-user-circle" />
                            User: {`${user.firstName} ${user.lastName}`}
                        </li>
                        <li>
                            <i className="fas fa-envelope" />
                            Email: {`${user.email}`}
                        </li>
                    </ul>
                    <h2>Created publications:</h2>
                </header>
                <section className="publications">
                    {data.length > 0 ?
                        data.map(publication => 
                            <Publication key={publication._id} publicData={publication} />)
                        : <h3>There are no publications yet.</h3>
                    }

                </section>
            </section>
        </main>
    );
}

export default Profile;