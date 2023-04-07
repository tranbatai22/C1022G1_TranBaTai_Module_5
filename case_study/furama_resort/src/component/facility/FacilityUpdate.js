import React from "react";
import * as Yup from "yup";
import {ErrorMessage, Field, Formik} from "formik";

function FacilityUpdate() {
    return (
        <Formik initialValues={{
            name: "",
            area: "",
            cost: "",
            maxPeople: "",
            standard: "",
            description: "",
            poolArea: "",
            numberOfFloors: "",
            facilityFree: "",
            rentType: [],
            facilityType: []
        }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required("Không được để trống")
                        .matches(/^[a-zA-Z ]*$/,
                            "Tên không đúng định dạng"),
                    area: Yup.number()
                        .required("Không được để trống"),
                    cost: Yup.number()
                        .required("Không được để trống"),
                    maxPeople: Yup.number()
                        .required("Không được để trống"),
                    standard: Yup.string()
                        .required("Không được để trống"),
                    description: Yup.string()
                        .required("Không được để trống"),
                    poolArea: Yup.number()
                        .required("Không được để trống"),
                    numberOfFloors: Yup.number()
                        .required("Không được để trống")
                })
                }
                onSubmit={(values) => {
                    console.log(values)
                }}>

            <div>
                <div className='text-center'>
                    <h1 style={{fontWeight: "bold"}}>Thêm mới khách hàng</h1>
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
                            <label htmlFor="area" style={{fontWeight: "bold"}}>
                                Diện tích:<span style={{color: "red"}}>*</span>
                            </label>
                            <div className="input-group">
                                <Field type="text" id="area" className="form-control" placeholder="Nhập diện tích"
                                       name="area"/>
                                <span className="input-group-text"/>
                            </div>
                            <div>
                                <ErrorMessage name='area' component='span' className='form-err text-danger'/>
                            </div>
                        </div>

                        <div className="mt-3 form-group">
                            <label htmlFor="cost" style={{fontWeight: "bold"}}>
                                Giá tiền:<span style={{color: "red"}}>*</span>
                            </label>
                            <div className="input-group">
                                <Field type="text" id="cost" className="form-control" placeholder="Nhập giá tiền"
                                       name="cost"/>
                                <span className="input-group-text"/>
                            </div>
                            <div>
                                <ErrorMessage name='cost' component='span' className='form-err text-danger'/>
                            </div>
                        </div>

                        <div className="mt-3 form-group">
                            <label htmlFor="maxPeople" style={{fontWeight: "bold"}}>
                                Số người tối đa:<span style={{color: "red"}}>*</span>
                            </label>
                            <div className="input-group">
                                <Field type="text" id="maxPeople" className="form-control"
                                       placeholder="Nhập số người tối đa" name="maxPeople"/>
                                <span className="input-group-text"/>
                            </div>
                            <div>
                                <ErrorMessage name='maxPeople' component='span' className='form-err text-danger'/>
                            </div>
                        </div>

                        <div className="mt-3 form-group">
                            <label htmlFor="standard" style={{fontWeight: "bold"}}>
                                Tiêu chuẩn phòng:<span style={{color: "red"}}>*</span>
                            </label>
                            <div className="input-group">
                                <Field type="text" id="standard" className="form-control"
                                       placeholder="Tiêu chuẩn phòng"
                                       name="standard"/>
                                <span className="input-group-text"/>
                            </div>
                            <div>
                                <ErrorMessage name='standard' component='span' className='form-err text-danger'/>
                            </div>
                        </div>

                        <div className="mt-3 form-group">
                            <label htmlFor="description" style={{fontWeight: "bold"}}>
                                Mô tả:<span style={{color: "red"}}>*</span>
                            </label>
                            <div className="input-group">
                                <Field type="text" id="description" className="form-control"
                                       placeholder="Nhập mô tả" name="description"/>
                                <span className="input-group-text"/>
                            </div>
                            <div>
                                <ErrorMessage name='description' component='span' className='form-err text-danger'/>
                            </div>
                        </div>

                        <div className="mt-3 form-group">
                            <label htmlFor="poolArea" style={{fontWeight: "bold"}}>
                                Diện tích hồ bơi:<span style={{color: "red"}}>*</span>
                            </label>
                            <div className="input-group">
                                <Field type="text" id="poolArea" className="form-control"
                                       placeholder="Nhập diện tích hồ bơi" name="poolArea"/>
                                <span className="input-group-text"/>
                            </div>
                            <div>
                                <ErrorMessage name='poolArea' component='span' className='form-err text-danger'/>
                            </div>
                        </div>

                        <div className="mt-3 form-group">
                            <label htmlFor="numberOfFloors" style={{fontWeight: "bold"}}>
                                Số tầng:<span style={{color: "red"}}>*</span>
                            </label>
                            <div className="input-group">
                                <Field type="text" id="numberOfFloors" className="form-control"
                                       placeholder="Nhập số tầng"
                                       name="numberOfFloors"/>
                                <span className="input-group-text"/>
                            </div>
                            <div>
                                <ErrorMessage name='numberOfFloors' component='span' className='form-err text-danger'/>
                            </div>
                        </div>

                        <div className="mt-3 form-group">
                            <label htmlFor="facilityFree" style={{fontWeight: "bold"}}>
                                Dịch vụ miễn phí:
                            </label>
                            <div className="input-group">
                                <Field type="text" id="facilityFree" className="form-control"
                                       placeholder="Nhập dịch vụ miễn phí" name="facilityFree"/>
                                <span className="input-group-text"/>
                            </div>
                            <div>
                                <ErrorMessage name='facilityFree' component='span' className='form-err text-danger'/>
                            </div>
                        </div>

                        <div className="mt-3 form-group">
                            <label htmlFor="facilityType" style={{fontWeight: "bold"}}>
                                Loại dịch vụ:<span style={{color: "red"}}>*</span>
                            </label>
                            <div className="input-group">
                                <select id="facilityType" className="form-control" name="facilityType">
                                    <option/>
                                </select>
                                <span className="input-group-text"/>
                            </div>
                            <div>
                                <ErrorMessage name='facilityType' component='span' className='form-err text-danger'/>
                            </div>
                        </div>

                        <div className="mt-3 form-group">
                            <label htmlFor="rentType" style={{fontWeight: "bold"}}>
                                Kiểu thuê:<span style={{color: "red"}}>*</span>
                            </label>
                            <div className="input-group">
                                <select id="rentType" className="form-control" name="rentType">
                                    <option/>
                                </select>
                                <span className="input-group-text"/>
                            </div>
                            <div>
                                <ErrorMessage name='rentType' component='span' className='form-err text-danger'/>
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

export default FacilityUpdate;