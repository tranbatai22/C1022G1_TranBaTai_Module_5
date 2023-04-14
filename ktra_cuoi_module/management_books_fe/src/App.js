import './App.css';
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ListBook from "./component/ListBook";
import CreateBook from "./component/CreateBook";
import UpdateBook from "./component/UpdateBook";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ListBook/>}/>
                <Route path='/create' element={<CreateBook/>}/>
                <Route path='/edit/:id' element={<UpdateBook/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
