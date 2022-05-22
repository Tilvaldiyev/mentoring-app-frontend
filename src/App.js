import React from 'react';
import {GlobalStyle} from "./GlobalStyle";

// Components
import Header from "./components/Header";
import Tab from "./components/Tab";
import Home from "./components/Home";
import HomeFilter from "./components/HomeFilter";
import PopularArticles from "./components/PopularArticles";
import AuthTab from "./components/Auth/Auth";

function App() {
    return (
        <div className="App">
            <GlobalStyle/>
                <Header username='Alisher'/>
            <Tab/>
            <Home/>
            {/*<AuthTab></AuthTab>*/}
        </div>
    );
}

export default App;