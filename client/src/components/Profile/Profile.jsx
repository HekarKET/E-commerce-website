import React from 'react'
import { Redirect } from 'react-router'

function Profile({isAuth}) {
    if(!isAuth){
        return <Redirect to='/login'/>
    }
    else{
        return (
            <div>
                This is profile
            </div>
        )
    }
    
}

export default Profile
