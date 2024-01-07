import React from "react";
import {useDispatch} from 'react-redux'
import auth from '../../appwrite/auth.js'
function LogoutBtn(){
    const dispatch = useDispatch();
    const logoutHandler = () =>{
        auth.logout().then(()=>{
            dispatch(logout())
        })
    }

    return(
        <button
        className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
        onClick={logoutHandler}
        >Log out</button>
    )
}

export default LogoutBtn;