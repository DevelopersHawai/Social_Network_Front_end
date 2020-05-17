import React, { Component } from 'react';

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
        return (
            <div className="container">

                <h2 className="mt-5 mb-5"> Signup </h2>
                <form>
                    <div className="form-group"> {/* This is where the UI is able to restrict input */}
                        <label className="text-muted">Name</label> {/*In invisible string but greyed out */}
                        <input onChange={this.handleChange("name")} type="text" className="form-control"/>
                    </div> {/* Ahhh here is where "handleChange" takes in the value of name, this allows:
                    the ability using "onChange" to capture partial information (wink) */}
                    <div className="form-group"> {/* Create the from group "whatever" */}
                        <label className="text-muted">Email</label> {/* make it so the user can see where to put 
                        in their
                        infomration */}

                        {/* Then we do above 2 more times so that we have email and password */}
                        <input onChange={this.handleChange("email")} type="text"className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label className="text-muted">Password</label>
                        <input onChange={this.handleChange("password")}type="password" className="form-control"/>
                    </div>
                    <button className="btn btn-raised btn-primary"> Submit </button>   
                </form>
            </div>
        );
    }
}

export default Signup;