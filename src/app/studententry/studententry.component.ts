import { Component } from '@angular/core';

@Component({
  selector: 'app-studententry',
  templateUrl: './studententry.component.html',
  styleUrls: ['./studententry.component.css']
})
export class StudententryComponent {
  name=""
  rollno=""
  admissionno=""
  mobile=""
  college=""
  parentname=""
  parentmobile=""
  username=""
  password=""

  readValues=()=>{
    let data={"name":this.name,"rollno":this.rollno,"admissionno":this.admissionno,"mobile":this.mobile,"college":this.college,"parentname":this.parentname,"parentmobile":this.parentmobile,"username":this.parentname,"password":this.password}
    console.log(data)

  }

}
