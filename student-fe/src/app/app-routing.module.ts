import { CreateStudentComponent } from './create-student/create-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { DetailStudentComponent } from './detail-student/detail-student.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
    path: '',
    component: ListStudentComponent
  },

  {
    path: 'detail',
    component: DetailStudentComponent
  },
  {
    path: 'edit',
    component: EditStudentComponent
  },
  {
    path: 'create',
    component: CreateStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
