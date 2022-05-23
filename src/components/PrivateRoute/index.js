import React, {useContext} from "react";
import AuthContext from "../../context/AuthProvider";
import {Navigate} from "react-router-dom";
import {isPersistedState} from "../../helpers";

const PrivateRoute = ({children}) => {
    const {auth} = useContext(AuthContext)
    const authState = isPersistedState('auth')
    if (!authState) {
        sessionStorage.setItem('auth', JSON.stringify(auth))
    }


    return (
        authState.token ? children : <Navigate to='/auth'></Navigate>
    );
};

export default PrivateRoute;