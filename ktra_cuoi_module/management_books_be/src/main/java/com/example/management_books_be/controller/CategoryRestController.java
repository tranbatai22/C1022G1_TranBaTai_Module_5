package com.example.management_books_be.controller;

import com.example.management_books_be.model.Category;
import com.example.management_books_be.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/category")
public class CategoryRestController {
    @Autowired
    private ICategoryService categoryService;

    @GetMapping("")
    public ResponseEntity<List<Category>> showList() {
        List<Category> categoryList = categoryService.findAll();
        if (categoryList == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(categoryList, HttpStatus.OK);
        }
    }
}
