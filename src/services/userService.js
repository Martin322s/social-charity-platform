const baseUrl = "http://localhost:3030/users";

export const registerUser = (userData) => {
    return fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(res => res.json());
}

export const logoutUser = (token) => {
    return fetch(`${baseUrl}/logout`, {
        method: "GET",
        headers: {
            'X-Authorization': token
        }
    });
}