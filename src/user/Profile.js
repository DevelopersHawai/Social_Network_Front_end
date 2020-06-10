import React, {Component} from 'react';
import {isAuthenticated} from '../auth'
import { Redirect } from 'react-router-dom';

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
    const userId = this.props.match.params.userId
    //we get the user information once we make the request
    fetch(`${process.env.REACT_APP_API_URL}/user/${userId}`, {
        method: "GET",
        //we send the headers because if we don't
        // the information will not be accessible
        //authentication will come from the local storage isAuthenticated 
        headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            Authorization: `Bearer ${isAuthenticated().token}`

        }
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        if(data.error) {
            this.setState({redirectToSignin:true});
        } else {
            this.setState({user: data});
        }
    });
}

    render() {

        const redirectToSignin= this.state.redirectToSignin
            if(redirectToSignin) return <Redirect to="/signin" />
        return (
            <div className="container">
                <h2 className="mt-5 mb-5">
                Profile
        <p>Hello {isAuthenticated().user.name} </p>
        <p>Email:  {isAuthenticated().user.email} </p>
        <p>{`Joined [Site name] ${new Date(this.state.user.created)
            .toDateString()}`}</p>
                </h2>
            </div>
        );
    }
}


export default Profile