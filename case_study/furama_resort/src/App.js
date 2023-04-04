import logo from './logo.svg';
import './App.css';

import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";
import Navbar from "./component/layout/Navbar";
import Home from "./component/layout/Home";

import FacilityList from "./component/facility/FacilityList";
import FacilityCreate from "./component/facility/FacilityCreate";
import FacilityUpdate from "./component/facility/FacilityUpdate";

import CustomerList from "./component/customer/CustomerList";
import CustomerCreate from "./component/customer/CustomerCreate";
import CustomerUpdate from "./component/customer/CustomerUpdate";

import ContractList from "./component/contract/ContractList";
import ContractCreate from "./component/contract/ContractCreate";

function App() {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <FacilityList/>
            <Footer/>
        </div>
    );
}

export default App;
