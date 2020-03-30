import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  fname:any="Muhammad Umair";
lname:any="Tariq";
cnic:any="31103-2584701-5";
email:any="umairchohdary086@gmail.com";
se:any="2012";
ss:any="2010";
dob:any="03-08-1996";
gender:any="Male";
cc:any="Lahore";
pc:any="Fortabbas";
phone:any="0305-7186461";
degree:any="Mcs";
awards:any="Gold Medal";
profession:any="Web Devolper";

  constructor() { }

  ngOnInit(): void {
  }

}
