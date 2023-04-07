import React, {useEffect, useState} from 'react';
import * as bookService from '../service/BookService';
import {NavLink} from "react-router-dom";
import {useNavigate} from "react-router";

function List() {
    let navigate = useNavigate();
    const [book, setBook] = useState([]);

    useEffect(() => {
        const fetchBook = async () => {
            let result = await bookService.findAll();
            setBook(result);
        };
        fetchBook();
    }, []);

    const handleDelete = async (id) => {
        await bookService.remove(id)
        let res = await bookService.findAll();
        setBook(res)
    }

    return (
        <div>
            <NavLink to='/create'>
                <button>Add new book</button>
            </NavLink>
            <table border={1}>
                <thead>
                <th>1</th>
                <th>Title</th>
                <th>Quantity</th>
                <th>Action</th>
                </thead>
                <tbody>
                {book.map((books, index) =>
                    <tr key={index}>
                        <td>{books.id}</td>
                        <td>{books.title}</td>
                        <td>{books.quantity}</td>
                        <td>
                            <button onClick={() =>
                                handleDelete(books.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}

export default List;