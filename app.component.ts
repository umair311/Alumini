import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'alumini';
head:any='Alumini Overview';
detail:any='NUST SEECS Alumni Association is a token of love and care for our own Alma mater. It provides all alumni a dedicated platform for sharing with your former faculty and successive generations of NUST SEECS students your achievements, memories, views and passions. This association also aims to knit SEECS Alma meter into fraternity of life-long friends and companions.NUST SEECS Alumni Association is a token of love and care for our own Alma mater. It provides all alumni a dedicated platform for sharing with your former faculty and successive generations of NUST SEECS students your achievements, memories, views and passions. This association also aims to knit SEECS Alma meter into fraternity of life-long friends and companions.NUST SEECS Alumni Association is a token of love and care for our own Alma mater. It provides all alumni a dedicated platform for sharing with your former faculty and successive generations of NUST SEECS students your achievements, memories, views and passions. This association also aims to knit SEECS Alma meter into fraternity of life-long friends and companions.';
thead:any='Top Teachers';
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

]
ahead:any='Top Alumini';
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

]
event:any="Upcoming events"
}
