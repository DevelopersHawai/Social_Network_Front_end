import React, {Component} from 'react';
import {isAuthenticated} from '../auth'
import { Redirect } from 'react-router-dom';
import {read} from "./apiUser";

// Make a request to the back-end to get the a user's information


export class Profile extends Component {
    constructor() {
        super()
        this.state = {
            user: "",
            redirectToSignin: false
        }
    }




    init = (userId) => {
        const token = isAuthenticated().token;
        //init method makes the backend request
        read(userId, token).then(data => {
            //without using the "this keyword" you will get an error as it is not defined
    if(data.error) {
        this.setState({redirectToSignin:true});
    } else {
        this.setState({user: data});
    }
});

    };

componentDidMount() {
    const userId = this.props.match.params.userId
    this.init(userId);
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