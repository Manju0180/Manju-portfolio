import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { AboutComponentComponent } from './components/about-component/about-component.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomeComponentComponent},
  {path:'about',component:AboutComponentComponent},
  {path: 'resume', component:ResumeComponent},
  {path:'projects', component:ProjectsComponent},
  {path:'contact', component:ContactComponent},
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
