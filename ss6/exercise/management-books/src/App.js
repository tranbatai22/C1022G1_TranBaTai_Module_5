import './App.css';
import List from "./component/List";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Create from "./component/Create";
import React from "react";
import Update from "./component/Update";

function App() {
    return (
        <BrowserRouter>
       <Routes>
           <Route path='/' element={<List/>}/>
           <Route path='/create' element={<Create/>}/>
           <Route path='/update/:id' element={<Update/>}/>
       </Routes>
        </BrowserRouter>
    );
}

export default App;
