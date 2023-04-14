package com.example.management_books_be.dto;

import javax.validation.constraints.Pattern;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;

public class BookDTO {
    private int id;
    @Pattern(regexp = "BO-[0-9]{4}$", message = "Mã sách có định dạng BO-XXXX (X là số)")
    private String codeBook;
    @Size(max = 100, message = "Tên sách không dài quá 100 ký tự")
    private String name;
    @Positive(message = "Số lượng sách phải là số nguyên dương")
    private int quantity;
    private String dateAdded;
    private CategoryDTO categoryDTO;

    public BookDTO() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCodeBook() {
        return codeBook;
    }

    public void setCodeBook(String codeBook) {
        this.codeBook = codeBook;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getDateAdded() {
        return dateAdded;
    }

    public void setDateAdded(String dateAdded) {
        this.dateAdded = dateAdded;
    }

    public CategoryDTO getCategoryDTO() {
        return categoryDTO;
    }

    public void setCategoryDTO(CategoryDTO categoryDTO) {
        this.categoryDTO = categoryDTO;
    }
}
