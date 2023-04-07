import React from "react";
import {ErrorMessage, Field, Formik} from "formik";
import * as Yup from 'yup';

function CustomerUpdate() {
    return (
        <Formik initialValues={{
            name: "",
            birthday: "",
            gender: "",
            idCard: "",
            phone: "",
            email: "",
            address: "",
            customerType: []
        }}
                validationSchema={Yup.object({
                        name: Yup.string()
                            .required("Không được để trống")
                            .matches(/^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/,
                                "Têm không đúng định dạng"),
                        birthday: Yup.string()
                            .required("Không được để trống"),
                        gender: Yup.string()
                            .required("Không được để trống"),
                        idCard: Yup.string()
                            .required("Không được để trống")
                            .matches(/^[0-9]{9}$|^[0-9]{12}$/,
                                "Cmnd chỉ chưa kí tự số"),
                        phone: Yup.string()
                            .required("Không được để trống")
                            .matches(/^(090|091|\(84\)\+90|\(84\)\+91)[0-9]{7}$/,
                                "Số điện thoại chỉ chứa kí tự số"),
                        email: Yup.string()
                            .required("Không được để trống")
                            .email("Email không đúng định dạng"),
                        address: Yup.string()
                            .required("Không được để trống")
                    }
                )}
                onSubmit={(values) => {
                    console.log(values);
                }}>

            <div>
                <div className='text-center'>
                    <h1 style={{fontWeight: "bold"}}>Chỉnh sửa thông tin khách hàng</h1>
                </div>

                <div className='d-flex justify-content-center mt-3'>
                    <form className="w-50 border border-2 border-success p-3 rounded ">
                        <Field name='id' type='hidden'/>

                        <div className="form-group">
                            <label htmlFor="name" style={{fontWeight: "bold"}}>
                                Tên:<span style={{color: "red"}}>*</span>
                            </label>
                            <div className="input-group">
                                <Field type="text" id="name" className="form-control" placeholder="Nhập tên"
                                       name="name"/>
                                <span className="input-group-text"/>
                            </div>
                            <div>
                                <ErrorMessage name='name' component='span' className='form-err text-danger'/>
                            </div>
                        </div>

                        <div className="mt-3 form-group">
                            <label htmlFor="birthday" style={{fontWeight: "bold"}}>
                                Ngày sinh:<span style={{color: "red"}}>*</span>
                            </label>
                            <div>
                                <Field type="date" id="dateOfBirth" className="form-control" name="birthday"/>
                            </div>
                            <div>
                                <ErrorMessage name='birthday' component='span' className='form-err text-danger'/>
                            </div>
                        </div>

                        <div className="mt-3 form-group">
                            <label style={{fontWeight: "bold"}}>
                                Giới tính:<span style={{color: "red"}}>*</span>
                            </label>
                            <div className="d-flex">
                                <label className="d-block me-4">
                                    <Field type="radio" defaultValue={1} name="gender" defaultChecked=""/>Nam
                                </label>
                                <label className="d-block">
                                    <Field type="radio" defaultValue={0} name="gender"/> Nữ
                                </label>
                            </div>
                            <div>
                                <ErrorMessage name='gender' component='span' className='form-err text-danger'/>
                            </div>
                        </div>

                        <div className="mt-3 form-group">
                            <label htmlFor="idCard" style={{fontWeight: "bold"}}>
                                CMND:<span style={{color: "red"}}>*</span>
                            </label>
                            <div className="input-group">
                                <Field type="text" id="idCard" className="form-control" placeholder="Nhập số cmnd"
                                       name="idCard"/>
                                <span className="input-group-text"/>
                            </div>
                            <div>
                                <ErrorMessage name='idCard' component='span' className='form-err text-danger'/>
                            </div>
                        </div>

                        <div className="mt-3 form-group">
                            <label htmlFor="phone" style={{fontWeight: "bold"}}>
                                Số điện thoại:<span style={{color: "red"}}>*</span>
                            </label>
                            <div className="input-group">
                                <Field type="text" id="phone" className="form-control"
                                       placeholder="Nhập số điện thoại"
                                       name="phone"/>
                                <span className="input-group-text"/>
                            </div>
                            <div>
                                <ErrorMessage name='phone' component='span' className='form-err text-danger'/>
                            </div>
                        </div>

                        <div className="mt-3 form-group">
                            <label htmlFor="email" style={{fontWeight: "bold"}}>
                                Email:<span style={{color: "red"}}>*</span>
                            </label>
                            <div className="input-group">
                                <Field type="text" id="email" className="form-control" placeholder="Nhập email"
                                       name="email"/>
                                <span className="input-group-text"/>
                            </div>
                            <div>
                                <ErrorMessage name='email' component='span' className='form-err text-danger'/>
                            </div>
                        </div>

                        <div className="mt-3 form-group">
                            <label htmlFor="address" style={{fontWeight: "bold"}}>
                                Địa chỉ:<span style={{color: "red"}}>*</span>
                            </label>
                            <div className="input-group">
                                <Field type="text" id="address" className="form-control" placeholder="Nhập địa chỉ"
                                       name="address"/>
                                <span className="input-group-text"/>
                            </div>
                            <div>
                                <ErrorMessage name='address' component='span' className='form-err text-danger'/>
                            </div>
                        </div>

                        <div className="mt-3 form-group">
                            <label htmlFor="customerType" style={{fontWeight: "bold"}}>
                                Loại khách hàng:<span style={{color: "red"}}>*</span>
                            </label>
                            <div className="input-group">
                                <select id="customerType" className="form-control" name="customerType">
                                    <option/>
                                </select>
                                <span className="input-group-text"/>
                            </div>
                            <div>
                                <ErrorMessage name='customerType' component='span'
                                              className='form-err text-danger'/>
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
            </div>
        </Formik>
    )
}

export default CustomerUpdate;