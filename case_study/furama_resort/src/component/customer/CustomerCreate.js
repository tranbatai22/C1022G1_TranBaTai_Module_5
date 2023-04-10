import React, {useEffect, useState} from "react";
import {Formik, Field, ErrorMessage, Form} from "formik";
import * as Yup from 'yup';
import * as customerService from '../../service/CustomerService';
import {useNavigate} from "react-router";

function CustomerCreate() {
    let navigate = useNavigate();
    const [customerTypes, setCustomerType] = useState([]);

    const getCustomerType = async () => {
        const result = await customerService.findAllCustomerType();
        setCustomerType(result.data);
        return customerTypes;
    }

    useEffect(() => {
        getCustomerType();
    }, []);

    return (
        <div>
            <Formik
                initialValues={
                    {
                        name: "",
                        birthday: "",
                        gender: "",
                        idCard: "",
                        phone: "",
                        email: "",
                        address: "",
                        customerTypeId: customerTypes[0]?.name
                    }
                }
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
                })}

                onSubmit={(values) => {
                    const createCustomer = async () => {
                        console.log(values);
                        await customerService.save(values);
                        navigate('/customerList');
                    }
                    createCustomer();
                }}>

                <div>
                    <div className='text-center'>
                        <h1 style={{fontWeight: "bold"}}>Thêm mới khách hàng</h1>
                    </div>

                    <div className='d-flex justify-content-center mt-3'>
                        <Form className="w-50 border border-2 border-success p-3 rounded ">
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

                            <div className='mb-3'>
                                <label htmlFor='gender' className='form-label'>Giới tính</label>
                                <div className='form-check form-check-inline'>
                                    <Field className='form-check-input' type='radio' id='rd-1'
                                           name='gender'
                                           value='nam'/>
                                    <label className='form-check-label' htmlFor='rd-1'>Nam</label>
                                </div>
                                <div className='form-check form-check-inline'>
                                    <Field className='form-check-input' type='radio' id='rd-2'
                                           name='gender'
                                           value='nữ'/>
                                    <label className='form-check-label' htmlFor='rd-2'>Nữ</label>
                                </div>
                                <ErrorMessage name='gender' component='span' className='form-err text-danger'/>
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
                                <label htmlFor="customerTypeId" style={{fontWeight: "bold"}}>
                                    Loại khách hàng:<span style={{color: "red"}}>*</span>
                                </label>

                                <div className="input-group">

                                    <Field as='select' name="customerTypeId">
                                        {customerTypes.map((customerType) => (
                                            <option key={customerType.id} value={customerType.id}>
                                                {customerType.name}
                                            </option>
                                        ))}
                                    </Field>

                                </div>
                            </div>

                            <div className="mt-3 text-center">
                                <button type='submit'
                                        className="btn btn-info btn-outline-success btn-sm border border-2 border-success text-dark">
                                    -- Save --
                                </button>
                            </div>
                        </Form>
                    </div>
                </div>
            </Formik>
        </div>
    )
}

export default CustomerCreate;