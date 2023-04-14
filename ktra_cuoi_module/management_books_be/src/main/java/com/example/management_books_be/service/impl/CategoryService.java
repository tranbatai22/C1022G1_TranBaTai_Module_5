package com.example.management_books_be.service.impl;

import com.example.management_books_be.model.Category;
import com.example.management_books_be.repository.ICategoryRepository;
import com.example.management_books_be.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService implements ICategoryService {
    @Autowired
    private ICategoryRepository categoryRepository;
    @Override
    public List<Category> findAll() {
        return categoryRepository.findAll();
    }
}
