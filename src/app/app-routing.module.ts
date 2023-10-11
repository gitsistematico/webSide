import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { TechnologyComponent } from './technology/technology.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',    
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
  {
    path:'home',
    component: HomeComponent 
  },
  {
    path:'tecnology',
    component: TechnologyComponent
  },
  {
    path:'contactUs',
    component: AboutUsComponent 
  },
  {
    path:'blog',
    component: BlogComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
