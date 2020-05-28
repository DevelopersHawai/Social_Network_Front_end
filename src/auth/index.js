export const signup = user => {
    return fetch("http://localhost:8080/signup", {  //making a request to the backend
    method: "POST", 
    headers: { //good practive to list headers to avoid post errors
        Accept: "application/json", 
        "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
})
.then(response => {
    return response.json()
})
.catch(err => console.log(err)
)};

export const  signin = user => {
    return fetch("http://localhost:8080/signin", {  //making a request to the backend
    method: "POST", 
    headers: { //good practive to list headers to avoid collections errors
        Accept: "application/json", 
        "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
})
.then(response => {
    return response.json()
})
.catch(err => console.log(err)
)};

export const  //jason web token 'jwt' 
authenticate = (jwt, next) => {
    // Make sure a window is ready as these things take time
    if(typeof window !== "undefined") {
        localStorage.setItem("jwt", JSON.stringify(jwt))
        next(); // callback
    };
 };
 