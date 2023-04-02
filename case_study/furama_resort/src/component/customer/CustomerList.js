import React from "react";

function CustomerList() {
    return (
        <div>
            <center>
                <h1>DANH SÁCH KHÁCH HÀNG</h1>
                <button className="btn btn-outline-primary">Thêm mới khách hàng</button>
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
            </table>
        </div>

    )
}

export default CustomerList;