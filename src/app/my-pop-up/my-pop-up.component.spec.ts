import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPopupComponent } from './my-pop-up.component';

describe('MyPopUpComponent', () => {
  let component: MyPopupComponent;
  let fixture: ComponentFixture<MyPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
