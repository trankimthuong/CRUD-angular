import { StudentServiceService } from './../student-service.service';
import { Student } from './../student';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  student!: Student;
  name: string = '';
  address: string = '';
  phoneNumber: string = '';
  constructor(private http: HttpClient, private studentService: StudentServiceService) { }

  ngOnInit(): void {
    this.studentService.getStudent().subscribe(s => this.student = s);
    this.name = this.student.name;
    this.address = this.student.address;
    this.phoneNumber = this.student.phoneNumber;
  }

  getEditStudent(student2: Student){
    this.student = {
      id: student2.id,
      name: this.name,
      address: this.address,
      phoneNumber: this.phoneNumber
    }
    const url = 'http://localhost:8080/api/' + student2.id;
    this.http.put(url, this.student).subscribe((resJson) =>{
      alert('Edit successful');
    }, error =>{
      alert('Edit Error');
    });
  }
}
