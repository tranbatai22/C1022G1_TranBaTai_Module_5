package com.example.management_books_be.service;

import com.example.management_books_be.dto.BookDTO;
import com.example.management_books_be.model.Book;
import org.springframework.data.domain.Page;

import java.awt.print.Pageable;
import java.util.List;

public interface IBookService {
    Page<Book> searchBook(String name, String category, Pageable pageable);

    Book findByIdBook(int id);

    void saveBook(BookDTO bookDTO);

    void updateBook(BookDTO bookDTO);

    void deleteBook(int id);
}
