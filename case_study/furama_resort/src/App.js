import './App.css';
import {Routes, Route, Link, NavLink, BrowserRouter} from "react-router-dom";
import React from "react";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";
import CustomerList from "./component/customer/CustomerList";
import Home from "./component/layout/Home";
import Navbar from "./component/layout/Navbar";
import ContractCreate from "./component/contract/ContractCreate";
import CustomerUpdate from "./component/customer/CustomerUpdate";
import FacilityList from "./component/facility/FacilityList";
import FacilityCreate from "./component/facility/FacilityCreate";
import FacilityUpdate from "./component/facility/FacilityUpdate";
import ContractList from "./component/contract/ContractList";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                {/*customer*/}
                <Route path='/customerList' element={<CustomerList/>}/>
                <Route path='/customerCreate' element={<ContractCreate/>}/>
                <Route path='/customerUpdate' element={<CustomerUpdate/>}/>
                {/*facility*/}
                <Route path='/facilityList' element={<FacilityList/>}/>
                <Route path='/facilityCreate' element={<FacilityCreate/>}/>
                <Route path='/facilityUpdate' element={<FacilityUpdate/>}/>
                {/*contract*/}
                <Route path='/contractList' element={<ContractList/>}/>
                <Route path='/contractCreate' element={<ContractCreate/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
