import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  thead:any='Alumini Teachers';
teacher:any[]=[

{
  img:"img1.jpg",
  name:"Muhammad Umair",
  res:"Assistant Professor"
},
{
  img:"img2.jpg",
  name:"Saifullah Khan",
  res:"Assistant Professor"
},
{
  img:"img3.jpg",
  name:"Muhammad Umair Tariq",
  res:"Assistant Professor"
},
{
  img:"img1.jpg",
  name:"Arslan Mehmood",
  res:"Assistant Lecturer"
},
{
  img:"img2.jpg",
  name:"Hamza Javeed",
  res:"Lecturer"
},
{
  img:"img3.jpg",
  name:"Noman Ashraf",
  res:"Subject Specialist"
},
{
  img:"img1.jpg",
  name:"Atif",
  res:"Assistant Professor"
},
{
  img:"img2.jpg",
  name:"Hassan",
  res:"Assistant Professor"
},
{
  img:"img3.jpg",
  name:"Muhammad Abid",
  res:"Assistant Professor"
},
]


  constructor() { }

  ngOnInit(): void {
  }

}
