import React from "react";
import {Formik} from "formik";

function CustomerUpdate() {
    return (
        <div>
            <div className='text-center'>
                <h1 style={{fontWeight: "bold"}}>Chỉnh sửa thông tin khách hàng</h1>
            </div>
            <form className="w-50 border border-2 border-success p-3 rounded">
                <div className="form-group">
                    <label htmlFor="name" style={{fontWeight: "bold"}}>
                        Tên:<span style={{color: "red"}}>*</span>
                    </label>
                    <div className="input-group">
                        <input type="text" id="name" className="form-control" placeholder="Nhập tên" name="name"/>
                        <span className="input-group-text"/>
                    </div>
                </div>

                <div className="mt-3 form-group">
                    <label htmlFor="dateOfBirth" style={{fontWeight: "bold"}}>
                        Ngày sinh:
                    </label>
                    <input type="date" id="dateOfBirth" className="form-control" name="dateOfBirth"/>
                </div>

                <div className="mt-3 form-group">
                    <label style={{fontWeight: "bold"}}>Giới tính:</label>
                    <div className="d-flex">
                        <label className="d-block me-4">
                            <input type="radio" defaultValue={1} name="gender" defaultChecked=""/>{" "}Nam
                        </label>
                        <label className="d-block">
                            <input type="radio" defaultValue={0} name="gender"/> Nữ
                        </label>
                    </div>
                </div>

                <div className="mt-3 form-group">
                    <label htmlFor="idCard" style={{fontWeight: "bold"}}>
                        CMND:
                    </label>
                    <div className="input-group">
                        <input type="text" id="idCard" className="form-control" placeholder="Nhập số cmnd"
                               name="idCard"/>
                        <span className="input-group-text"/>
                    </div>
                </div>

                <div className="mt-3 form-group">
                    <label htmlFor="phone" style={{fontWeight: "bold"}}>
                        Số điện thoại:
                    </label>
                    <div className="input-group">
                        <input type="text" id="phone" className="form-control" placeholder="Nhập số điện thoại"
                               name="phone"/>
                        <span className="input-group-text"/>
                    </div>
                </div>

                <div className="mt-3 form-group">
                    <label htmlFor="email" style={{fontWeight: "bold"}}>
                        Email:
                    </label>
                    <div className="input-group">
                        <input type="text" id="email" className="form-control" placeholder="Nhập email"
                               name="email"/>
                        <span className="input-group-text"/>
                    </div>
                </div>

                <div className="mt-3 form-group">
                    <label htmlFor="address" style={{fontWeight: "bold"}}>
                        Địa chỉ:
                    </label>
                    <div className="input-group">
                        <input type="text" id="address" className="form-control" placeholder="Nhập địa chỉ"
                               name="address"/>
                        <span className="input-group-text"/>
                    </div>
                </div>

                <div className="mt-3 form-group">
                    <label htmlFor="customerType" style={{fontWeight: "bold"}}>
                        Loại khách hàng:
                    </label>
                    <div className="input-group">
                        <select id="customerType" className="form-control" name="customerType">
                            <option/>
                        </select>
                        <span className="input-group-text"/>
                    </div>
                </div>

                <div className="mt-3 text-center">
                    <button
                        className="btn btn-info btn-outline-success btn-sm border border-2 border-success text-dark">
                        -- Save --
                    </button>
                </div>
            </form>
        </div>

    )
}

export default CustomerUpdate;