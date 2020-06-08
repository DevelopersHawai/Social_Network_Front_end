import React, {Component} from 'react';
import {isAuthenticated} from '../auth'

// Make a request to the back-end to get the a user's information


export class Profile extends Component {
    constructor() {
        super()
        this.state = {
            user: "",
            redirectToSignin: false
        }
    }
componentDidMount() {
    console.log(
        "user id from route params:",
        this.props.match.params.userId)
}

    render() {
        return (
            <div className="container">
                <h2 className="mt-5 mb-5">
                Profile
        <p>Hello {isAuthenticated().user.name} </p>
        <p>Email:  {isAuthenticated().user.email} </p>
                </h2>
            </div>
        );
    }
}


export default Profile