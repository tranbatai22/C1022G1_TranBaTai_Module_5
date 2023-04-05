import logo from './logo.svg';
import './App.css';
import {NavLink} from "react-router-dom";
import React from "react";
import {Route, Routes} from "react-router";
import {ToastContainer} from 'react-toastify' ;
import ListTodo from "./component/ListTodo";
import CreateTodo from "./component/CreateTodo";

function App() {
    return (
        <>
            <NavLink to='/'>Todo List</NavLink>
            <NavLink to='/create' className='ms-3'>Create</NavLink>
            <Routes>
                <Route path='/' element={<ListTodo/>} />
                <Route path='/create' element={<CreateTodo/>} />
            </Routes>
            <ToastContainer />
        </>
    );
}

export default App;
