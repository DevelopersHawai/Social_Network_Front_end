import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {isAuthenticated} from '../auth';
import {remove} from './apiUser';
import {signout} from '../auth';



 class DeleteUser extends Component {
     state = {
         redirect: false
     };

//tu puedes borrarlo este mensaje para la consola, pero no hay que hacerlo. 
//This method below only gives a console log output

      deleteAccount = () => {
         //  console.log("account deleted");
          const token = isAuthenticated().token;
          const userId = this.props.userId
          remove(userId,token)
          .then(data => {
              if(data.error) {
                  console.log(data.error);
              } else {
                  //signout user
                  signout(() => console.log("User is deleted"));
                  // redirect
                  this.setState({redirect:true});
              }
          })
      };

     deleteConfirmed = ()  => {
       let answer = window.confirm("Are you sure you want to delete your account?")
       if(answer) {
           this.deleteAccount()
       } 
     }
    render () {
        if(this.state.redirect){
            return <Redirect to="/" />;  //put the location to deleted user page
        }
        return (
    
            
            //le permite al usuario confirmar, to help you have a prompt in case you accidentally
            //forget and click delete

        <button
        onClick={this.deleteConfirmed} className="btn btn-raised btn-danger"
        >
        Delete Profile
        </button>

    
        );
    }
}

export default DeleteUser