import React, {useEffect, useState} from 'react';
import {Form, Field, Formik} from 'formik';
import * as bookService from '../service/BookService'
import {useNavigate} from "react-router";
import {ClassDeclaration as param} from "@babel/types/lib";

function Update() {
    let navigate = useNavigate();
    const [books, setBook] = useState([]);
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
                <div>
                    <Field type='hidden' id='id' name='id'/>
                </div>
                <div>
                    <label htmlFor='title'>Title</label>
                    <Field id='title' name='title'/>
                </div>
                <div>
                    <label htmlFor='quantity'>Quantity</label>
                    <Field id='quantity' name='quantity'/>
                </div>
                <div>
                    <button type='submit'>Ok</button>
                </div>
            </Form>
        </Formik>
    );
}

export default Update;