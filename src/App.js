import React from 'react';
import {GlobalStyle} from "./GlobalStyle";

// Components
import Header from "./components/Header";
import Tab from "./components/Tab";
import Home from "./components/Home";
import HomeFilter from "./components/HomeFilter";
import PopularArticles from "./components/PopularArticles";

function App() {
    return (
        <div className="App">
            <Header/>
            <Tab/>
            <Home/>
            <GlobalStyle/>
        </div>
    );
}

export default App;