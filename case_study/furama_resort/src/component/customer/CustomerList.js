import React from "react";
import Customer from "./Customer";
import {NavLink} from "react-router-dom";
function CustomerList() {
    return (
        <div>
            <center>
                <h1>DANH SÁCH KHÁCH HÀNG</h1>
                <button className="btn btn-outline-primary">
                    <NavLink to='/customerCreate'>Thêm mới khách hàng</NavLink>
                 </button>
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
                            <button className="btn btn-outline-secondary" style={{ color: "blue" }}>
                                 <NavLink to='/customerUpdate'>Chỉnh sửa</NavLink>
                            </button>
                        </td>
                        <td><button className="btn btn-outline-secondary" style={{ color: "red" }}>Delete</button></td>


                    </tr>
                )}
                </tbody>
            </table>
        </div>

    )
}

export default CustomerList;