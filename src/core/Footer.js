import React from "react";
import { Link, withRouter } from "react-router-dom";

const isActive = (history, path) => {
      if(history.location.pathname === path) return {color: "#1092F2"}
      else return {color: "#999999"}
};


export const signout = (next) => {
      if(typeof window !== "undefined") localStorage.removeItem("jwt") //delete the local storage contents of the jwt &
                  next(); // then make sure we log them out of our backend api
      return fetch("http://localhost:8080/signout", {
      method: "GET"
})
      .then( response  => {
            console.log('signout', response)
            return response.json()
      })
      .catch(err => console.log(err))
}

// The tabs and style come from boot strap material site
//bootsrap material designß
const Menu = ({history}) => ( //destructure here of props
                              <div> 
          
    
    <ul className="nav nav-tabs bg-...color.">  {/*you can say bg-primary for green*/} 
            
 {/* About me page */}

    <li className="nav-item">
                <Link 
                className="nav-link" 
                style={isActive(history, "/about")}  
                to="/about"> 
            Press Release 
                </Link>
            </li>
            
    {/* Home page */}         
            
            
            <li className="nav-item">
                  <Link 
                  className="nav-link" style={isActive(history, "/")} to="/"> 
            IPO
                  </Link>
       </li>

   {/* Sign-up page */} 

            <li className="nav-item">
                  <Link 
                  className="nav-link" style={isActive(history, "/signup")} to="/signup">  
           Whats New  
                  </Link>
        </li>

 {/* Signin page */} 


          <li className="nav-item">
                <Link 
                className="nav-link" style={isActive(history, "/signin")}  to="/signin"> 
            Investor Publications  
                </Link>
            </li>

  {/*SignOut page*/}          
            <li className="nav-item">
                <>
                className="nav-link" 
                style={isActive(history, "/signout")}  
                to="/signout"
                onClick={() => signout(() => history.push('/signout'))}
                > 
            Careers  
                </>
            </li>
      </ul>
</div>
);
export default withRouter(Menu);  // the benefit of a higher order component  props

//with props we get the history of an object
