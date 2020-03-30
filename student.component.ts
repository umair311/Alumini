import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  ahead:any='Alumini Students';
alumini:any[]=[

{
  img:"assets/img1.jpg",
  name:"Muhammad Umair",
  res:"2000 To 2010"
},
{
  img:"assets/img2.jpg",
  name:"Saifullah Khan",
  res:"2008 To 2015"
},
{
  img:"assets/img3.jpg",
  name:"Muhammad Umair Tariq",
  res:"2010 To 2020"
},
{
  img:"assets/img1.jpg",
  name:"Muhammad Umair",
  res:"2000 To 2010"
},
{
  img:"assets/img2.jpg",
  name:"Saifullah Khan",
  res:"2008 To 2015"
},
{
  img:"assets/img3.jpg",
  name:"Muhammad Umair Tariq",
  res:"2010 To 2020"
},
{
  img:"assets/img1.jpg",
  name:"Muhammad Umair",
  res:"2000 To 2010"
},
{
  img:"assets/img2.jpg",
  name:"Saifullah Khan",
  res:"2008 To 2015"
},
{
  img:"assets/img3.jpg",
  name:"Muhammad Umair Tariq",
  res:"2010 To 2020"
},

]

  constructor() { }

  ngOnInit(): void {
  }

}
