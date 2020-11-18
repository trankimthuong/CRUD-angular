import { StudentServiceService } from './../student-service.service';
import { Student } from './../student';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router, Routes} from "@angular/router";

@Component({
  selector: 'app-detail-student',
  templateUrl: './detail-student.component.html',
  styleUrls: ['./detail-student.component.css']
})
export class DetailStudentComponent implements OnInit {

  student! : Student;
  constructor(private http: HttpClient, private studentService: StudentServiceService) { }

  ngOnInit(): void {
    this.studentService.getStudent().subscribe(s => this.student = s);
  }

}
