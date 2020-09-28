import React, {Component} from 'react';
import {list} from './apiUser';
class Users extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        };
     }

    componentDidMount() {
        list().then(data => {
            if (data.error) {
            console.log(data.error)
            } else {
                this.setState({ users: data })
            }
            
        });
    } 

renderUsers = (users) => (
    <div >
    {users.map((user, i) => (
       <div className="card" style={{width: '18rem'}} key={i}>
       <img className="card-img-top" src="" alt="Card image cap" />
       <div className="card-body">
         <h5 className="card-title">Card title</h5>
         <p className="card-text">Some quick example text to build on the card title
                                  and make up the bulk of the card's content.
                                  </p>
         <a href="#" className="btn btn-primary">
             Go somewhere
             </a>
       </div>
     </div>
    ))} 
   
 </div>
);


    render() {
        const {users} = this.state
        return (
            <div className="container">
                <h2 className="mt-5 mb-5">Users</h2>
               {this.renderUsers(users)}
            </div>
        
        );
    }
}

export default Users;
//see main router for reference