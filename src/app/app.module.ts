import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CotactUsComponent } from './cotact-us/cotact-us.component';
import { BlogComponent } from './blog/blog.component';
import { TechnologyComponent } from './technology/technology.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,    
    CotactUsComponent,
    BlogComponent,
    TechnologyComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
