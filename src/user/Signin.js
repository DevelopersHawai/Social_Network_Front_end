import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';




/*Controlled components all the html elements they have their own state  and get unique values */
class Signin extends Component { //Is the component a react function of scan like java?
    constructor() {
        super() //Think of the car and wheel example wheels on the car or we build many cars...
        this.state = { //This is where we check the factory
           
            email: "", //Their email we have
            password: "",  //Their unique identifyier that they only know
            error:"",  //value can be added to this user profile for support later on?
            redirectToReferer: false,  //turns to true after user is authenticated
            loading: false           
        };
    }

    handleChange = name => event => { //higher order function returns another function
        this.setState ({error: ""}); // used to clear the previous error
        this.setState({[name]: event.target.value}); //Using an array syntax, which
                // point it to start at name then have the value when it is used on email and password
                //this moment in time grab the next value if you look above from line 10
                 // this.state {name, email, password}: but start with name
                //name 
                //email
                //password
    //they should match event.target.value like: this.state.[value]
    //onChange={this.handleChange("name"),("email"),("password")
    // That is how you set a state.
};
  //jason web token 'jwt' 
authenticate = (jwt, next) => {
    // Make sure a window is ready as these things take time
    if(typeof window !== "undefined") {
        localStorage.setItem("jwt", JSON.stringify(jwt))
        next(); // callback
    };
 };
 

clickSubmit = event => {
    event.preventDefault();
    this.setState({loading: true});
    const { email, password } = this.state;
    const user = {
        email,
        password
    };
    //great for testing the data collector
     console.log(user); 
    this.signin(user).then(data => {
        //if error we capture the error and it is displayed
        if(data.error)  {
            this.setState({ error: data.error, loading: false});  
        //stored as a value in the error err field
        // otherwise 
        //Pass the json web token to method and then it be on local storage 
        //authenticate the user and redirect
        }
        else  
        {  
            //to disable whitespace error
            //eslint-disable-next-line                  
            this .authenticate(data, () => { 
            this.setState({redirectToReferer: true})   
            });
        }
    });   
};
    signin = user => {
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

    signinForm = ( email, password) => (
        <form>
                        {/*Within this comment block was a div
                        
  In that div was the name field of the form                      
                        
                        */}
                         {/* Next do above; 2X  (email and password) */}
               
        <div className="form-group"> {/* Create the from group "whatever" */}
                        <label className="text-muted">
            Email</label> 
                        <input 
                        onChange={this.handleChange("email")} 
                        type="email"
                        className="form-control"
                        value={email}/* we destructured the syntax (this.state) the state and place its value into email */
                        />
        </div>
        <div className="form-group">
                        <label className="text-muted">
            Password</label>
                        <input 
                        onChange={this.handleChange("password")}
                        /* masks the password */
                        type="password" 
                        className="form-control"
                        value={password}/* we destructured the syntax (this.state) then we grab the state and place its value into email */
                        />
        </div>
                    <button onClick={this.clickSubmit} //the method to ...
                    className="btn btn-raised btn-primary"> Submit </button>   
                             </form>

    )
 
    render() {
        // eslint-disable-next-line
        const { email, password, error, redirectToReferer, loading} = this.state  //destructure is a Big O
        
        if(redirectToReferer) {
            return <Redirect to="/" />
        }
        return (
            <div className="container">

                <h2 className="mt-5 mb-5"> <i>Sign-In</i> </h2>  {/*// margin of 5 bottom of 5*/}
                
{/* The error message will be above the form - the light blue stripe*/}
 {/*condiitonal value is set within the style tag to appear only on error */}
            <div className="alert alert-danger" style={{display: error ? "" :"none"}}> 
           
                {error} {/*this is destructured and collects the state value */}
            </div>
            {loading ? <div className="jumbotron text-center">
                        <h2>...Loading... </h2> {/* This is where animation can go for loading*/}
                        </div> : ""}
                {this.signinForm( email, password)}
                                          </div>
        );
    }
}

export default Signin;

//More than likely we will add more fields and setup third party authentications sign-ups like 
//google
//facebook
// blah blah blah