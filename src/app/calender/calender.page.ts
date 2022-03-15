import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.page.html',
  styleUrls: ['./calender.page.scss'],
})
export class CalenderPage implements OnInit {

  date: string;
  type: 'string';
  constructor() { }

  
  onChange($event) {
    console.log($event);
  }
  ngOnInit() {
  }

}
