package com.example.management_books_be.repository;

import com.example.management_books_be.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Calendar;
import java.util.List;

public interface ICategoryRepository extends JpaRepository<Category, Integer> {
    @Query(value = "select * from category",nativeQuery = true)
    List<Category> findAllCategory();

}
