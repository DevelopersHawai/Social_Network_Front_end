import React from 'react';
import { Route, Switch } from 'react-router-dom';
import about from './core/About';
import Home from './core/Home';
import Menu from './core/Menu';
// import Footer from './core/Footer';
import Signup from './user/Signup';
import Signin from './user/Signin';
import SignedOut from './user/YouSignedOut';
  

const MainRouter = () => (
    <div>
        <Menu />
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/about" component={about}></Route>
            <Route exact path="/signup" component={Signup }></Route>
            <Route exact path="/signin" component={Signin}></Route>   
            <Route exact path="/signout" component={SignedOut}></Route> 
        </Switch>
       {/* <Footer />  */}
    </div>
);
export default MainRouter;