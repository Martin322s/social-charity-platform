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
export const getOne = (id) => fetch(`${baseUrl}/${id}`).then(res => res.json());

export const donate = (publicId, sum, token, userId) => {
    return fetch(`${baseUrl}/donations/${publicId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({ sum, userId })
    })
        .then(res => res.json());
}

export const getAuthor = (userId) => fetch(`${baseUrl}/author/${userId}`).then(res => res.json());

export const editPublication = (publicationId, token, data) => {
    return fetch(`${baseUrl}/edit/${publicationId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json());
}