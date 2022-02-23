import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetPilotComponent } from './target-pilot.component';

describe('TargetPilotComponent', () => {
  let component: TargetPilotComponent;
  let fixture: ComponentFixture<TargetPilotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetPilotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetPilotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
