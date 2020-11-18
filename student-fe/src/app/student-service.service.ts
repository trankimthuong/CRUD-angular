import { Student } from './student';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  student: BehaviorSubject<Student> = new BehaviorSubject<Student>(new Student('','',''));
  constructor() { }

  getStudent(){
    return this.student;
  }

  setStudent(studentTemp: Student){
    this.student.next(studentTemp);
  }
}
