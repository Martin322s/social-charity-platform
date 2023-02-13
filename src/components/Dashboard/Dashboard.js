import { useEffect, useState } from "react";
import { getAll } from "../../services/publicationService";
import DashboardItem from "./DashboardItem";
import "./styles/dashboard.css";

const Dashboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getAll()
            .then(data => {
                setData(data);
            });
    }, []);

    return (
        <main>
            <section className="profile">
                <h2>All publications:</h2>
                <section className="publications">
                    {data.length > 0 ?
                        data.map(publication =>
                            <DashboardItem
                                key={publication._id}
                                publicationData={publication}
                            />
                        )
                    : <h3>There are no publications yet.</h3>
                    }
                </section>
            </section>
        </main>
    );
}

export default Dashboard;