import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeBrianComponent } from './welcome-brian.component';

describe('WelcomeBrianComponent', () => {
  let component: WelcomeBrianComponent;
  let fixture: ComponentFixture<WelcomeBrianComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeBrianComponent]
    });
    fixture = TestBed.createComponent(WelcomeBrianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
