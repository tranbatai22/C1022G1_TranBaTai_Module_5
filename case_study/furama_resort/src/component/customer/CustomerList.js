import React, {useEffect, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import * as customerService from '../../service/CustomerService'
import CustomerModalDelete from "../modal_delete/CustomerModalDelete";

function CustomerList() {
    const navigate = useNavigate();
    const [customers, setCustomer] = useState([]);
    const [customerTypes, setCustomerType] = useState([]);

    const ferchCustomer = async () => {
        let result = await customerService.findAll();
        setCustomer(result.data);
    }

    const ferchCustomerType = async () => {
        let result = await customerService.findAllCustomerType();
        setCustomerType(result.data);
    }

    useEffect(() => {
        ferchCustomer();
        ferchCustomerType();
    }, []);

    const [deleteId, setDeleteId] = useState(0)
    const [deleteName, setDeleteName] = useState("")
    const getPropsDeleteCustomer = (id, name) => {
        setDeleteId(id);
        setDeleteName(name);
    }
    const handleUpdate = (id) => {
        navigate(`/customerUpdate/${id}`)
    }

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
                    <th>Stt</th>
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
                        <td>
                                {customerTypes.filter(customerType => (
                                customerType.id == customerList.customerTypeId))
                                [0]?.name}
                        </td>
                        <td>
                            <button onClick={() => handleUpdate(customerList.id)}
                                    className="btn btn-outline-secondary"
                                    style={{color: "blue"}}>
                                Chỉnh sửa
                            </button>
                        </td>
                        <td>
                            <button className="btn btn-outline-secondary" style={{color: "red"}}
                                    type="button"
                                    data-bs-toggle="modal"
                                    data-bs-target="#deleteCustomer"
                                    onClick={() => getPropsDeleteCustomer(customerList.id, customerList.name)}>
                                Xoá
                            </button>
                        </td>

                    </tr>
                )}
                </tbody>
            </table>

            <CustomerModalDelete
                id={deleteId}
                name={deleteName}
                getShowList={() => {
                    ferchCustomer();
                }}
            />

        </div>

    )
}

export default CustomerList;