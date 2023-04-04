import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {RotatingLines} from 'react-loader-spinner'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom';


function ContactForm() {
    // let navigate = useNavigate();
    return (
        <>
            <center>
                <Formik initialValues={{name: '', email: '', phone: '', message: ''}}

                        validationSchema={Yup.object({
                            name: Yup.string()
                                .required("khong duoc de trong"),
                            email: Yup.string()
                                .email("email khong dung dinh dang")
                                .required("khong duoc de trong"),
                            phone: Yup.number()
                                .required("khong duoc de trong")
                        })}

                        onSubmit={(values, {setSubmitting}) => {
                            setTimeout(() => {
                                console.log(values);
                                setSubmitting(false);
                                toast("ok baby !");
                            }, 5000);
                        }}
                >

                    {({isSubmitting}) => (
                        <form>
                            <h1>Contact form</h1>
                            <div className={"mb-3"}>
                                <label htmlFor='name' className='form-label'>Name</label>
                                <Field type='text' className='form-control' id='name'
                                       name='name'/>
                                <ErrorMessage name='name' component='span' className='form-err'/>
                            </div>
                            <div className={"mb-3"}>
                                <label htmlFor='email' className='form-label'>Email</label>
                                <Field type='text' className='form-control' id='email'
                                       name='email'/>
                                <ErrorMessage name='email' component='span' className='form-err'/>
                            </div>
                            <div className={"mb-3"}>
                                <label htmlFor='phone' className='form-label'>Phone</label>
                                <Field type='text' className='form-control' id='phone'
                                       name='phone'/>
                                <ErrorMessage name='phone' component='span' className='form-err'/>
                            </div>
                            <div className={"mb-3"}>
                                <label htmlFor='message' className='form-label'>Message</label>
                                <Field type='text' className='form-control' id='message'
                                       name='message'/>
                            </div>

                            {
                                isSubmitting ?
                                    <RotatingLines
                                        strokeColor="grey"
                                        strokeWidth="5"
                                        animationDuration="0.75"
                                        width="50"
                                        visible={true}
                                    /> :
                                    <button type={"submit"} className={'btn btn-primary'}>Submit</button>
                            }
                        </form>
                    )}
                </Formik>
            </center>
        </>
    );
}

export default ContactForm;
