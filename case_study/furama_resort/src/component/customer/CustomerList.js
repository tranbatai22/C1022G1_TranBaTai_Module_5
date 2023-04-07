import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import * as customerService from '../../service/CustomerService'

function CustomerList() {

    const [customers, setCustomer] = useState([]);
    const [customerTypes, setCustomerType] = useState([]);

    const fetchCustomerType = async () => {
        let result2 = await customerService.findAllCustomerType();
        setCustomerType(result2);
    }

    const ferchCustomer = async () => {
        let result = await customerService.findAll();
        setCustomer(result);
    }

    useEffect(() => {
        ferchCustomer();
        fetchCustomerType();
    }, []);

    return (
        <div>
            <center>
                <h1>DANH SÁCH KHÁCH HÀNG</h1>
                <NavLink to='/customerCreate' style={{textDecoration: "none"}}>
                    <button className="btn btn-outline-primary">
                        Thêm mới khách hàng
                    </button>
                </NavLink>
            </center>
            <table className="table table-light">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Birthday</th>
                    <th>Gender</th>
                    <th>Id card</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>CustomerType</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {customers.map((customerList, index) =>
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{customerList.name}</td>
                        <td>{customerList.birthday}</td>
                        <td>{customerList.gender}</td>
                        <td>{customerList.idCard}</td>
                        <td>{customerList.phone}</td>
                        <td>{customerList.email}</td>
                        <td>{customerList.address}</td>

                        <td>{customerTypes.filter((customerTypeId) => (
                            customerTypeId.id === customerList.customerType
                        ))[0].name}
                        </td>

                        <td>
                            <NavLink to='/customerUpdate' style={{textDecoration: "none"}}>
                                <button className="btn btn-outline-secondary" style={{color: "blue"}}>
                                    Chỉnh sửa
                                </button>
                            </NavLink>
                        </td>
                        <td>
                            <NavLink to='/customerDelete'
                                     style={{textDecoration: "none"}}>
                                <button className="btn btn-outline-secondary" style={{color: "red"}}>
                                    Xoá
                                </button>
                            </NavLink>
                        </td>

                    </tr>
                )}
                </tbody>
            </table>
        </div>

    )
}

export default CustomerList;