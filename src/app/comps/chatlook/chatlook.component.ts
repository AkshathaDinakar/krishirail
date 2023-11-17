// chatlook.component.ts

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chatlook',
  templateUrl: './chatlook.component.html',
  styleUrls: ['./chatlook.component.css']
})
export class ChatlookComponent {
  activeUser: any =''; // Set a default active user
  @Output() userSelected = new EventEmitter<any>();
  setActiveUser(contact: any) {
    this.activeUser = contact;
  }

  contacts = [
    { name: 'Bernard Langley', date: '26/04/2021', profileImg: '/assets/call/user1.jpg' },
    { name: 'Nunez Faulkner', date: '26/04/2021', profileImg: '/assets/call/user2.jpg' },
    { name: 'Edwards Mckenzie', date: '26/04/2021', profileImg: '/assets/call/user3.jpg' },
    { name: 'Elsie Melendez', date: '26/04/2021', profileImg: '/assets/call/user4.jpg' },
    { name: 'Mcleod Wagner', date: '26/04/2021', profileImg: '/assets/call/user5.jpg' },
    { name: 'Joseph Strickland', date: '26/04/2021', profileImg: '/assets/call/user6.jpg' },
    { name: 'Silva Foster', date: '26/04/2021', profileImg: '/assets/call/user7.jpg' },
    { name: 'Tina Harris', date: '26/04/2021', profileImg: '/assets/call/user8.jpg' },
    { name: 'Samantha Jacobson', date: '26/04/2021', profileImg: '/assets/call/user9.jpg' },
    { name: 'Olga Rhodes', date: '26/04/2021', profileImg: '/assets/call/user10.jpg' },
    { name: 'Earlene Rosales', date: '26/04/2021', profileImg: '/assets/call/user1.jpg' },
    { name: 'Francisca Perkins', date: '26/04/2021', profileImg: '/assets/call/user2.jpg' },
    { name: 'Margo Witt', date: '26/04/2021', profileImg: '/assets/call/user3.jpg' },
    { name: 'Madeleine Fletcher', date: '26/04/2021', profileImg: '/assets/call/user4.jpg' },
    { name: 'Barber Johnson', date: '26/04/2021', profileImg: '/assets/call/user7.jpg' }
  ];
}
