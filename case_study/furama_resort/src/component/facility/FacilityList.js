import React from "react";

function FacilityList() {
    return (
        <div>
            <center>
                <h1>DANH SÁCH DỊCH VỤ</h1>
                <button className="btn btn-outline-primary">Thêm mới dịch vụ</button>
            </center>
            <table className="table table-light">
                <thead>
                <tr>
                    <th>Stt</th>
                    <th>Name</th>
                    <th>Area</th>
                    <th>Cost</th>
                    <th>Max people</th>
                    <th>Standard</th>
                    <th>Description</th>
                    <th>Pool area</th>
                    <th>Number of Floors</th>
                    <th>Facility Free</th>
                    <th>Rent type</th>
                    <th>Facility type</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                <tr></tr>
                </tbody>
            </table>
        </div>

    )
}

export default FacilityList;