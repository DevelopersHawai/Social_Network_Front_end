import React from "react";
import { Link, withRouter } from "react-router-dom";
import {signout, isAuthenticated} from  '../auth'


//compares with the path we give
//if matches then we see the active class
// This fixes the user profile link not lighting up
const isActive = (history, path) => {
      if(history.location.pathname === path) return {color: "#1092F2"}
      else return {color: "#999999"}
};

// The tabs and style come from boot strap material site
//bootsrap material designß
const Menu = ({history}) => ( //destructure here of props
                              <div> 
          
    
    <ul className="nav nav-tabs bg-priimary.">  {/*you can say bg-primary for green mispelled purposely*/} 
            
 {/* Support page */}

            <li className="nav-item">
                <Link 
                className="nav-link" 
                style={isActive(history, "/about")}  
                to="/about"> 
            Support 
                </Link>
            </li>
{/* Users Page */}
            <li className="nav-item">
                    <Link 
                    className="nav-link" 
                    style={isActive(history, "/Users")} to="/users"> 
           Users 
                </Link>
            </li>





            
{/* Home page */}         
            
            
            <li 
                className="nav-item">
                    <Link 
                    className="nav-link" 
                    style={isActive(history, "/")} to="/"> 
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
                    <div 
                    className="nav-link" 
                    style={
                    (isActive(history, "/signout"), 
                    {curser: "pointer", color: "#999999"}) 
               }
               onClick={() => signout(() => history.push("/signout"))} 
            > 
               Sign-Out
                    </div>  
                </li>
            <li className="nav-item"> 
                <Link to={`/user/${isAuthenticated().user._id}`}
            
            //changes the color (style) of the profile link
                  style={
                    isActive
                                (history,
                         `/user/${isAuthenticated().user._id}'}`
                                )
                        }

                className="nav-link" 
                > 


                {/*using back ticks so we can use template strings */}
                {/* this shows the user profile link */}
                {`${isAuthenticated().user.name}'s profile `}   
                
                </Link>
           </li>
          </>
      )}
      </ul>
</div>
);
export default withRouter(Menu);  // the benefit of a higher order component  props

//with props we get the history of an object
