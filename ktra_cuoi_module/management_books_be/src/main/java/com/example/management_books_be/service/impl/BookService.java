package com.example.management_books_be.service.impl;

import com.example.management_books_be.dto.BookDTO;
import com.example.management_books_be.model.Book;
import com.example.management_books_be.model.Category;
import com.example.management_books_be.repository.IBookRepository;
import com.example.management_books_be.service.IBookService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.awt.print.Pageable;

@Service
public class BookService implements IBookService {
    @Autowired
    private IBookRepository bookRepository;

    @Override
    public Page<Book> searchBook(String name, String category, Pageable pageable) {
        return bookRepository.findByNameContainingAndCategoryContaining(name, category, pageable);
    }

    @Override
    public Book findByIdBook(int id) {
        return bookRepository.findByIdBook(id);
    }

    @Override
    public void saveBook(BookDTO bookDTO) {
        Book book = new Book();
        book.setCategory(new Category(bookDTO.getCategoryDTO().getId()));
        BeanUtils.copyProperties(bookDTO, book);
        bookRepository.saveBook(
                book.getCodeBook(),
                book.getName(),
                book.getCategory().getId(),
                book.getDateAdded(),
                book.getQuantity());
    }

    @Override
    public void updateBook(BookDTO bookDTO) {
        Book book = new Book();
        book.setCategory(new Category(bookDTO.getCategoryDTO().getId()));
        BeanUtils.copyProperties(bookDTO, book);
        bookRepository.updateBook(
                book.getCodeBook(),
                book.getName(),
                book.getCategory().getId(),
                book.getDateAdded(),
                book.getQuantity(),
                book.getId());
    }

    @Override
    public void deleteBook(int id) {
        bookRepository.deleteBook(id);
    }
}
