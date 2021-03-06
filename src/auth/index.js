export const signup = user => {
    
    return fetch(`${process.env.REACT_APP_API_URL}/signup`, {  //making a request to the backend
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
    return fetch(`${process.env.REACT_APP_API_URL}/signin`, {  //making a request to the backend
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

export const  authenticate = (jwt, next) => { //jason web token 'jwt' 
    // Make sure a window is ready as these things take time
    if(typeof window !== "undefined") {
        localStorage.setItem("jwt", JSON.stringify(jwt))
        next(); // callback
    };
 };
 
 //Signout is below 
 export const signout = (next) => {
    if(typeof window !== "undefined") localStorage.removeItem("jwt") //delete the local storage contents of the jwt &
                next(); // then make sure we log them out of our backend api
    return fetch(`${process.env.REACT_APP_API_URL}/signout`, {
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

