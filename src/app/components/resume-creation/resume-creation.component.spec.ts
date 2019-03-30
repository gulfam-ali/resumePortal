import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeCreationComponent } from './resume-creation.component';

describe('ResumeCreationComponent', () => {
  let component: ResumeCreationComponent;
  let fixture: ComponentFixture<ResumeCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
