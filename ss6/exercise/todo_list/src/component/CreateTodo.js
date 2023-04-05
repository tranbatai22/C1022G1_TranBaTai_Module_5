import React from 'react';
import {useNavigate} from "react-router";
import {Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {RotatingLines} from "react-loader-spinner";
import {toast} from "react-toastify";
import {Axios as adios} from "axios";

function CreateTodo() {
    let navigate = useNavigate()
    return (
        <>
            <Formik
                initialValues={ {name : ''}}
                validationSchema={Yup.object({
                    name : Yup.string()
                        .required('Require')
                })}
                onSubmit={(values , {setSubmitting }) => {
                    setTimeout(() => {
                        console.log(values);
                        adios.post('http://localhost:4000/listTodo',{...values})
                            .then(() => {
                                setSubmitting(false);
                                toast("Wow so easy!");
                                navigate('/')
                            })
                            .catch((err) => {
                                console.log(err);
                            })
                    },500);
                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <h1>Todo Create</h1>
                        <div className='mb-3'>
                            <label htmlFor='todoName' className='form-label'>Name</label>
                            <Field type = 'text' className='form-control' id = 'todoName'
                                   name='name'
                            />
                        </div>
                        {
                            isSubmitting ?
                                <RotatingLines
                                    strokeColor='grey'
                                    strokeWidth='5'
                                    animationDuration='0.75'
                                    width='50'
                                    visible={true}
                                />
                                :
                                <button type='submit' className='btn btn-primary'>Submit</button>
                        }
                    </Form>
                )}

            </Formik>
        </>
    );
}

export default CreateTodo;