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
 
 export const signout = (next) => {
    if(typeof window !== "undefined") localStorage.removeItem("jwt") //delete the local storage contents of the jwt &
                next(); // then make sure we log them out of our backend api
    return fetch("http://localhost:8080/signout", {
    method: "GET"
})
    .then( response  => {
          console.log('signout', response)
          return response.json()
    })
    .catch(err => console.log(err))
}

export const isAuthenticated = () => {
    if(typeof window == "undefined") {
          return false
    }
    if(localStorage.getItem("jwt")) {
          return JSON.parse(localStorage.getItem("jwt"))
    } else {
          return false
    }
};

