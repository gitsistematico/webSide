import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { TechnologyComponent } from './technology/technology.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { CotactUsComponent } from './cotact-us/cotact-us.component';

const routes: Routes = [
  {
    path:'',    
    // component: HomeComponent 
    pathMatch: 'full',
    redirectTo: 'home'
  },  
  {
    path:'home',
    component: HomeComponent 
  },
  {
    path:'aboutUs',
    component: AboutUsComponent 
  },
  {
    path:'tecnology',
    component: TechnologyComponent
  },
  {
    path:'contactUs',
    component: CotactUsComponent 
  },
  {
    path:'blog',
    component: BlogComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
