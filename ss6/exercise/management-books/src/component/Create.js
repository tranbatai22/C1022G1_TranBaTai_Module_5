import React from 'react';
import {Form, Field, Formik} from 'formik';
import * as bookService from '../service/BookService'
import {useNavigate} from "react-router";

function Create() {
    let navigate = useNavigate();
    return (
        <Formik
            initialValues={{
                title: "",
                quantity: ""
            }}
            onSubmit={(values) => {
                const create = async () => {
                    console.log(values);
                    await bookService.save(values);
                    navigate('/');
                };
                create();
            }}
        >
            <Form>
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

export default Create;