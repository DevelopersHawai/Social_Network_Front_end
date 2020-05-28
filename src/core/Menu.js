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

export const isAuthenticated = () => {
      if(typeof window == "undefined") {
            return false
      }
      if(localStorage.getItem("jwt")) {
            return JSON.parse(localStorage.getItem("jwt"))
      } else {
            return false
      }
};


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
            Contact-us 
                </Link>
            </li>
            
    {/* Home page */}         
            
            
            <li className="nav-item">
                  <Link 
                  className="nav-link" style={isActive(history, "/")} to="/"> 
            Home 
                  </Link>
       </li>

{/*The comment below is showing the signin and signout links if the */}
{/* User is not authenticated */}
      {!isAuthenticated() && (
            <div>
               {/* Sign-up page */} 

               <li className="nav-item">
               <Link 
               className="nav-link" style={isActive(history, "/signup")} to="/signup">  
         Sign-Up  
               </Link>
     </li>

{/* Signin page */} 


       <li className="nav-item">
             <Link 
             className="nav-link" style={isActive(history, "/signin")}  to="/signin"> 
         Sign-In  
             </Link>
         </li>
         </div>
      )}

            {isAuthenticated() && (
              /* SignOut page  is hidden until authenticated*/         
            <li className="nav-item">
                <a
                className="nav-link" 
                style={
                     (isActive(history, "/signout"), 
                {curser: "pointer", color: "#999999"}) 
               }
                onClick={() => signout(() => history.push("/signout"))}
                > 
            Sign-Out  
                </a>
            </li>
      )}
      </ul>
</div>
);
export default withRouter(Menu);  // the benefit of a higher order component  props

//with props we get the history of an object
