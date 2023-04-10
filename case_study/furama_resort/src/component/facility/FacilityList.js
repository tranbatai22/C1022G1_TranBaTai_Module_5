import React, {useState} from "react";
import Facility from "./Facility";
import {NavLink} from "react-router-dom";
import {Formik, Form, ErrorMessage} from "formik";
import * as Yup from 'yup';
import FacilityModalDelete from "./FacilityModalDelete";

function FacilityList() {
    const [deleteId, setDeleteId] = useState(0)
    const [deleteName, setDeleteName] = useState("")
    const getPropsDeleteFacility = (id, name) => {
        setDeleteId(id);
        setDeleteName(name);
    }
    return (
        <div>
            <center>
                <h1>DANH SÁCH DỊCH VỤ</h1>
                <NavLink to='/facilityCreate' style={{textDecoration: "none"}}>
                    <button className="btn btn-outline-primary">
                        Thêm mới dịch vụ
                    </button>
                </NavLink>
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
                <tbody align="center">
                {Facility.facility.map((facilityList, index) =>

                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{facilityList.name}</td>
                        <td>{facilityList.area}</td>
                        <td>{facilityList.cost}</td>
                        <td>{facilityList.maxPeople}</td>
                        <td>{facilityList.standardRoom}</td>
                        <td>{facilityList.description}</td>
                        <td>{facilityList.poolArea}</td>
                        <td>{facilityList.numberOfFloors}</td>
                        <td>{facilityList.facilityFree}</td>
                        <td>{facilityList.rentType.name}</td>
                        <td>{facilityList.facilityType.name}</td>
                        <td>
                            <NavLink to='/facilityUpdate' style={{textDecoration: "none"}}>
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
                                    onClick={() => getPropsDeleteFacility(facilityList.id, facilityList.name)}>
                                Xoá
                            </button>
                        </td>

                    </tr>
                )
                }
                </tbody>
            </table>
            <FacilityModalDelete
                id={deleteId}
                name={deleteName}
            />
        </div>


    )
}

export default FacilityList;