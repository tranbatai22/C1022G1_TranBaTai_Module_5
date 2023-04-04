import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {RotatingLines} from 'react-loader-spinner'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function HealthDeclaration() {
    return (
        <div>
            <h1>Tờ khai y tế</h1>
            <Formik
                initialValues={{
                    name: "",
                    identity: "",
                    birthYear: "",
                    gender: "",
                    nationality: "",
                    workingCompany: "",
                    workingParts: "",
                    haveHealthnsuranceCard: false,
                    province: "",
                    district: "",
                    ward: "",
                    apartmentNumber: "",
                    phoneNumber: "",
                    email: "",
                    dauHieu: [],
                    tiepXuc: []
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required("Khong duoc de trong."),
                    identity: Yup.string().required("Khong duoc de trong."),
                    birthYear: Yup.string().required("Khong duoc de trong.").min("1900"),
                    nationality: Yup.string().required("Khong duoc de trong."),
                    province: Yup.string().required("Khong duoc de trong."),
                    district: Yup.string().required("Khong duoc de trong."),
                    ward: Yup.string().required("Khong duoc de trong."),
                    apartmentNumber: Yup.string().required("Khong duoc de trong."),
                    phoneNumber: Yup.string().required("Khong duoc de trong."),
                    email: Yup.string()
                        .required("Khong duoc de trong.")
                        .email()
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
                    <Form className="w-50 border border-2 border-success p-3 rounded">
                        <div className="mb-3">
                            <label htmlFor="name">Họ tên</label>
                            <Field type="text" name="name" className="form-control" id="name"/>
                            <ErrorMessage name="name" component="span" className="form-err"/>
                        </div>

                        <div className="mb-3  form-group">
                            <label htmlFor="identity">Số hộ chiếu/CMND</label>
                            <Field type="text" name="identity" className="form-control" id="identity"/>
                            <ErrorMessage name="identity" component="span" className="form-err"/>
                        </div>

                        <div className="mb-3 form-group">
                            <label htmlFor="birthYear">Năm sinh</label>
                            <Field type="text" name="birthYear" className="form-control" id="birthYear"/>
                            <ErrorMessage name="birthYear" component="span" className="form-err"/>
                        </div>

                        <div className="mb-3 form-group">
                            <span>Giới tính</span>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id="inlineRadio1"
                                       value="1"/>
                                <label className="form-check-label" htmlFor="inlineRadio1">Nam</label>
                            </div>

                            <div className="form-check form-check-inline form-group">
                                <input className="form-check-input" type="radio" name="gender" id="inlineRadio2"
                                       value="0"/>
                                <label className="form-check-label" htmlFor="inlineRadio2">Nữ</label>
                            </div>
                        </div>

                        <div className="mb-3 form-group">
                            <label htmlFor="nationality">Quốc tịch</label>
                            <Field type="text" name="nationality" className="form-control" id="nationality"/>
                            <ErrorMessage name="nationality" component="span" className="form-err"/>
                        </div>

                        <div className="mb-3 form-group">
                            <label htmlFor="workingCompany">Công ty làm việc</label>
                            <Field type="text" name="workingCompany" className="form-control" id="workingCompany"/>
                            <ErrorMessage name="workingCompany" component="span" className="form-err"/>
                        </div>

                        <div className="mb-3 form-group">
                            <label htmlFor="workingParts">Bộ phận làm việc</label>
                            <Field type="text" name="workingParts" className="form-control" id="workingParts"/>
                            <ErrorMessage name="workingParts" component="span" className="form-err"/>
                        </div>

                        <div className="mb-3 form-group">
                            <label htmlFor="haveHealthnsuranceCard">Có thẻ bảo hiểm y tế</label>
                            <Field class="form-check-input" type="checkbox" id="haveHealthnsuranceCard"
                                   name="haveHealthnsuranceCard"/>
                            <ErrorMessage name="haveHealthnsuranceCard" component="span" className="form-err"/>
                        </div>

                        <h3>Địa chỉ liên lạc tại Việt Nam</h3>
                        <div className="mb-3 form-group">
                            <label htmlFor="province">Tỉnh thành</label>
                            <Field type="text" name="province" className="form-control" id="province"/>
                            <ErrorMessage name="province" component="span" className="form-err"/>
                        </div>
                        <div className="mb-3 form-group">
                            <label htmlFor="district">Quận/huyện</label>
                            <Field type="text" name="district" className="form-control" id="district"/>
                            <ErrorMessage name="district" component="span" className="form-err"/>
                        </div>
                        <div className="mb-3 form-group">
                            <label htmlFor="ward">Phường/xã</label>
                            <Field type="text" name="ward" className="form-control" id="ward"/>
                            <ErrorMessage name="ward" component="span" className="form-err"/>
                        </div>

                        <div className="mb-3 form-group">
                            <label htmlFor="apartmentNumber">Số nhà, phố, tổ dân phố/thôn/đội</label>
                            <Field type="text" name="apartmentNumber" className="form-control" id="apartmentNumber"/>
                            <ErrorMessage name="apartmentNumber" component="span" className="form-err"/>
                        </div>

                        <div className="mb-3 form-group">
                            <label htmlFor="phoneNumber">Điện thoại</label>
                            <Field type="text" name="phoneNumber" className="form-control" id="phoneNumber"/>
                            <ErrorMessage name="phoneNumber" component="span" className="form-err"/>
                        </div>
                        <div className="mb-3 form-group">
                            <label htmlFor="email">Email</label>
                            <Field type="text" name="email" className="form-control" id="email"/>
                            <ErrorMessage name="email" component="span" className="form-err"/>
                        </div>

                        <div className="mb-3 form-group">
                            <h2>
                                Trong vòng 14 ngày qua, Anh/Chị có đến quốc gia/ vùng lãnh thổ nào
                                (Có thể đi qua nhiều quốc gia)
                            </h2>
                            <Field type="textarea" className="form-control" name="goManyCountry"/>
                        </div>
                        <div className="mb-3 form-group">
                            <h2>
                                Trong vòng 14 ngày qua, Anh/Chị có thấy xuất hiện dấu hiệu nào sau
                                đây không ?
                            </h2>

                            <div className="form-check">
                                <label className="form-check-label" htmlFor="sot">Sốt</label>
                                <Field className="form-check-input" type="checkbox" id="sot" name="dauHieu"
                                       value="sốt"/>
                            </div>

                            <div className="form-check">
                                <label className="form-check-label" htmlFor="ho">
                                    Ho
                                </label>
                                <Field className="form-check-input" type="checkbox" id="ho" name="dauHieu" value="ho"/>

                            </div>

                            <div className="form-check">
                                <label className="form-check-label" htmlFor="khoTho">
                                    Khó thở
                                </label>
                                <Field className="form-check-input" type="checkbox" id="khoTho" name="dauHieu"
                                       value="khó thở"/>

                            </div>
                            <div className="form-check">
                                <label className="form-check-label" htmlFor="viemPhoi">
                                    Viêm phổi
                                </label>
                                <Field className="form-check-input" type="checkbox" id="viemPhoi" name="dauHieu"
                                       value="viêm phổi"/>

                            </div>

                            <div className="form-check">
                                <label className="form-check-label" htmlFor="dauHong">
                                    Đau họng
                                </label>
                                <Field className="form-check-input" type="checkbox" id="dauHong" name="dauHieu"
                                       value="đau họng"/>

                            </div>

                            <div className="form-check">
                                <label className="form-check-label" htmlFor="metMoi">
                                    Mệt mỏi
                                </label>
                                <Field className="form-check-input" type="checkbox" id="metMoi" name="dauHieu"
                                       value="mệt mỏi"/>

                            </div>
                        </div>

                        <div className="mb-3 form-group">
                            <h2>
                                Trong vòng 14 ngày qua, Anh/Chị có tiếp xúc với?
                            </h2>

                            <div className="form-check">
                                <label className="form-check-label" htmlFor="check1">
                                    Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19
                                </label>
                                <Field className="form-check-input" type="checkbox" id="check1" name="tiepXuc"
                                       value="người bệnh hoặc nghi ngờ"/>

                            </div>

                            <div className="form-check">
                                <label className="form-check-label" htmlFor="check2">
                                    Người từ nước ngoài có bệnh COVID-19
                                </label>
                                <Field className="form-check-input" type="checkbox" id="check2" name="tiepXuc"
                                       value="người từ nước ngoài có bệnh COVID-19"/>

                            </div>

                            <div className="form-check">
                                <label className="form-check-label" htmlFor="check2">
                                    Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)
                                </label>
                                <Field className="form-check-input" type="checkbox" id="check2" name="tiepXuc"
                                       value="người có biểu hiện"/>

                            </div>

                        </div>
                        {
                            isSubmitting ?
                                <RotatingLines
                                    strokeColor="grey"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    width="50"
                                    visible={true}
                                />
                                :
                                <button type='submit' className='btn btn-primary'>Submit</button>
                        }
                    </Form>
                )}

            </Formik>
        </div>
    );
}

export default HealthDeclaration;
