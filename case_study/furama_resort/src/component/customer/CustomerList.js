import React from "react";
import Customer from "./Customer";
import {NavLink} from "react-router-dom";

function CustomerList() {
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
                {Customer.customer.map((customerList, index) =>
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{customerList.name}</td>
                        <td>{customerList.birthday}</td>
                        <td>{customerList.gender}</td>
                        <td>{customerList.idCard}</td>
                        <td>{customerList.phone}</td>
                        <td>{customerList.email}</td>
                        <td>{customerList.address}</td>
                        <td>{customerList.customerType.name}</td>
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