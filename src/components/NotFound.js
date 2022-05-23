import React from "react";

import NotFoundImg from './../images/notFound.png'
import {NavLink} from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <div><img src={NotFoundImg} alt="Not Found" width='100%' height='700px'/></div>
            <div className='text-center'><NavLink to='/'>Go to home page</NavLink></div>
        </>
    )
}

export default NotFound;