import React, { Component } from 'react';




/*Controlled components all the html elements they have their own state  and get unique values */
class Signup extends Component { //Is the component a react function of scan like java?
    constructor() {
        super() //Think of the car and wheel example wheels on the car or we build many cars...
        this.state = { //This is where we make the factory
            name: "", //The person we build
            email: "", //Their email we have
            password: "",  //Their unique identifyier that they only know
            error:""  //value can be added to this user profile for support later on?
        }
    }
handleChange = (name) => (event) => { //higher order function returns another function
    this.setState({[name]: event.target.value}); //Using an array syntax, it will
    // have the value when it is used on email and password
    //this moment in time grab the next value if you look above from line 10
    // this.state {name, email, password}: but start with name
    //name 
    //email
    //password
    //they should match event.target.value like: //check line 10-14
    //onChange={this.handleChange("name"),("email"),("password")
    // That is how you set a state.
}

    render() {
        const {name, email, password} = this.state  //destructure is a Big O 
        return (
            <div className="container">

                <h2 className="mt-5 mb-5"> Signup </h2>  {/*// margin of 5 bottom of 5*/}
                
                              <form>
        <div className="form-group"> {/* This is where the UI is able to restrict input */}
                        <label className="text-muted">
            Name</label> {/*In invisible string but greyed out */}
                        <input 
                        /*  here is where "handleChange" takes in the value of name, this allows:
                    the ability using "onChange" to capture partial information (wink) */
                            onChange={this.handleChange("name")} 
                            type="text" 
                            className="form-control" 
                            value={name} /* we grab the state and place its value into name */
                        />
        </div> 
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
                    <button className="btn btn-raised btn-primary"> Submit </button>   
                             </form>
            </div>
        );
    }
}

export default Signup;