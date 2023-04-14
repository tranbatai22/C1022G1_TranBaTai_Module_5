import React, {useEffect, useState} from 'react';
import * as bookService from '../service/BookService';
import {NavLink} from "react-router-dom";

function List() {
    const [books, setBook] = useState([]);
    const findAllBook = async () => {
        const result = await bookService.findAll();
        setBook(result);
    };

    useEffect(() => {
        findAllBook();
    }, []);

    return (
        <div>
            <NavLink to='/create'>
                <button>Add new book</button>
            </NavLink>
            <table className='table table--success'>
                <thead>
                <tr>
                <th>Stt</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Date Added</th>
                <th>Category</th>
                </tr>
                </thead>
                <tbody>
                {books.map((listBook, index) =>
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{listBook.name}</td>
                        <td>{listBook.quantity}</td>
                        <td>{listBook.dateAdded}</td>
                        <td>{listBook.category.name}</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}

export default List;