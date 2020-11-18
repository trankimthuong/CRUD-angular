package com.codegym.demo.controller;

import com.codegym.demo.model.Student;
import com.codegym.demo.service.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class StudentApi {
    @Autowired
    private IStudentService studentService;

    @GetMapping("/list")
    public ResponseEntity<Iterable<Student>> findAll(){
        return new ResponseEntity<>(studentService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Student>> getOneStudent(@PathVariable Long id){
        return new ResponseEntity<>(studentService.findById(id), HttpStatus.OK);
    }


    @PostMapping("")
    public ResponseEntity<Student> create(@RequestBody Student student){
        return new ResponseEntity<>(studentService.save(student), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public  ResponseEntity<Student> edit(@PathVariable Long id, @RequestBody Student student){
        student.setId(id);
        return new ResponseEntity<>( studentService.save(student), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Student> delete(@PathVariable Long id){
        studentService.remove(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
