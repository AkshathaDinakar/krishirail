import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from 'src/app/service/sidebar.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  recentTransactions = [
    { id: '528651571NT', date: 'Oct 08, 2019', name: 'Morgan Page', amount: 1358.75, status: 'COMPLETED' },
    { id: '421436904YT', date: 'Dec 18, 2019', name: 'Nita Hebert', amount: -1042.82, status: 'COMPLETED' },
    { id: '685377421YT', date: 'Dec 25, 2019', name: 'Marsha Chambers', amount: 1828.16, status: 'PENDING' },
    { id: '884960091RT', date: 'Nov 29, 2019', name: 'Charmaine Jackson', amount: 1647.55, status: 'COMPLETED' },
    { id: '361402213NT', date: 'Nov 24, 2019', name: 'Maura Carey', amount: -927.43, status: 'COMPLETED' }
  ];
  constructor(private router: Router,public sidebarService:SidebarService ) {}

  ngOnInit() {
    const token = localStorage.getItem('token');

    if (!token) {
      this.router.navigate(['/login']);
    }
  }
}