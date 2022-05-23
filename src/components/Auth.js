import React from "react";

import AuthTab from "./Auth/Auth";
import {isPersistedState} from "../helpers";

const Auth = () => {
    const authState = isPersistedState('auth')
    if (authState) {
        sessionStorage.setItem('auth', '');
    }

    return (
        <AuthTab/>
    )
}

export default Auth;