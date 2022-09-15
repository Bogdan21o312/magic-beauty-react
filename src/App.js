import React from "react";
import "./assets/style/App.scss"
import Header from "./components/Layout/Header/Header";
import Home from "./pages/Home";


function App() {
    return (
        <div className="wrapper">
            <Home/>
        </div>
    );
}

export default App;
