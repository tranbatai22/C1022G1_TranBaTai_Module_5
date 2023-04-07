import './App.css';
import List from "./component/List";
import {BrowserRouter,NavLink, Link, Route, Routes} from "react-router-dom";
import Create from "./component/Create";
import React from "react";

function App() {
    return (
        <BrowserRouter>
       <Routes>
           <Route path='/' element={<List/>}/>
           <Route path='/create' element={<Create/>}/>
       </Routes>
        </BrowserRouter>
    );
}

export default App;
