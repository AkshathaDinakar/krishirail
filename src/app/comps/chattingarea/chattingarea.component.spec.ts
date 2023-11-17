import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChattingareaComponent } from './chattingarea.component';

describe('ChattingareaComponent', () => {
  let component: ChattingareaComponent;
  let fixture: ComponentFixture<ChattingareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChattingareaComponent]
    });
    fixture = TestBed.createComponent(ChattingareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
