import { Component } from '@angular/core';
import { SidebarService } from 'src/app/service/sidebar.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  constructor(public sidebarService: SidebarService){}
  recentTransactions = [
    { id: '528651571NT', date: 'Oct 08, 2019', name: 'Morgan Page', amount: 1358.75, status: 'COMPLETED' },
    { id: '421436904YT', date: 'Dec 18, 2019', name: 'Nita Hebert', amount: -1042.82, status: 'COMPLETED' },
    { id: '685377421YT', date: 'Dec 25, 2019', name: 'Marsha Chambers', amount: 1828.16, status: 'PENDING' },
    { id: '884960091RT', date: 'Nov 29, 2019', name: 'Charmaine Jackson', amount: 1647.55, status: 'COMPLETED' },
    { id: '361402213NT', date: 'Nov 24, 2019', name: 'Maura Carey', amount: -927.43, status: 'COMPLETED' }
  ];

  summaryList : any =[
    {
      name : 'Total Revenue',
      value : 'Rs. 12,32,20,392.50'
    },
    {
      name : 'Bookings',
      value : '5,241'
    },
    {
      name : 'Cancellations',
      value : '1,014'
    },{
      name : 'Refunds',
      value : 'Rs. 1,23,239.54'
    },{
      name : 'Demurrage',
      value : 'Rs. 15,20,203.00'
    },{
      name : 'Cap. Utilization',
      value : '89%'
    },
    {
      name : 'Customers',
      value : '49,239'
    },{
      name : 'Field Executives',
      value : '274'
    },
    
  ];

  schedule = [
    {
      title: '00926 is the top revenue generator. (39% of overall revenue)',
      time: 'in 32 minutes',
      location: 'Conference room 1B'
    },
    {
      title: '12749 generates the least revenue. (17% of overall revenue)',
      time: '10:30 AM'
    },
    {
      title: '00926 has highest capacity utilization. (97%)',
      time: '11:00 AM'
    },
    {
      title: '12750 has least capacity utilization. (79%)',
      time: '12:10 PM'
    },
    {
      title: '00927 is frequently delayed.',
      time: '05:30 PM',
      location: 'Magnolia'
    },
    {
      title: "Peak Demand - Jan., Feb., March, Oct., Nov. and Dec.",
      time: '07:30 PM',
      location: 'Home'
    }
   
  ];
}
