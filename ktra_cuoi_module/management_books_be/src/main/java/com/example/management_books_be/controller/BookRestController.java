package com.example.management_books_be.controller;

import com.example.management_books_be.dto.BookDTO;
import com.example.management_books_be.model.Book;
import com.example.management_books_be.service.IBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.awt.print.Pageable;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/book")
public class BookRestController {
    @Autowired
    private IBookService bookService;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("")
    public Page<Book> showListBook(@RequestParam(required = false, defaultValue = "") String name,
                                   @RequestParam(required = false, defaultValue = "") String category,
                                   @PageableDefault(size = 3) Pageable pageable) {
        return bookService.searchBook(name, category, pageable);
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/detail")
    public Book detailBook(@RequestParam(required = false) int id) {
        return bookService.findByIdBook(id);
    }

    @PostMapping("")
    public ResponseEntity<?> create(@Validated @RequestBody BookDTO bookDTO, BindingResult bindingResult) {
        if (!bindingResult.hasErrors()) {
            bookService.saveBook(bookDTO);
        } else {
            Map<String, String> map = new LinkedHashMap<>();
            List<FieldError> err = bindingResult.getFieldErrors();
            for (FieldError error : err) {
                if (!map.containsKey(error.getField())) {
                    map.put(error.getField(), error.getDefaultMessage());
                }
            }
            return new ResponseEntity<>(map, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping("")
    public ResponseEntity<?> edit(@Validated @RequestBody BookDTO bookDTO, BindingResult bindingResult) {
        if (!bindingResult.hasErrors()) {
            bookService.updateBook(bookDTO);
        } else {
            Map<String, String> map = new LinkedHashMap<>();
            List<FieldError> err = bindingResult.getFieldErrors();
            for (FieldError error : err) {
                if (!map.containsKey(error.getField())) {
                    map.put(error.getField(), error.getDefaultMessage());
                }
            }
            return new ResponseEntity<>(map, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("")
    @ResponseStatus(HttpStatus.OK)
    public void delete(@RequestParam(required = false) Integer id) {
        bookService.deleteBook(id);
    }
}
