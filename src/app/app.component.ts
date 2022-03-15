import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'BMI', url: '/bmi', icon: 'calculator' },
    { title: 'Pregnant Due Calculator', url: '/pregnant', icon: 'woman' },
    { title: 'Ovulation Calender', url: '/ovulation-calender', icon: 'calendar-number' },
    { title: 'Logout', url: '/login', icon: 'log-out' },
  ];
  constructor() {}
}
