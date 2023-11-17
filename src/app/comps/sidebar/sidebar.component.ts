import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('slideInOut', [
      state('open', style({ transform: 'translateX(0)' })),
      state('closed', style({ transform: 'translateX(-100%)' })),
      transition('open => closed', animate('300ms ease-out')),
      transition('closed => open', animate('300ms ease-in')),
    ]),
  ],
})
export class SidebarComponent {
  state = 'open'; // Initially open

  toggle() {
    this.state = this.state === 'open' ? 'closed' : 'open';
  }
}
