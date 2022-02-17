import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogAndSignComponent } from './log-and-sign.component';

describe('LogAndSignComponent', () => {
  let component: LogAndSignComponent;
  let fixture: ComponentFixture<LogAndSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogAndSignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogAndSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
