import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AllFood from "./pages/allFood.jsx";
import CreateFood from "./pages/CreateFood.jsx";
import UpdatePage from "./pages/UpdatePage.jsx";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AllFood/>}/>
                <Route path="/create" element={<CreateFood/>}/>
                <Route path="/update/:id" element={<UpdatePage/>}/>
            </Routes>
        </BrowserRouter>

    );
};

export default App;