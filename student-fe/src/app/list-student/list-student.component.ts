import { StudentServiceService } from './../student-service.service';
import { Student } from './../student';
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router, Routes} from "@angular/router";

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  student2!: Student;
  ListStudents!: Student[];

  constructor(private http: HttpClient, private studentService: StudentServiceService) { }

  ngOnInit(): void {
    this.getAllStudent();
  }

  getAllStudent(){
    const url='http://localhost:8080/api/list';
    this.http.get<Student[]>(url).subscribe((resJson) =>{
      this.ListStudents = resJson;
    })
  }

  getEdit(student : Student){
    this.studentService.setStudent(student);
  }

  deleteStudent(student: Student){
    if(confirm('Are you sure!!!')){
      const url='http://localhost:8080/api/' + student.id;
      this.http.delete(url).subscribe((resJson) => {
        alert("success deleted");
        this.getAllStudent();
      }, error => {
        alert('error delete');
      })
    }
  }

}
