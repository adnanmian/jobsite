import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <Link to='/' style={{padding:10}}>LandingPage</Link>
            <Link to='/home'   style={{padding:10}}>Home</Link>
            <Link to='/login'  style={{padding:10}}>login</Link>
            <Link to='/signup'   style={{padding:10}}>signup</Link>
            <Link to='/profile'   style={{padding:10}}>profile</Link>



        </div>
    )
}
