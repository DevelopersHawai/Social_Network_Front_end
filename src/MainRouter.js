import React from 'react';
import { Route, Switch } from 'react-router-dom';
import about from './core/About';
import Home from './core/Home';
import Menu from './core/Menu';
// import Footer from './core/Footer';
import Signup from './user/Signup';
import Signin from './user/Signin';
import Profile from './user/Profile';
import SignedOut from './user/YouSignedOut';
  

const MainRouter = () => (
    <div>
        <Menu />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={about}/>
            <Route exact path="/signup" component={Signup } />
            <Route exact path="/signin" component={Signin} /> 
            <Route exact path="/signout" component={SignedOut} />
            <Route exact path="/Profile" component={Profile} /> 
        </Switch>
       {/* <Footer />  */}
    </div>
);
export default MainRouter;