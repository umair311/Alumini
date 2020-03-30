import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  head:any="All Event";
  detail:any="  NUST SEECS Alumni Association is a token of love and care for our own Alma mater. It provides all alumni a dedicated platform for sharing with your former faculty and successive generations of NUST SEECS students your achievements, memories, views and passions. This association also aims to knit SEECS Alma meter into fraternity of life-long friends and companions."

  constructor() { }

  ngOnInit(): void {
  }

}
