import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTeamComponent } from './content-team.component';

describe('ContentTeamComponent', () => {
  let component: ContentTeamComponent;
  let fixture: ComponentFixture<ContentTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentTeamComponent]
    });
    fixture = TestBed.createComponent(ContentTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
