import { AfterViewInit, Component } from '@angular/core';

interface ChartOptions {
  chart: {
    type: string;
  };
  series: {
    name: string;
    data: number[];
  }[];
}

@Component({
  selector: 'app-content-home',
  templateUrl: './content-home.component.html',
  styleUrls: ['./content-home.component.css']
})
export class ContentHomeComponent {




  schedule = [
    {
      title: 'Group Meeting',
      time: 'in 32 minutes',
      location: 'Conference room 1B'
    },
    {
      title: 'Coffee Break',
      time: '10:30 AM'
    },
    {
      title: 'Public Beta Release',
      time: '11:00 AM'
    },
    {
      title: 'Lunch',
      time: '12:10 PM'
    },
    {
      title: 'Dinner with David',
      time: '05:30 PM',
      location: 'Magnolia'
    },
    {
      title: "Jane's Birthday Party",
      time: '07:30 PM',
      location: 'Home'
    },
    {
      title: "Overseer's Retirement Party",
      time: '09:30 PM',
      location: "Overseer's room"
    }
  ];
  
}
