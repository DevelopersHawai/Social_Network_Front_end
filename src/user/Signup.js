import React, { Component } from 'react';




/*Controlled components all the html elements they have their own state  and get unique values */
class Signup extends Component { //Is the component a react function of scan like java?
    constructor() {
        super() //Think of the car and wheel example wheels on the car or we build many cars...
        this.state = { //This is where we make the factory
            name: "", //The person we build
            email: "", //Their email we have
            password: "",  //Their unique identifyier that they only know
            error:""  //Not sure why we have this one?
        }
    }
handleChange = (name) => (event) => { //higher super function asking for the event values
    this.setState({[name]: event.target.value}); //this moment in time grab name and all its values
}

    render() {
        const {name, email, password} = this.state  //destructure is a Big O
        return (
            <div className="container">

                <h2 className="mt-5 mb-5"> Signup </h2>
                
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
                            value={this.state.name} /* we grab the state and place its value into name */
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