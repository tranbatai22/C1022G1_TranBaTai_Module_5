import React, {useEffect, useState} from 'react';
import {Form, Field, Formik} from 'formik';
import * as bookService from '../service/BookService'
import {useNavigate, useParams} from "react-router";


function Update() {
    let param = useParams()
    let navigate = useNavigate();
    const [books, setBook] = useState();
    useEffect(() => {
        const fetchApi = async () => {
            const res = await bookService.detail(param.id)
            setBook(res)
        }
        fetchApi()
    }, [])

    return (
        <Formik
            initialValues={{
                id: books?.id,
                title: books?.title,
                quantity: books?.quantity
            }}
            onSubmit={(values) => {
                const update = async () => {
                    console.log(values);
                    await bookService.update(values);
                    navigate('/');
                };
                update();
            }}
        >

            <Form>
                <Field type="hidden" name="id"/>

                <div className="form-group">
                    <label htmlFor="">Title</label>
                    <Field type="text" name="title" id=""/>
                </div>

                <div className="form-group">
                    <label htmlFor="">Quantity</label>
                    <Field type="text" name="quantity" id=""/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </Form>
        </Formik>
    );
}

export default Update;