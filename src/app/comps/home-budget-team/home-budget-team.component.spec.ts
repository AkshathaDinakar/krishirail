import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBudgetTeamComponent } from './home-budget-team.component';

describe('HomeBudgetTeamComponent', () => {
  let component: HomeBudgetTeamComponent;
  let fixture: ComponentFixture<HomeBudgetTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeBudgetTeamComponent]
    });
    fixture = TestBed.createComponent(HomeBudgetTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
