package com.example.management_books_be.model;

import javax.persistence.*;

@Entity
public class Book {
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private int id;
    private String codeBook;
    private String name;
    private String quantity;
    private String dateAdded;
    @ManyToOne
    @JoinColumn(name = "category_id", referencedColumnName = "id")
    private Category category;

    public Book() {
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

    public String getQuantity() {
        return quantity;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }

    public String getDateAdded() {
        return dateAdded;
    }

    public void setDateAdded(String dateAdded) {
        this.dateAdded = dateAdded;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}
