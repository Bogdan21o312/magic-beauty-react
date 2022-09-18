import React from "react";
import "./assets/style/App.scss"
import AppRouter from "./components/Router/AppRouter";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
