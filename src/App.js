import React from 'react';
import {GlobalStyle} from "./GlobalStyle";

// Routing
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Components
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Auth from "./components/Auth";
import PrivateRoute from "./components/PrivateRoute";

const App = () => (
    <Router>
        <Routes>
            <Route path='/' element={
                <PrivateRoute><Home/></PrivateRoute>
            }/>
            <Route path='/auth' element={<Auth/>}/>
            <Route path='/*' element={<NotFound/>}/>
        </Routes>
        <GlobalStyle/>
    </Router>
);

export default App;