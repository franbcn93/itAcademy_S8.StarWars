import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { LogAndSignComponent } from './log-and-sign.component';

describe('LogAndSignComponent', () => {
  let component: LogAndSignComponent;
  let fixture: ComponentFixture<LogAndSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
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

  it('should be instanced', () => {
    expect(component).toBeInstanceOf(LogAndSignComponent);
  });

  it(`detect Changes login() and signup()`, () => {
    component.login();
    component.signup();
    fixture.detectChanges();
  });
});
