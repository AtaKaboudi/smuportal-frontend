import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { ProfessorComponent } from './professor/professor.component';
import { StudentComponent } from './student/student.component';
import { ChatComponent } from './chat/chat.component';
import { SharedModule} from '../shared/shared.module'
const routes: Routes = [
  {
    path: 'archives',
    component: MainComponent,
  }
 ];
 

@NgModule({
  declarations: [MainComponent, CourseComponent, ProfessorComponent, StudentComponent, ChatComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,

  ],
  
})
export class ArchivesModule { }
