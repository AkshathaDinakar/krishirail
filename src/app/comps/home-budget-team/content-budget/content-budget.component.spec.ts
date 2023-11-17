import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBudgetComponent } from './content-budget.component';

describe('ContentBudgetComponent', () => {
  let component: ContentBudgetComponent;
  let fixture: ComponentFixture<ContentBudgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentBudgetComponent]
    });
    fixture = TestBed.createComponent(ContentBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
