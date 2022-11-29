import { Component } from '@angular/core';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent {

  admissionno=""

  readValues=()=>{
    let data = {"admissionno":this.admissionno}
    console.log(data)
  }
  
}
