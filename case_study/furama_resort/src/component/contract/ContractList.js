import React from "react";
import Contract from "./Contract";
import Facility from "../facility/Facility";
import Customer from "../customer/Customer";
function ContractList() {
    return (
        <div>
            <center>
                <h1>DANH SÁCH HỢP ĐỒNG</h1>
                <button className="btn btn-outline-primary">Thêm mới hợp đồng</button>
            </center>
            <table className="table table-light">
                <thead>
                <tr>
                    <th>Stt</th>
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
                {Contract.contract.map((contractList, index)=>
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{contractList.facility.name}</td>
                    <td>{contractList.customer.name}</td>
                    <td>{contractList.dateStart}</td>
                    <td>{contractList.dateEnd}</td>
                    <td>{contractList.deposit}</td>
                    <td>{contractList.totalMoney}</td>
                    <td><button className="btn btn-outline-secondary" style={{ color: "blue" }}>Edit</button></td>
                    <td><button className="btn btn-outline-secondary" style={{ color: "red" }}>Delete</button></td>

                </tr>
                )}
                </tbody>
            </table>
        </div>
    )
}

export default ContractList;