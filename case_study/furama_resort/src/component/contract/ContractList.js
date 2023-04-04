import React from "react";


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
                    <th>Dịch vụ đi kèm</th>
                </tr>
                </thead>
            </table>
        </div>
    )
}

export default ContractList;