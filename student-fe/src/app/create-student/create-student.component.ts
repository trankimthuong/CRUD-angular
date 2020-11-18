import { HttpClient } from '@angular/common/http';
import { Student } from './../student';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  student!: Student;
  name!: string;
  address!: string;
  phoneNumber!: string;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  createStudent() {
    this.student = new Student(this.name, this.address, this.phoneNumber);
    const url = 'http://localhost:8080/api';
    this.http.post(url, this.student).subscribe((resJson) => {
      alert('created successful');
    }, error => {
      alert('created error');
    });
  }
}
