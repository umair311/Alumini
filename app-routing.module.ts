import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { ProfileComponent } from './profile/profile.component';
import { EventComponent } from './event/event.component';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'event',component:EventComponent
  },

{
  path:'student',component:StudentComponent
},
{
  path:'teacher',component:TeacherComponent
},
{
  path:'profile',component:ProfileComponent
},
{
  path:'app',component:AppComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
