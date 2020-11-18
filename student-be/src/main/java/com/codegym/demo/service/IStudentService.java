package com.codegym.demo.service;

import com.codegym.demo.model.Student;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface IStudentService {
    Iterable<Student> findAll();
    Optional<Student> findById(Long id);
    Student save(Student student);
    void remove(Long id);
}
