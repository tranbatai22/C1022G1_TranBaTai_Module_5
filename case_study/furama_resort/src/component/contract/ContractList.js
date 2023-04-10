import React, {useState} from "react";
import Contract from "./Contract";
import {NavLink} from "react-router-dom";
import ContractModalDelete from "../modal_delete/ContractModalDelete";

function ContractList() {
    const [deleteId, setDeleteId] = useState(0)
    const [deleteName, setDeleteName] = useState("")
    const getPropsDeleteContract = (id, name) => {
        setDeleteId(id);
        setDeleteName(name);
    }
    return (
        <div>
            <center>
                <h1>DANH SÁCH HỢP ĐỒNG</h1>x
                <NavLink to='/facilityUpdate' style={{textDecoration: "none"}}>
                    <button className="btn btn-outline-primary">
                        Thêm mới hợp đồng
                    </button>
                </NavLink>
            </center>
            <table className="table table-light">
                <thead>
                <tr>
                    <th>Stt</th>
                    <th>Code</th>
                    <th>Facility</th>
                    <th>Customer</th>
                    <th>Date Start</th>
                    <th>Date End</th>
                    <th>Deposit</th>
                    <th>Total Money</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {Contract.contract.map((contractList, index) =>
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{contractList.code}</td>
                        <td>{contractList.facility.name}</td>
                        <td>{contractList.customer.name}</td>
                        <td>{contractList.dateStart}</td>
                        <td>{contractList.dateEnd}</td>
                        <td>{contractList.deposit}</td>
                        <td>{contractList.totalMoney}</td>
                        <td>
                            <NavLink to='/contractUpdate' style={{textDecoration: "none"}}>
                                <button className="btn btn-outline-secondary" style={{color: "blue"}}>
                                    Chỉnh sửa
                                </button>
                            </NavLink>
                        </td>
                        <td>
                            <button className="btn btn-outline-secondary" style={{color: "red"}}
                                    type="button"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    onClick={() => getPropsDeleteContract(contractList.id, contractList.code)}>
                                Xoá
                            </button>
                        </td>

                    </tr>
                )}
                </tbody>
            </table>
            <ContractModalDelete
                id={deleteId}
                name={deleteName}
            />
        </div>
    )
}

export default ContractList;