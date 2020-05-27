import React from "react";
import { Link } from "react-router-dom";


// The tabs and style come from boot strap material site
//bootsrap material designß
const Menu = () => (
                              <div> 

    <ul className="nav nav-tabs bg-...color.">
            <li className="nav-item">
                  <Link 
                  className="nav-link" to="/"> 
            Home 
                  </Link>
       </li>
            <li className="nav-item">
                  <Link 
                  className="nav-link" to="/signup">  
            Sign-Up  
                  </Link>
        </li>
          <li className="nav-item">
                <Link 
                className="nav-link" to="/signin"> 
            Sign-In  
                </Link>
            </li>
            
      </ul>
                            </div>


);


export default Menu; 
