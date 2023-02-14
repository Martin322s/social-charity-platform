import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/userContext";
import { deletePublication } from "../../services/publicationService";

const Delete = () => {
    const { publicationId } = useParams();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    let token = user.accessToken;

    deletePublication(publicationId, token)
        .then(() => {
            navigate(`/publications`);
            alert('Successfully deleted!');
        });
    
}

export default Delete;