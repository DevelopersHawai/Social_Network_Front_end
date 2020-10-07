export const read = (userId, token) => {
    //we get the user information once we make the request
    return fetch(`${process.env.REACT_APP_API_URL}/user/${userId}`, {
        method: "GET",
        //we send the headers because if we don't
        // the information will not be accessible
        //authentication will come from the local storage isAuthenticated 
        headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`
    
        }
    })
    .then(response => {
        return response.json();
    })
        .catch(err => console.log(err));
        };

    export const remove = (userId, token) => {
            //usamos este metodo para borrar la informacion del usuario
            return fetch(`${process.env.REACT_APP_API_URL}/user/${userId}`, {
                method: "DELETE",
                //we send the headers because if we don't
                // the information will not be accessible
                //authentication will come from the local storage isAuthenticated 
                headers: {
                    Accept: "application/json",
                    "Content-type": "application/json",
                    Authorization: `Bearer ${token}`
            
                }
            })
            .then(response => {
                return response.json();
            })
                .catch(err => console.log(err));
                };

        export const list = () => {
    return fetch(`${process.env.REACT_APP_API_URL}/users`, {   
        method: "GET",
})
    .then(response => {
        return response.json();
    })
        .catch(err => console.log(err));
        };