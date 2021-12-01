import React from 'react'
import { Redirect, Route } from 'react-router'

export default function PrivateRouting({children , auth ,...rest}) {
    return (
        <div>
            <Route {...rest} render={()=> auth? children : <Redirect to="/login"/>}/>
        </div>
    )
}
