import { Component } from '@angular/core';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.css']
})
export class StudentSearchComponent {

  admissionno=""

  readValues=()=>{
    let data = {"admissionno":this.admissionno}
    console.log(data)
  }

}
