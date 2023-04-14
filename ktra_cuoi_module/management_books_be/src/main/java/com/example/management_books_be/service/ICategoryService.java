package com.example.management_books_be.service;

import com.example.management_books_be.model.Category;

import java.util.List;

public interface ICategoryService {
    List<Category> findAll();
}
