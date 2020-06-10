import React, {Component} from 'react';
import {isAuthenticated} from '../auth'
import { Redirect, Link } from 'react-router-dom';
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

        const {redirectToSignin, user}= this.state;
            if(redirectToSignin) return <Redirect to="/signin" />
        return (
            //Create the container  object to hold into columns 
            <div className="container">
                <div className="row">
                <div className="col-md-6">
                <h2 className="mt-5 mb-5">
                Profile
                </h2>
        <p>Hello {isAuthenticated().user.name} </p>
            <p>
            Email:  {isAuthenticated().user.email} 
            </p>
            <p>
            {`Joined [Site name] ${new Date
        (user.created)
            .toDateString()}`}
            </p>    
                </div>
                {/* divide the container into columns left and right */}
              <div className="col-md-6">
                {isAuthenticated().user &&
                 isAuthenticated().user._id === user._id &&
                 (<div className="d-inline-block mt-5">
                     <Link 
                     className="btn btn-raised btn-sucess mr-5"
                     to={`/user/edit/${user._id}`}>
                     Edit Profile
                     </Link>

                    <button className="btn btn-raised btn-danger">
                    Delete Profile


                    </button>
                         
              </div>
 )}
                </div>
            </div>
            </div>
        );
    }
}


export default Profile