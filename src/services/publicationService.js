const baseUrl = "http://localhost:3030/publications";

export const createPublication = (userData, token) => {
    return fetch(`${baseUrl}/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(userData)
    })
        .then(res => res.json());
}

export const getMyPublications = (token, ownerId) => {
    return fetch(`${baseUrl}/profile/${ownerId}`, {
        method: 'GET',
        headers: {
            'X-Authorization': token
        }
    })
        .then(res => res.json());
}

export const getAll = () => fetch(`${baseUrl}/all`).then(res => res.json());