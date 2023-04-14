import React, {useEffect, useState} from 'react'
import * as bookService from '../service/BookService'
import * as categoryService from '../service/CategoryService'
import {NavLink} from 'react-router-dom'
import {Field, Form, Formik} from 'formik'
import ReactPaginate from 'react-paginate'

export default function ListBook() {
    const [books, setBook] = useState([])
    const [categorys, setCategory] = useState([])
    const [pageCount, setPageCount] = useState()
    let [count, setCount] = useState(1)
    const [deleteId, setDeleteId] = useState()
    const [deleteName, setDeleteName] = useState()
    const showListBook = async () => {
        const res = await bookService.findAll('', '')
        setBook(res.data.content)
        setPageCount(res.data.totalPages)

    }
    const showListCategory = async () => {
        const res = await categoryService.findAll()
        setCategory(res.data)
    }

    useEffect(() => {
        showListBook();
        showListCategory();

    }, [])

    const handlePageClick = async (page) => {
        const res = await bookService.findAll('', '', page.selected)
        setBook(res.data.content)
        setCount(Math.ceil(res.data.size * page.selected + 1))
        console.log(res.data);
    }
    const getPropsDelete = (id, name) => {
        setDeleteId(id)
        setDeleteName(name)
    }

    const handleDelete = async (id) => {
        await bookService.remove(id)
        alert("Xóa thành công")
        showListBook();
    }
    return (
        <>
            <h2 className='text-center'>Quản lí sách</h2>
            <div className='row mx-0'>
                <div className='col-6'>
                    <NavLink to='/create' className='btn btn-dark'>Thêm mới sách</NavLink>
                </div>
                <Formik initialValues={{
                    name: '',
                    bookType: ''

                }}
                        onSubmit={(value) => {
                            console.log(value);
                            const showList = async () => {
                                const res = await bookService.findAll(value.name, value.bookType)
                                console.log(res.data.content);
                                if (res.data.content == '') {
                                    document.getElementById('nameSearch').innerHTML = 'Không tìm thấy tên ' + value.name
                                } else {
                                    document.getElementById('nameSearch').innerHTML = ''
                                }
                                setBook(res.data.content)
                            }
                            showList()
                        }}
                >
                    <Form className='col-6'>
                        <div className="form-group">
                            <Field type="text"
                                   class="form-control float-start w-50" name="name" placeholder="Tìm kiếm..."/>
                        </div>
                        <Field as='select' name="bookType" id="bookType" className=''>
                            <option value=''>--Thể loại--</option>
                            {
                                categorys().map((category, index) => (
                                    <>
                                        <option key={index} value={category.id}>
                                            {category.name}
                                        </option>
                                    </>
                                ))

                            }

                        </Field>
                        <div>
                            <button type="submit float-end" className="btn btn-primary">Tìm kiếm</button>
                        </div>
                    </Form>
                </Formik>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Mã sách</th>
                        <th>Tên sách</th>
                        <th>Thể loại</th>
                        <th>Ngày nhập sách</th>
                        <th>Số lượng</th>
                        <th>Chỉnh sửa</th>
                        <th>Xoá</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        books.map((book, index) => (
                            <tr key={index}>
                                <td scope="row">{count++}</td>
                                <td>{book.code}</td>
                                <td>{book.name}</td>
                                <td>{book.category.name}</td>
                                <td>{book.dateAdded}</td>
                                <td>{book.quantity}</td>
                                <td>
                                    <NavLink className={'btn btn-primary'} to={`/edit/${book.id}`}>Chỉnh sửa</NavLink>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-danger"
                                            onClick={() => getPropsDelete(book.id, book.name)} data-bs-toggle="modal"
                                            data-bs-target="#deleteBook">
                                        Xóa
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
                <h2 id='nameSearch' className='text-danger text-center'/>
                <ReactPaginate
                    previousLabel="Trước"
                    nextLabel="Sau"
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    containerClassName='pagination'
                    previousClassName='page-item'
                    previousLinkClassName='page-link'
                    nextClassName='page-item'
                    nextLinkClassName='page-link'
                    pageClassName='page-item'
                    pageLinkClassName='page-link'
                    activeClassName='active'
                    activeLinkClassName='page-link'
                />
            </div>
            <div className="modal fade" id="deleteBook" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            Bạn có chắc chắn muốn xóa <span className='text-danger'>{deleteName}</span>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                            <button type="button" data-bs-dismiss="modal" onClick={() => handleDelete(deleteId)}
                                    className="btn btn-primary">Xác nhận
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}