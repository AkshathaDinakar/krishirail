// chat.component.ts

import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  animations: [
    trigger('slideInOut', [
      state('void', style({
        transform: 'translateX(100%)',
      })),
      state('*', style({
        transform: 'translateX(0)',
      })),
      transition('void <=> *', animate('300ms ease-in-out')),
    ]),
  ],
})
export class ChatComponent {
  activeUser: any = ''; // Set a default active user

  setActiveUser(contact: any) {
    this.activeUser = contact;
  }

  isChatOpen = false;

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
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
