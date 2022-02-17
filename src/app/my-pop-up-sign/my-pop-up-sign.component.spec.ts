import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPopUpSignComponent } from './my-pop-up-sign.component';

describe('MyPopUpSignComponent', () => {
  let component: MyPopUpSignComponent;
  let fixture: ComponentFixture<MyPopUpSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPopUpSignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPopUpSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
