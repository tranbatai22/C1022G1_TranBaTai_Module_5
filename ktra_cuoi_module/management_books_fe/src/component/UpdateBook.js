import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as bookService from '../service/BookService'
import * as categoryService from '../service/CategoryService'
import * as Yup from 'yup'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'

export default function UpdateBook(){
    const [categorys, setCategory] = useState();
    const [detail,setDetail] = useState();
    const param = useParams();
    const navigate = useNavigate();

    const showListCategory = async () => {
        const res = await categoryService.findAll()
        setCategory(res.data)
    }

    const detailBook = async () => {
        const res = await bookService.findById(param.id)
        setDetail(res.data)
    }

    useEffect(() => {
        detailBook()
    }, [param.id])

    useEffect(() => {
        showListCategory()
    }, [])

    if(!categorys()){
        return null
    }
    if(!detail){
        return null
    }

    return(
        <>
            <div className='row mx-0 d-flex justify-content-center'>
                <div className='col-3'>
                    <h2 className='text-center fw-bold'>Chỉnh sửa sách</h2>
                    <Formik
                        initialValues={{
                            id:detail?.id,
                            codeBook:detail?.codeBook,
                            name:detail?.name,
                            categoryDTO:{
                                id : detail?.category.id
                            },
                            dateAdded:detail?.dateAdded,
                            quantity:detail?.quantity
                        }}
                        validationSchema={Yup.object({
                            codeBook: Yup.string()
                                .required('Không được bỏ trống')
                                .matches(/^[B][O][-][0-9]{4}$/, 'Mã sách có định dạng BO-XXXX (X là số)'),
                            name: Yup.string()
                                .required('Không được bỏ trống')
                                .max(100, 'Không được quá 100 kí tự'),
                            dateAdded: Yup.string()
                                .required('Không được bỏ trống'),
                            quantity: Yup.number()
                                .required('Không được bỏ trống')
                                .min(1, 'Số lượng phải lớn hơn 0')
                        })}
                        onSubmit={(values)=>{
                            const update = async()=>{
                                await bookService.update({
                                    ...values,
                                    categoryDTO: {
                                        id : +values.categoryDTO.id
                                    }
                                })
                                alert("Chỉnh sửa thành công")
                                navigate('/')
                            }
                            update()
                        }}
                    >
                        <Form>
                            <div className="form-group">
                                <label htmlFor="codeBook">Mã sách</label>
                                <Field type="text"
                                       className="form-control" name="codeBook" id="codeBook"
                                       placeholder="Nhập mã sách"/>
                            </div>
                            <ErrorMessage component='span' name="codeBook" className='text-danger'/>

                            <div className="form-group">
                                <label htmlFor="name">Tên sách</label>
                                <Field type="text"
                                       className="form-control" name="name" id="name" placeholder="Nhập tên sách"/>
                            </div>
                            <ErrorMessage component='span' name="name" className='text-danger'/>

                            <div className="form-group">
                                <label htmlFor="categoryDTO">Thể loại</label>
                                <Field as='select' name="categoryDTO" id="categoryDTO" className='form-select'>
                                    {
                                        showListCategory().map((category, index) => (
                                            <option key={index} value={category.id}>
                                                {category.name}
                                            </option>
                                        ))
                                    }
                                </Field>
                            </div>
                            <div className="form-group">
                                <label htmlFor="dateAdded">Ngày nhập sách</label>
                                <Field type="date"
                                       className="form-control" name="dateAdded" id="dateAdded" placeholder=""/>

                            </div>
                            <ErrorMessage component='span' name="dateAdded" className='text-danger'/>

                            <div className="form-group">
                                <label htmlFor="quantity">Số lượng</label>
                                <Field type="text"
                                       className="form-control" name="quantity" id="quantity"
                                       placeholder="Nhập số lượng"/>
                            </div>
                            <ErrorMessage component='span' name="quantity" className='text-danger'/>
                            <div>
                                <button type="submit" className="btn btn-primary">Xác nhận</button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    )
}