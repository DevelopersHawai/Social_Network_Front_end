import React from "react";
import { Link, withRouter } from "react-router-dom";
import {signout, isAuthenticated} from  '../auth'



const isActive = (history, path) => {
      if(history.location.pathname === path) return {color: "#1092F2"}
      else return {color: "#999999"}
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
            <> {/* yes this works in react because of react dot fragments */}
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
         </>
      )}

            {isAuthenticated() && (
              /* SignOut page  is hidden until authenticated*/         
            <>
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
            <li className="nav-item">
                <a
                className="nav-link" 
                
             
                > 
            {`${isAuthenticated().user.name}'s profile`}  
                </a>
            </li>
                  
            </>

      )}
      </ul>
</div>
);
export default withRouter(Menu);  // the benefit of a higher order component  props

//with props we get the history of an object
