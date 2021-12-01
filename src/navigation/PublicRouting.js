import React from 'react'
import { Redirect, Route } from 'react-router'

export default function PublicRouing({children , auth ,...rest}) {
    return (
        <div>
            <Route {...rest} render={()=> auth? <Redirect to="/home"/> : children}/>
        </div>
    )
}
