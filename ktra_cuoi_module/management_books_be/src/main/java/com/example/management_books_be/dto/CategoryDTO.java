package com.example.management_books_be.dto;

import com.fasterxml.jackson.annotation.JsonBackReference;

public class CategoryDTO {
    private int id;
    private String name;

    public CategoryDTO() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
