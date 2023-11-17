import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home-budget-team',
  templateUrl: './home-budget-team.component.html',
  styleUrls: ['./home-budget-team.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':increment', [
        style({ transform: 'translateX(100%)' }),
        animate('300ms', style({ transform: 'translateX(0)' })),
      ]),
      transition(':decrement', [
        style({ transform: 'translateX(-100%)' }),
        animate('300ms', style({ transform: 'translateX(0)' })),
      ]),
    ]),
  ],
})
export class HomeBudgetTeamComponent {
  activeTab: number = 1;

  selectTab(tab: number) {
    if (tab > this.activeTab) {
      this.activeTab = tab;
    } else if (tab < this.activeTab) {
      this.activeTab = tab;
    }
  }
}
