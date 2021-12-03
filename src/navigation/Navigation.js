import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    
  } from "react-router-dom";
import Footer from '../commonComponents/footer/Footer'
import Header from '../commonComponents/header/Header'
import Login from '../modules/auth/login/Login'
import Signup from '../modules/auth/signup/Signup'
import Home from '../modules/home/Home'
import LandingPage from '../modules/landingPage/LandingPage'
import Profile from '../profile/Profile';
import PrivateRoute from './PrivateRouting';
import PublicRoute from './PublicRouting';
import { useSelector } from 'react-redux';

export default function Navigation() {
    const authState = useSelector(state => state.AuthReducer.isUserLoggedIn)
 
    return (

        <div>
           <Router>
<Header/>
<Switch>
<Route path='/signup'>

<Signup/>

    </Route>

    {/* private route */}

<PrivateRoute path='/home'  auth={authState}>
<Home/>
    </PrivateRoute>
    
    <PrivateRoute path='/profile'  auth={authState}>
<Profile/>
    </PrivateRoute>
{/* public route */}
<PublicRoute path= '/login' auth={authState}>
    <Login/>
</PublicRoute>

<Route path= '/'>
    <LandingPage/>
</Route>







</Switch>
<Footer/>
               </Router> 
        </div>
    )
}
