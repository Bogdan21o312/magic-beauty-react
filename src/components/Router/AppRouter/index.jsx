import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import Home from "../../../pages/Home";
import PermanentMakeup from "../../../pages/PermanentMakeup";
import Manicure from "../../../pages/Manicure";
import Eyelashes from "../../../pages/Eyelashes";
import Eyebrows from "../../../pages/Eyebrows";
import Sugaring from "../../../pages/Sugaring";
import Pedicure from "../../../pages/Pedicure";
import Error from "../../../pages/Error";
import About from "../../../pages/About";

const Index = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/about"} element={<About/>}/>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/permanent-makeup"} element={<PermanentMakeup/>}/>
            <Route path={"/manicure"} element={<Manicure/>}/>
            <Route path={"/eyelashes"} element={<Eyelashes/>}/>
            <Route path={"/eyebrows"} element={<Eyebrows/>}/>
            <Route path={"/sugaring"} element={<Sugaring/>}/>
            <Route path={"/pedicure"} element={<Pedicure/>}/>
            <Route path="/error" element={<Error/>}/>
            <Route
                path="*"
                element={<Navigate to="/error" replace/>}
            />
        </Routes>
    );
};

export default Index;