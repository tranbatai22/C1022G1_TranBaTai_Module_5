import React from "react";
function StudentInfoComponent(props) {
    return (
        <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
            </tr>
            <tr>
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{props.age}</td>
                <td>{props.address}</td>
            </tr>
        </table>
    );
}

export default StudentInfoComponent;