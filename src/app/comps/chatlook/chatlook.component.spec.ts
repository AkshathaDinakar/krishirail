import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatlookComponent } from './chatlook.component';

describe('ChatlookComponent', () => {
  let component: ChatlookComponent;
  let fixture: ComponentFixture<ChatlookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatlookComponent]
    });
    fixture = TestBed.createComponent(ChatlookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
