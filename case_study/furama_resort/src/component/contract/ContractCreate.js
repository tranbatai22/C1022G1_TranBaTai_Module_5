import React from "react";
import {Formik, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';

function ContractCreate() {
    return (
        <Formik
            initialValues={{
                facility: [],
                customer: [],
                dateStart: "",
                dateEnd: "",
                deposit: "",
                totalMoney: ""
            }}
            validationSchema={Yup.object({
                facility: Yup.string()
                    .required("Không được để trống"),
                customer: Yup.string()
                    .required("Không được để trống"),
                dateStart: Yup.date()
                    .required("Không được để trống"),
                dateEnd: Yup.date()
                    .required("Không được để trống"),
                deposit: Yup.number()
                    .required("Không được để trống"),
                totalMoney: Yup.number()
                    .required("Không được để trống")
            })}
            onSubmit={(values => {
                console.log(values);
            })}>

            <div>
                <div className='text-center'>
                    <h1 style={{fontWeight: "bold"}}>Thêm mới khách hàng</h1>
                </div>

                <div className='d-flex justify-content-center mt-3'>
                    <form className="w-50 border border-2 border-success p-3 rounded ">
                        {/*<div className="mt-3 form-group">*/}
                        {/*    <label htmlFor="facility" style={{fontWeight: "bold"}}>*/}
                        {/*        Dịch vụ:<span style={{color: "red"}}>*</span>*/}
                        {/*    </label>*/}
                        {/*    <div className="input-group">*/}
                        {/*        <Field component='select' name="facility">*/}
                        {/*            {facilitys.map((facility) => (*/}
                        {/*                <option key={facility.id} value={facility.id}>*/}
                        {/*                    {facility.name}*/}
                        {/*                </option>*/}
                        {/*            ))}*/}
                        {/*        </Field>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div className="mt-3 form-group">*/}
                        {/*    <label htmlFor="customer" style={{fontWeight: "bold"}}>*/}
                        {/*        Khách hàng:<span style={{color: "red"}}>*</span>*/}
                        {/*    </label>*/}

                        {/*    <div className="input-group">*/}

                        {/*        <Field component='select' name="customer">*/}
                        {/*            {customers.map((customer) => (*/}
                        {/*                <option key={customer.id} value={customer.id}>*/}
                        {/*                    {customer.name}*/}
                        {/*                </option>*/}
                        {/*            ))}*/}
                        {/*        </Field>*/}

                        {/*    </div>*/}
                        {/*</div>*/}


                        <div className="mt-3 form-group">
                            <label htmlFor="dateStart" style={{fontWeight: "bold"}}>
                                Ngày bắt đầu:<span style={{color: "red"}}>*</span>
                            </label>
                            <div>
                                <Field type="date" id="dateStart" className="form-control" name="dateStart"/>
                            </div>
                            <div>
                                <ErrorMessage name='dateStart' component='span' className='form-err text-danger'/>
                            </div>
                        </div>

                        <div className="mt-3 form-group">
                            <label htmlFor="dateEnd" style={{fontWeight: "bold"}}>
                                Ngày kết thúc:<span style={{color: "red"}}>*</span>
                            </label>
                            <div>
                                <Field type="date" id="dateEnd" className="form-control" name="dateEnd"/>
                            </div>
                            <div>
                                <ErrorMessage name='dateEnd' component='span' className='form-err text-danger'/>
                            </div>
                        </div>

                        <div className="mt-3 form-group">
                            <label htmlFor="deposit" style={{fontWeight: "bold"}}>
                                Số tiền cọc:<span style={{color: "red"}}>*</span>
                            </label>
                            <div className="input-group">
                                <Field type="text" id="deposit" className="form-control" placeholder="Nhập số tiền cọc"
                                       name="deposit"/>
                                <span className="input-group-text"/>
                            </div>
                            <div>
                                <ErrorMessage name='deposit' component='span' className='form-err text-danger'/>
                            </div>
                        </div>

                        <div className="mt-3 form-group">
                            <label htmlFor="totalMoney" style={{fontWeight: "bold"}}>
                                Tổng tiền thanh toán:<span style={{color: "red"}}>*</span>
                            </label>
                            <div className="input-group">
                                <Field type="text" id="totalMoney" className="form-control"
                                       placeholder="Nhập số tiền cọc"
                                       name="totalMoney"/>
                                <span className="input-group-text"/>
                            </div>
                            <div>
                                <ErrorMessage name='totalMoney' component='span' className='form-err text-danger'/>
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

export default ContractCreate;