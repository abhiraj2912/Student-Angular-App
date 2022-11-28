import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudententryComponent } from './studententry/studententry.component';
import { StudentSearchComponent } from './student-search/student-search.component';
import { StudentDeleteComponent } from './student-delete/student-delete.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';

const myRoute:Routes=[
  {
    path:"",
    component:StudententryComponent
  },{
    path:"search",
    component:StudentSearchComponent
  },
  {
    path:"delete",
    component:StudentDeleteComponent
  },
  {
    path:"view",
    component:StudentViewComponent
  }
]



@NgModule({
  declarations: [
    AppComponent,
    StudententryComponent,
    StudentSearchComponent,
    StudentDeleteComponent,
    StudentViewComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
