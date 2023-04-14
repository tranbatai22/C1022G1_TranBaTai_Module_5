package com.example.management_books_be.repository;

import com.example.management_books_be.model.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.awt.print.Pageable;

public interface IBookRepository extends JpaRepository<Book, Integer> {
    @Query(value = "select * from book where name like %:name% and category_id like %:id% order by quantity asc", nativeQuery = true)
    Page<Book> findByNameContainingAndCategoryContaining(@Param("name") String name, @Param("id") String category, Pageable pageable);

    @Query(value = "select * from book where id = :id", nativeQuery = true)
    Book findByIdBook(@Param("id") int id);

    @Modifying
    @Transactional
    @Query(value = "insert into book(codeBook, name, category_id, dateAdded, quantity) values (:codeBook,:name,:category_id,:dateAdded,:quantity)", nativeQuery = true)
    void saveBook(@Param("codeBook") String codeBook
            , @Param("name") String name
            , @Param("category_id") Integer categoryId
            , @Param("dateAdded") String dateAdded
            , @Param("quantity") String quantity);

    @Modifying
    @Transactional
    @Query(value = "delete from book where id = :id", nativeQuery = true)
    void deleteBook(int id);

    @Modifying
    @Transactional
    @Query(value = "update book set codeBook = :codeBook, name = :name, category_id = :category_id, dateAdded = :dateAdded, quantity = :quantity where id = :id", nativeQuery = true)
    void updateBook(@Param("codeBook") String codeBook
            , @Param("name") String name
            , @Param("category_id") int categoryId
            , @Param("dateAdded") String dateAdded
            , @Param("quantity") String quantity
            , @Param("id") int id);
}
